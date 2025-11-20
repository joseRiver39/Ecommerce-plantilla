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
    "price": "150000",
    "category": "mujer",
    "image": "/jeans-skinny-woman.jpg",
    "isNew": true,
    "stock": "50"
  },
  {
    "id": "2",
    "name": "Jean Slim Fit Clásico",
    "price": 149900,
    "category": "hombre",
    "image": "/jeans-slim-man.jpg"
  },
  {
    "id": "3",
    "name": "Jean Mom Fit Vintage",
    "price": 119900,
    "category": "mujer",
    "image": "/jeans-mom-fit.jpg",
    "isSale": true,
    "originalPrice": 159900
  },
  {
    "id": "4",
    "name": "Jean Recto Premium",
    "price": 189900,
    "category": "hombre",
    "image": "/jeans-straight-man.jpg",
    "isNew": true
  },
  {
    "id": "5",
    "name": "Jean Wide Leg",
    "price": 139900,
    "category": "mujer",
    "image": "/jeans-wide-leg.jpg"
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
    "image": "/jeans-ripped-man.jpg"
  }
];
