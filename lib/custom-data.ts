export interface Category {
  id: string
  name: string
  image?: string
  description?: string
}

export const categories: Category[] = [
  { id: "mujer", name: "Jeans Mujer", image: "/category-woman.jpg" },
  { id: "hombre", name: "Jeans Hombre", image: "/category-man.jpg" },
  { id: "nuevos", name: "Nuevos", image: "/category-new.jpg" },
  { id: "ofertas", name: "Ofertas", image: "/category-sale.jpg" },
]

