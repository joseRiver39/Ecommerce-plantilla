import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white">MYKENJOS</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Moda colombiana con estilo y calidad. Jeans diseñados para destacar tu personalidad.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Categorías</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/category/hombre" className="hover:text-secondary">
                  Hombre
                </Link>
              </li>
              <li>
                <Link href="/category/mujer" className="hover:text-secondary">
                  Mujer
                </Link>
              </li>
              <li>
                <Link href="/category/ofertas" className="hover:text-secondary">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link href="/category/new" className="hover:text-secondary">
                  Lo Nuevo
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-bold mb-4 text-white">Ayuda</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/faq" className="hover:text-secondary">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-secondary">
                  Envíos y Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-secondary">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4 text-white">Suscríbete</h4>
            <p className="text-sm text-gray-300 mb-4">Recibe las últimas novedades y ofertas exclusivas.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Tu email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button variant="secondary">OK</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mykenjos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
