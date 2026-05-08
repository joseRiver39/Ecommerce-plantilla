# 👖 Mykenjos Jeans — Premium E-commerce Experience

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

**Mykenjos Jeans** is a state-of-the-art e-commerce platform specializing in high-quality Colombian denim. Built with a focus on high performance, clean architecture, and premium user experience, this project serves as a comprehensive demonstration of modern web development practices using the Next.js App Router.

---

## ✨ Key Features

### 🛍️ Public Storefront
- **Dynamic Catalog**: Real-time filtering and search for products across categories (Men, Women, Sales).
- **Premium UI/UX**: Crafted with a focus on aesthetics, featuring smooth transitions, skeleton loaders, and a responsive design.
- **Cart System**: Fully functional shopping cart with persistent state (LocalStorage) and size selection.
- **Seamless Checkout**: A multi-step intuitive checkout process leading to a success confirmation.
- **WhatsApp Integration**: Floating contact button for direct customer support.

### 🔐 Admin Dashboard
- **Comprehensive Analytics**: Visual representation of sales, orders, and customer activity using Recharts.
- **Inventory Management**: Full CRUD functionality for products, including image handling, stock tracking, and status management.
- **Order Tracking**: Detailed view of all customer orders with status updates and detail modals.
- **Customer Management**: Database of active customers with order history and contact details.
- **Secure Authentication**: Protected routes with middleware and cookie-based session management.

---

## 🛠️ Tech Stack & Tools

- **Core Framework**: [Next.js 15.1](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API (Cart)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Toasts**: [Sonner](https://sonner.stevenbernhard.com/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm

### 2. Clone the repository
```bash
git clone https://github.com/joseRiver39/Ecommerce-plantilla.git
cd Ecommerce-plantilla
```

### 3. Install dependencies
```bash
pnpm install
# or
npm install
```

### 4. Environment Configuration
Create a `.env.local` file in the root directory:
```env
ADMIN_USERNAME=your_admin_user
ADMIN_PASSWORD=your_admin_password
```

### 5. Run the development server
```bash
pnpm dev
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🏗️ Architecture & Clean Code

The project follows a modular structure focused on scalability and maintainability:

- `/app`: Route handlers and page components using Next.js App Router.
- `/components`: Reusable UI components (Atomic Design principles).
- `/lib`: Business logic, utility functions, and mock data sources.
- `/hooks`: Custom React hooks for shared logic (toasts, mobile detection).
- `/api`: Internal endpoints for authentication and data persistence.

For a deep dive into the technical implementation, see [ARQUITECTURA.md](./ARQUITECTURA.md).

---

## 🧪 Security & Performance

- **Optimized Builds**: Leverages Next.js Turbopack for lightning-fast development and build times.
- **SEO Optimized**: Dynamic metadata and semantic HTML for better search engine rankings.
- **Protected Routes**: Middleware-level protection for sensitive administrative areas.
- **Image Optimization**: Automatic image resizing and optimization via Next.js Image component.

---

## 🤝 Contact & Contributions

Developed with ❤️ by **Jose Antonio Rivera**.

- **LinkedIn**: [jose-antonio-rivera](https://www.linkedin.com/in/jose-antonio-rivera-urbi16-1446s/)
- **GitHub**: [@joseRiver39](https://github.com/joseRiver39)

---

*This project is part of a professional portfolio. Feel free to explore, clone, and provide feedback!*
