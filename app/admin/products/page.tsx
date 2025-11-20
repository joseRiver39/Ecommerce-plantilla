import { ProductsTable } from "@/components/admin/products-table"
import { products } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Inventario de Productos",
}

export default function ProductsPage() {
  return <ProductsTable initialProducts={products} />
}
