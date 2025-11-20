import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"
import { products } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params

  // Filter products based on category slug (simple implementation)
  const categoryProducts =
    slug === "ofertas"
      ? products.filter((p) => p.isSale)
      : products.filter((p) => p.category === slug || slug === "all")

  const categoryTitle = slug.charAt(0).toUpperCase() + slug.slice(1)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
            {slug === "ofertas" ? "Ofertas Especiales" : `Colección ${categoryTitle}`}
          </h1>
          <p className="text-muted-foreground">Mostrando {categoryProducts.length} productos</p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Mobile Filter Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden w-full bg-transparent">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filtros
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <ProductFilters />
            </SheetContent>
          </Sheet>

          {/* Sort Dropdown (Placeholder) */}
          <select className="h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full md:w-[200px]">
            <option value="newest">Lo más nuevo</option>
            <option value="price-asc">Precio: Menor a Mayor</option>
            <option value="price-desc">Precio: Mayor a Menor</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <ProductFilters />
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No se encontraron productos en esta categoría.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
