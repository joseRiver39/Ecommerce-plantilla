import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-gray-900">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/fashion-jeans-model-dark.jpg')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
        <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-secondary font-medium tracking-widest uppercase text-sm md:text-base">
            Nueva Colección 2025
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight">
            Define Tu Estilo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Con Mykenjos</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-lg leading-relaxed">
            Descubre la fusión perfecta entre comodidad y tendencia. Jeans diseñados para acompañarte en cada paso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/category/mujer">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 font-semibold px-8">
                Comprar Mujer
              </Button>
            </Link>
            <Link href="/category/hombre">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10 px-8 bg-transparent"
              >
                Comprar Hombre
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
