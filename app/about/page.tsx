import { ShieldCheck, Leaf, Heart, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="relative z-10 text-center space-y-6 px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight">Nuestra Historia</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300">
            Artesanía, pasión y el denim más puro desde hace más de una década.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-4xl font-bold text-primary">Pasión por el Denim</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En **Mykenjos**, no solo vendemos jeans; creamos piezas que cuentan historias. Fundada con la visión de elevar el estándar del denim nacional, nuestra marca se basa en la búsqueda incansable de la calidad y el ajuste perfecto.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada costura, cada remache y cada lavado es el resultado de un proceso meticuloso donde la tradición artesanal se encuentra con la innovación tecnológica.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop" 
                  alt="Taller Mykenjos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-8 rounded-xl shadow-xl hidden md:block max-w-xs">
                <p className="text-2xl font-bold italic">"El denim no es solo una tela, es un estilo de vida."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4 text-primary">Nuestros Valores</h2>
          <div className="h-1 w-20 bg-secondary mx-auto" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "Calidad Premium", 
                desc: "Utilizamos los mejores textiles para garantizar durabilidad y confort." 
              },
              { 
                icon: Leaf, 
                title: "Sostenibilidad", 
                desc: "Procesos de lavado con bajo consumo de agua y químicos biodegradables." 
              },
              { 
                icon: Users, 
                title: "Comunidad", 
                desc: "Apoyamos el talento local y el trabajo justo en cada etapa." 
              },
              { 
                icon: Heart, 
                title: "Diseño Único", 
                desc: "Inspirados en las últimas tendencias mundiales con nuestro ADN propio." 
              },
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <value.icon className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-4xl font-bold mb-6">Sé parte de Mykenjos</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Descubre por qué miles de personas confían en nosotros para sus looks diarios. Calidad que se siente, estilo que se nota.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
              Ver Colección
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary/5 transition-colors">
              Contáctanos
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
