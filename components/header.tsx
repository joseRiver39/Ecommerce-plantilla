"use client"

import Link from "next/link"
import { ShoppingCart, User, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"

export function Header() {
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/category/hombre" className="text-lg font-medium hover:text-primary">
                  Hombre
                </Link>
                <Link href="/category/mujer" className="text-lg font-medium hover:text-primary">
                  Mujer
                </Link>
                <Link href="/category/ofertas" className="text-lg font-medium text-secondary hover:text-secondary/80">
                  Ofertas
                </Link>
                <Link href="/about" className="text-lg font-medium hover:text-primary">
                  Nosotros
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="flex-1 md:flex-none text-center md:text-left">
          <Link href="/" className="font-serif text-2xl font-bold tracking-wider text-primary">
            MYKENJOS
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 mx-6">
          <Link href="/category/hombre" className="text-sm font-medium hover:text-primary transition-colors">
            HOMBRE
          </Link>
          <Link href="/category/mujer" className="text-sm font-medium hover:text-primary transition-colors">
            MUJER
          </Link>
          <Link
            href="/category/ofertas"
            className="text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
          >
            OFERTAS
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            NOSOTROS
          </Link>
          <Link href="/admin" className="text-sm font-medium hover:text-primary transition-colors">
            ADMIN
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Buscar</span>
          </Button>
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Cuenta</span>
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-secondary text-[10px] font-bold text-white flex items-center justify-center animate-in zoom-in">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Carrito</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
