import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/data"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
      <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.isNew && <Badge className="bg-primary text-white hover:bg-primary">Nuevo</Badge>}
          {product.isSale && <Badge className="bg-secondary text-primary-foreground hover:bg-secondary">Oferta</Badge>}
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <Button size="icon" variant="secondary" className="rounded-full shadow-md">
            <Heart className="h-4 w-4" />
            <span className="sr-only">Favoritos</span>
          </Button>
          <Button size="icon" className="rounded-full shadow-md">
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Agregar</span>
          </Button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-lg truncate group-hover:text-primary transition-colors">
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toLocaleString("es-CO")}
              </span>
            )}
            <span className="font-bold text-lg text-primary">${product.price.toLocaleString("es-CO")}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
