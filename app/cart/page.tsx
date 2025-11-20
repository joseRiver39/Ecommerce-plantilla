"use client"

import Link from "next/link"
import { Trash2, ArrowRight, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, totalItems } = useCart()
  const shippingCost = subtotal > 200000 ? 0 : 15000
  const total = subtotal + shippingCost

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="h-12 w-12 text-muted-foreground" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-primary mb-4">Tu carrito está vacío</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          Parece que aún no has agregado productos. Explora nuestra colección y encuentra tus jeans perfectos.
        </p>
        <Link href="/">
          <Button size="lg" className="px-8">
            Ir a Comprar
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">Carrito de Compras</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card rounded-lg border shadow-sm">
            {items.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 p-6 border-b last:border-0">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-gray-100">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-full object-cover" />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium text-lg">
                        <Link href={`/product/${item.id}`} className="hover:text-primary">
                          {item.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">Talla: {item.selectedSize}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">${(item.price * item.quantity).toLocaleString("es-CO")}</p>
                      {item.quantity > 1 && (
                        <p className="text-sm text-muted-foreground">${item.price.toLocaleString("es-CO")} c/u</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border rounded-md">
                      <button
                        className="px-3 py-1 hover:bg-muted transition-colors"
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        className="px-3 py-1 hover:bg-muted transition-colors"
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => removeItem(item.id, item.selectedSize)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Eliminar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg border shadow-sm p-6 sticky top-24">
            <h2 className="font-serif text-xl font-bold mb-6">Resumen del Pedido</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal ({totalItems} productos)</span>
                <span className="font-medium">${subtotal.toLocaleString("es-CO")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Envío estimado</span>
                <span className="font-medium">
                  {shippingCost === 0 ? (
                    <span className="text-green-600">Gratis</span>
                  ) : (
                    `$${shippingCost.toLocaleString("es-CO")}`
                  )}
                </span>
              </div>
              <div className="border-t pt-4 flex justify-between items-end">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-2xl text-primary">${total.toLocaleString("es-CO")}</span>
              </div>
            </div>

            <Link href="/checkout">
              <Button className="w-full h-12 text-lg font-bold" size="lg">
                Ir a Pagar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <div className="mt-6 text-xs text-center text-muted-foreground">
              <p>Pagos seguros procesados por MercadoPago / Wompi</p>
              <div className="flex justify-center gap-2 mt-2 opacity-50">
                {/* Payment icons placeholders */}
                <div className="w-8 h-5 bg-gray-200 rounded" />
                <div className="w-8 h-5 bg-gray-200 rounded" />
                <div className="w-8 h-5 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
