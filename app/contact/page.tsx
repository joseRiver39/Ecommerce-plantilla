import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ¿Tienes alguna duda o comentario? Estamos aquí para escucharte y ayudarte.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border">
              <h2 className="text-2xl font-bold mb-8 text-primary">Envíanos un mensaje</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="ejemplo@correo.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Escribe tu mensaje aquí..." 
                    className="min-h-[150px] resize-none"
                  />
                </div>
                <Button className="w-full py-6 text-lg font-bold gap-2">
                  <Send className="h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12 py-4">
              <div>
                <h2 className="text-2xl font-bold mb-8 text-primary">Información de Contacto</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Dirección</h3>
                      <p className="text-muted-foreground">Calle Principal de la Moda #45-67, Sector Denim, Bogotá, Colombia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Teléfonos</h3>
                      <p className="text-muted-foreground">+57 (601) 123 4567</p>
                      <p className="text-muted-foreground">+57 300 987 6543</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="text-muted-foreground">contacto@mykenjos.com</p>
                      <p className="text-muted-foreground">soporte@mykenjos.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Horario de Atención</h3>
                      <p className="text-muted-foreground">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Sábados: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Mention */}
              <div className="p-8 bg-secondary/10 rounded-2xl border border-secondary/20">
                <h3 className="font-bold text-xl mb-4">Síguenos en Redes</h3>
                <p className="text-muted-foreground">Únete a nuestra comunidad y no te pierdas de nuestras promociones exclusivas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
