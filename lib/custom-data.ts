export interface Category {
  id: string
  name: string
  image?: string
  description?: string
}

export const categories: Category[] = [
  { id: "mujer", name: "Jeans Mujer", image: "https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=1000&auto=format&fit=crop" },
  { id: "hombre", name: "Jeans Hombre", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop" },
  { id: "nuevos", name: "Nuevos", image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1000&auto=format&fit=crop" },
  { id: "ofertas", name: "Ofertas", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop" },
]

