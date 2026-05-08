# 📦 Mykenjos Jeans — Documentación de Arquitectura y Funcionamiento

> E-commerce especializado en jeans colombianos, con tienda pública y panel administrativo completo.  
> Stack: **Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui**

---

## 🗂️ Índice

1. [Visión General](#1-visión-general)
2. [Stack Tecnológico](#2-stack-tecnológico)
3. [Estructura de Directorios](#3-estructura-de-directorios)
4. [Arquitectura de Rutas (App Router)](#4-arquitectura-de-rutas-app-router)
5. [Módulos del Sistema](#5-módulos-del-sistema)
   - [5.1 Tienda Pública](#51-tienda-pública)
   - [5.2 Carrito de Compras](#52-carrito-de-compras)
   - [5.3 Panel de Administración](#53-panel-de-administración)
   - [5.4 Autenticación y Seguridad](#54-autenticación-y-seguridad)
   - [5.5 API Routes Interna](#55-api-routes-interna)
6. [Modelos de Datos](#6-modelos-de-datos)
7. [Componentes Clave](#7-componentes-clave)
8. [Flujo de Usuario](#8-flujo-de-usuario)
9. [Consideraciones de Seguridad](#9-consideraciones-de-seguridad)
10. [Variables de Entorno](#10-variables-de-entorno)

---

## 1. Visión General

**Mykenjos Jeans** es una aplicación web de comercio electrónico orientada a la venta de jeans en Colombia. El sistema está dividido en dos grandes áreas:

| Área | Ruta Base | Acceso |
|---|---|---|
| **Tienda Pública** | `/` | Todos los visitantes |
| **Panel Administrativo** | `/admin` | Solo administradores autenticados |

La aplicación no utiliza base de datos externa; los datos de productos se gestionan en archivos TypeScript locales (`lib/data.ts`) y se persisten mediante llamadas a una API Route interna que reescribe el archivo. El carrito de compras se almacena en `localStorage` del navegador.

---

## 2. Stack Tecnológico

| Categoría | Tecnología | Versión |
|---|---|---|
| Framework | Next.js (App Router) | 16.0.3 |
| UI Library | React | 19.2.0 |
| Lenguaje | TypeScript | ^5 |
| Estilos | Tailwind CSS | ^4.1.9 |
| Componentes UI | shadcn/ui + Radix UI | latest |
| Iconos | Lucide React | ^0.454.0 |
| Tipografía | Google Fonts (Playfair Display + Inter) | — |
| Formularios | React Hook Form + Zod | latest |
| Notificaciones | Sonner (toast) | latest |
| Gráficas | Recharts | 2.15.4 |
| Analytics | @vercel/analytics | 1.3.1 |

---

## 3. Estructura de Directorios

```
Ecommerce-plantilla/
│
├── app/                        # App Router de Next.js (rutas de la aplicación)
│   ├── layout.tsx              # Layout raíz: Header, Footer, CartProvider, Toaster
│   ├── page.tsx                # Home: Hero + CategoryGrid + FeaturedProducts + Banner
│   ├── globals.css             # Estilos globales y tokens CSS
│   │
│   ├── admin/                  # Panel Administrativo (protegido por middleware)
│   │   ├── layout.tsx          # Layout del admin con Sidebar
│   │   ├── page.tsx            # Dashboard con métricas y reportes
│   │   ├── login/              # Página de inicio de sesión admin
│   │   ├── products/           # CRUD de productos
│   │   ├── orders/             # Gestión de pedidos
│   │   ├── customers/          # Gestión de clientes
│   │   └── settings/           # Configuración del sistema
│   │
│   ├── api/                    # API Routes internas de Next.js
│   │   ├── login/              # Endpoint de autenticación (POST)
│   │   └── products/           # Endpoint de persistencia de productos (POST)
│   │
│   ├── cart/                   # Página del carrito de compras
│   ├── category/               # Listado de productos por categoría ([slug])
│   ├── product/                # Detalle de producto ([id])
│   ├── checkout/               # Proceso de pago
│   │   └── success/            # Página de confirmación de pedido
│   ├── about/                  # Página "Nosotros"
│   └── contact/                # Página de contacto
│
├── components/                 # Componentes React reutilizables
│   ├── header.tsx              # Barra de navegación principal
│   ├── footer.tsx              # Pie de página
│   ├── hero.tsx                # Sección hero de la home
│   ├── category-grid.tsx       # Cuadrícula de categorías
│   ├── featured-products.tsx   # Productos destacados
│   ├── product-card.tsx        # Tarjeta de producto individual
│   ├── product-filters.tsx     # Filtros de búsqueda y categoría
│   ├── cart-provider.tsx       # Context + estado global del carrito
│   ├── theme-provider.tsx      # Proveedor de tema (next-themes)
│   ├── whatsapp-button.tsx     # Botón flotante de WhatsApp
│   ├── admin/                  # Componentes exclusivos del panel admin
│   │   ├── sidebar.tsx         # Navegación lateral del admin
│   │   ├── login-form.tsx      # Formulario de login
│   │   ├── products-table.tsx  # Tabla de productos con CRUD y filtros
│   │   ├── edit-product-modal.tsx  # Modal de crear/editar producto
│   │   ├── order-details-modal.tsx # Modal de detalle de pedido
│   │   └── customer-modal.tsx  # Modal de detalle de cliente
│   └── ui/                     # Componentes base de shadcn/ui (Button, Input, etc.)
│
├── lib/                        # Lógica de negocio y datos
│   ├── data.ts                 # Interfaz Product + array de productos (fuente de datos)
│   ├── custom-data.ts          # Interfaz Category + array de categorías
│   ├── auth.ts                 # Función de verificación de credenciales
│   └── utils.ts                # Utilidades (cn - clase merger con clsx + tailwind-merge)
│
├── hooks/                      # Custom Hooks de React
│   ├── use-toast.ts            # Hook para sistema de notificaciones
│   └── use-mobile.ts           # Hook para detección de dispositivo móvil
│
├── middleware.ts               # Protección de rutas /admin con cookies
├── next.config.mjs             # Configuración de Next.js
└── package.json                # Dependencias y scripts
```

---

## 4. Arquitectura de Rutas (App Router)

```
/                           → Home (Hero + Categorías + Destacados)
/about                      → Página Nosotros
/contact                    → Formulario de contacto
/category/[slug]            → Productos filtrados por categoría
    slugs: hombre | mujer | nuevos | ofertas
/product/[id]               → Detalle de producto con selector de talla
/cart                       → Carrito de compras
/checkout                   → Formulario de pago (mock)
/checkout/success           → Confirmación de pedido

/admin                      → Dashboard (protegido)
/admin/login                → Login del administrador
/admin/products             → Inventario y gestión de productos
/admin/orders               → Gestión de pedidos
/admin/customers            → Gestión de clientes
/admin/settings             → Configuración

/api/login                  → POST: Autenticación
/api/products               → POST: Guardar cambios en catálogo
```

---

## 5. Módulos del Sistema

### 5.1 Tienda Pública

La tienda pública es el área visible para todos los visitantes. Está compuesta por:

#### Home (`/`)
- **Hero** (`components/hero.tsx`): Banner principal con llamada a la acción.
- **CategoryGrid** (`components/category-grid.tsx`): Muestra las 4 categorías principales con imagen desde `lib/custom-data.ts`.
- **FeaturedProducts** (`components/featured-products.tsx`): Selección de productos con `isNew: true` o `isSale: true` de `lib/data.ts`.
- **Banner Promocional**: Sección fija que invita a registrarse para obtener descuentos.

#### Listado por Categoría (`/category/[slug]`)
- Filtra el array de `products` según el `slug` de la URL.
- Integra `ProductFilters` para búsqueda por nombre y filtros de precio/estado.
- Renderiza las tarjetas con `ProductCard`.

#### Detalle de Producto (`/product/[id]`)
- Muestra imagen, nombre, precio, precio original (si aplica), badge "Nuevo" o "En Oferta".
- Permite seleccionar talla (XS, S, M, L, XL, XXL).
- Botón **"Agregar al Carrito"** que llama a `addItem` del `CartContext`.

#### Checkout (`/checkout`)
- Formulario multi-sección: datos del comprador, dirección de envío, método de pago.
- Flujo mock: al finalizar redirige a `/checkout/success`.

---

### 5.2 Carrito de Compras

**Archivo clave:** `components/cart-provider.tsx`

El carrito utiliza el patrón **Context API + localStorage** para persistir entre sesiones sin necesidad de backend.

#### Estado del Contexto (`CartContextType`)

```typescript
interface CartContextType {
  items: CartItem[]           // Productos en el carrito
  addItem: (product, size) => void       // Agregar producto
  removeItem: (productId, size) => void  // Eliminar producto
  updateQuantity: (productId, size, quantity) => void  // Cambiar cantidad
  clearCart: () => void       // Vaciar carrito
  totalItems: number          // Suma total de unidades
  subtotal: number            // Suma total de precio * cantidad
}
```

#### Lógica de Persistencia

```
1. Al montar → lee "mykenjos-cart" de localStorage
2. Al modificar items → escribe en "mykenjos-cart" de localStorage
3. CartItem = Product + { quantity: number, selectedSize: string }
```

> **Nota:** Un mismo producto puede estar dos veces en el carrito si se eligieron tallas distintas. La unicidad se identifica por `(productId + selectedSize)`.

---

### 5.3 Panel de Administración

**Ruta base:** `/admin` (requiere cookie `auth_token`)

#### Dashboard (`/admin/page.tsx`)
Muestra métricas estáticas (demo):
- Ventas totales · Pedidos · Clientes activos · Tasa de conversión
- Tabla de pedidos recientes
- Gráfico de barras de productos más vendidos

#### Gestión de Productos (`/admin/products`)
Componente principal: `components/admin/products-table.tsx`

| Funcionalidad | Detalle |
|---|---|
| **Listar** | Tabla paginada con imagen, nombre, categoría, precio, stock, estado |
| **Buscar** | Búsqueda en tiempo real por nombre |
| **Filtrar** | Por categoría (hombre / mujer / accesorios) y por estado (activo / sin stock) |
| **Crear** | Modal `EditProductModal` con formulario vacío |
| **Editar** | Modal `EditProductModal` pre-relleno con datos del producto |
| **Eliminar** | Botón en dropdown de acciones |
| **Persistir** | `POST /api/products` con el array actualizado |

#### Gestión de Pedidos (`/admin/orders`)
- Tabla con todos los pedidos y sus estados.
- Modal `OrderDetailsModal` para ver el detalle completo.
- Exportación a CSV disponible.

#### Gestión de Clientes (`/admin/customers`)
- Listado de clientes con información de contacto.
- Modal `CustomerModal` con historial de pedidos del cliente.

---

### 5.4 Autenticación y Seguridad

La autenticación es simple basada en **cookies HTTP** y validación de credenciales en servidor.

#### Flujo de Login

```
1. Usuario accede a /admin/login
2. Rellena el LoginForm (username + password)
3. POST → /api/login
4. El servidor valida con checkCredentials() de lib/auth.ts
5. Si es válido → Set-Cookie: auth_token=my_secret_token
6. Middleware.ts detecta la cookie en /admin/* y permite el acceso
7. Si no hay cookie → redirige a /admin/login
```

#### Middleware (`middleware.ts`)

```typescript
// Protege todas las rutas /admin excepto /admin/login
if (url.pathname.startsWith('/admin') && !isAuthenticated) {
  redirect('/admin/login')
}

// Si ya está autenticado y va al login → redirige al panel
if (url.pathname === '/admin/login' && isAuthenticated) {
  redirect('/admin/products')
}
```

---

### 5.5 API Routes Interna

#### `POST /api/login`
- Recibe `{ username, password }`.
- Valida con `checkCredentials()`.
- Si es válido: responde `200` y setea la cookie `auth_token=my_secret_token`.
- Si es inválido: responde `401`.

#### `POST /api/products`
- Recibe `{ products: Product[] }`.
- Reescribe el archivo `lib/data.ts` con el array actualizado.
- Permite persistir los cambios del CRUD de productos sin base de datos.

---

## 6. Modelos de Datos

### `Product` (`lib/data.ts`)

```typescript
interface Product {
  id: string            // ID único (e.g. "1", "prod-1778120062905")
  name: string          // Nombre del producto
  price: number         // Precio en pesos colombianos (COP)
  category: string      // "hombre" | "mujer"
  image: string         // URL de imagen (Unsplash o path local /public)
  isNew?: boolean       // Badge "Nuevo"
  isSale?: boolean      // Badge "En Oferta"
  originalPrice?: number // Precio tachado si hay descuento
  stock?: number         // Unidades disponibles
}
```

### `CartItem` (`components/cart-provider.tsx`)

```typescript
interface CartItem extends Product {
  quantity: number      // Cantidad seleccionada
  selectedSize: string  // Talla elegida (XS/S/M/L/XL/XXL)
}
```

### `Category` (`lib/custom-data.ts`)

```typescript
interface Category {
  id: string            // "hombre" | "mujer" | "nuevos" | "ofertas"
  name: string          // Nombre visible (e.g. "Jeans Mujer")
  image?: string        // URL de imagen representativa
  description?: string  // Descripción opcional
}
```

---

## 7. Componentes Clave

| Componente | Archivo | Descripción |
|---|---|---|
| `Header` | `components/header.tsx` | Navbar sticky con logo, menú de categorías, búsqueda, cuenta y carrito con contador |
| `Footer` | `components/footer.tsx` | Links de navegación, redes sociales, métodos de pago, newsletter |
| `Hero` | `components/hero.tsx` | Sección hero fullscreen con CTA |
| `CategoryGrid` | `components/category-grid.tsx` | Grid 2x2 de categorías con imagen y overlay |
| `FeaturedProducts` | `components/featured-products.tsx` | Grid de productos destacados |
| `ProductCard` | `components/product-card.tsx` | Tarjeta con imagen, nombre, precio, badges y botón |
| `ProductFilters` | `components/product-filters.tsx` | Barra lateral de filtros para listados |
| `CartProvider` | `components/cart-provider.tsx` | Context API del carrito + persistencia localStorage |
| `WhatsAppButton` | `components/whatsapp-button.tsx` | Botón flotante de contacto vía WhatsApp |
| `Sidebar` (admin) | `components/admin/sidebar.tsx` | Navegación lateral del panel administrativo |
| `ProductsTable` | `components/admin/products-table.tsx` | Tabla CRUD con búsqueda, filtros y modal |
| `EditProductModal` | `components/admin/edit-product-modal.tsx` | Formulario de crear/editar producto |

---

## 8. Flujo de Usuario

### 🛍️ Compra (Cliente)

```
Home
 └─ Ve categorías → /category/[slug]
      └─ Selecciona producto → /product/[id]
           └─ Elige talla → "Agregar al carrito"
                └─ /cart → Revisa items, precios, cantidades
                     └─ /checkout → Llena datos y pago
                          └─ /checkout/success → Confirmación
```

### 🔧 Administración

```
/admin/login → Credenciales → Cookie auth_token
 └─ /admin → Dashboard con métricas
      ├─ /admin/products → CRUD inventario
      ├─ /admin/orders   → Gestionar pedidos
      ├─ /admin/customers → Ver clientes
      └─ /admin/settings  → Configuración
```

---

## 9. Consideraciones de Seguridad

> ⚠️ Esta aplicación está diseñada como **plantilla / prototipo**. Para producción se recomienda:

| Aspecto | Estado actual | Recomendación para producción |
|---|---|---|
| Credenciales admin | Hardcodeadas con fallback a `.env` | Usar solo variables de entorno + hash de contraseñas (bcrypt) |
| Token de sesión | Cookie con valor fijo `my_secret_token` | Usar JWT firmados o NextAuth.js |
| Persistencia de datos | Archivo `lib/data.ts` reescrito en runtime | Migrar a base de datos (PostgreSQL, MongoDB, etc.) |
| API de productos | Sin autenticación verificada en la ruta | Verificar cookie/token en cada endpoint protegido |
| HTTPS | Dependiente del hosting | Configurar HTTPS en producción (Vercel lo hace automáticamente) |

---

## 10. Variables de Entorno

Crear un archivo `.env.local` en la raíz del proyecto:

```env
# Credenciales del panel de administración
ADMIN_USERNAME=adminMykenjos
ADMIN_PASSWORD=Mykenjos1478
```

> Si estas variables no están definidas, `lib/auth.ts` usa los valores por defecto mencionados arriba.

---

## 🚀 Scripts de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev          # http://localhost:3000

# Build de producción
npm run build

# Iniciar en modo producción
npm run start

# Linting
npm run lint
```

---

*Documentación generada para el proyecto **Mykenjos Jeans E-commerce** · Stack: Next.js 16 + React 19 + TypeScript + Tailwind CSS v4*
