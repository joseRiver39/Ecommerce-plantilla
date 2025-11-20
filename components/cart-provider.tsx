"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Product } from "@/lib/data"

export interface CartItem extends Product {
  quantity: number
  selectedSize: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product, size: string) => void
  removeItem: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("mykenjos-cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (e) {
        console.error("Error loading cart:", e)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save cart to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("mykenjos-cart", JSON.stringify(items))
    }
  }, [items, isLoaded])

  const addItem = (product: Product, size: string) => {
    setItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id && item.selectedSize === size)
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === size ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...prev, { ...product, quantity: 1, selectedSize: size }]
    })
  }

  const removeItem = (productId: string, size: string) => {
    setItems((prev) => prev.filter((item) => !(item.id === productId && item.selectedSize === size)))
  }

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity < 1) return
    setItems((prev) =>
      prev.map((item) => (item.id === productId && item.selectedSize === size ? { ...item, quantity } : item)),
    )
  }

  const clearCart = () => setItems([])

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
