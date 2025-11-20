import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { CategoryGrid } from "@/components/category-grid"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <CategoryGrid />

      <FeaturedProducts />

      {/* Promo Banner */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/denim-texture.jpg')] bg-repeat" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Únete al Club Mykenjos</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Obtén un 15% de descuento en tu primera compra y acceso exclusivo a nuevas colecciones.
          </p>
          <Link href="/register">
            <Button size="lg" variant="secondary" className="font-bold px-8">
              Registrarme Ahora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
