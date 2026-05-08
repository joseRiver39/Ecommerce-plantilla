export interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  isNew?: boolean
  isSale?: boolean
  originalPrice?: number
  stock?: number
}

export const products: Product[] = [
  {
    "id": "1",
    "name": "Jean Skinny High Waist",
    "price": 150000,
    "category": "mujer",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    "isNew": true,
    "stock": 29
  },
  {
    "id": "2",
    "name": "Jean Slim Fit Clásico",
    "price": 149900,
    "category": "hombre",
    "image": "/jeans-slim-man.jpg",
    "stock": 24
  },
  {
    "id": "3",
    "name": "Jean Mom Fit Vintage",
    "price": 119900,
    "category": "mujer",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    "isSale": true,
    "originalPrice": 159900,
    "stock": 37
  },
  {
    "id": "4",
    "name": "Jean Recto Premium",
    "price": 189900,
    "category": "hombre",
    "image": "/jeans-straight-man.jpg",
    "isNew": true,
    "stock": 38
  },
  {
    "id": "5",
    "name": "Jean Wide Leg",
    "price": 139900,
    "category": "mujer",
    "image": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop",
    "stock": 110
  },
  {
    "id": "6",
    "name": "Jean Cargo Urbano",
    "price": 169900,
    "category": "hombre",
    "image": "/jeans-cargo-man.jpg"
  },
  {
    "id": "7",
    "name": "Jean Bota Campana",
    "price": 135900,
    "category": "mujer",
    "image": "/jeans-flare.jpg"
  },
  {
    "id": "8",
    "name": "Jean Rotos Destroyed",
    "price": 145900,
    "category": "hombre",
    "image": "/jeans-ripped-man.jpg",
  }



  ,
  {
    "id": "prod-1778120062905",
    "name": "Bermuda",
    "price": 45000,
    "stock": 100,
    "category": "hombre",
    "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.4UxOTipqKZw6AJ3tNd51zQHaHa%3Fpid%3DApi&f=1&ipt=77397e31f6152343cb6e30bf8a4f86024d84e94dcfe657ad2be81301dac4e7bb&ipo=images"
  }
];
