import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/data"

export function FeaturedProducts() {
  const featured = products.slice(0, 4)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Tendencias de la Semana</h2>
          <p className="text-muted-foreground max-w-2xl">
            Explora nuestras piezas más populares. Calidad premium y diseño exclusivo para destacar tu estilo único.
          </p>
          <div className="h-1 w-20 bg-secondary rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
