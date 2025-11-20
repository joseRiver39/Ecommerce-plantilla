import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CartProvider } from "@/components/cart-provider"
import { Toaster } from "@/components/ui/sonner"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Mykenjos Jeans | Moda Colombiana",
  description: "Descubre la mejor colección de jeans en Colombia. Estilo moderno y juvenil.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}
