"use client"

import { useState, use } from "react"
import { notFound } from "next/navigation"
import { Star, Truck, ShieldCheck, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { products } from "@/lib/data"
import { useCart } from "@/components/cart-provider"
import { toast } from "sonner"

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()

  const [selectedSize, setSelectedSize] = useState<string>("")
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Por favor selecciona una talla")
      return
    }

    // Add item multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize)
    }

    toast.success("Producto agregado al carrito", {
      description: `${product.name} - Talla ${selectedSize}`,
      action: {
        label: "Ver Carrito",
        onClick: () => (window.location.href = "/cart"),
      },
    })
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden border border-border/50">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-100 rounded-md overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-border/50"
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={`Vista ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <h2 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">{product.category}</h2>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex text-secondary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(12 reseñas)</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold text-primary">${product.price.toLocaleString("es-CO")}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice.toLocaleString("es-CO")}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-6 flex-grow">
            {/* Size Selector */}
            <div>
              <div className="flex justify-between mb-2">
                <Label className="text-base font-medium">Talla</Label>
                <button className="text-sm text-primary underline hover:text-primary/80">Guía de tallas</button>
              </div>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="grid grid-cols-5 gap-2">
                {["6", "8", "10", "12", "14", "16", "28", "30", "32", "34"].map((size) => (
                  <div key={size}>
                    <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                    <Label
                      htmlFor={`size-${size}`}
                      className="flex items-center justify-center rounded-md border-2 border-muted bg-transparent p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Quantity */}
            <div>
              <Label className="text-base font-medium mb-2 block">Cantidad</Label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">Disponibles: 15 unidades</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="flex-1 text-lg h-14" onClick={handleAddToCart}>
                Agregar al Carrito
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-6 bg-transparent">
                <ShieldCheck className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 space-y-4 border-t pt-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/5 rounded-full text-primary">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium">Envío Gratis</h4>
                <p className="text-sm text-muted-foreground">En compras superiores a $200.000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/5 rounded-full text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium">Garantía de Calidad</h4>
                <p className="text-sm text-muted-foreground">30 días para cambios y devoluciones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
