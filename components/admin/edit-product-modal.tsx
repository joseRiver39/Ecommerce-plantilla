"use client"

import type { Product } from "@/lib/data"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"

interface EditProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
  onSave: (id: string, data: { price: number; stock: number }) => void
}

export function EditProductModal({
  product,
  isOpen,
  onClose,
  onSave,
}: EditProductModalProps) {

  const [formData, setFormData] = useState({ price: "", stock: "" })

  useEffect(() => {
    if (product) {
      setFormData({
        price: product.price?.toString() || "",
        stock: product.stock?.toString() || "0",
      })
    }
  }, [product])

  if (!isOpen || !product) return null

  const handleChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSave = () => {
    onSave(product.id, {
      price: Number(formData.price),
      stock: Number(formData.stock),
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Producto</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Precio
            </Label>
            <Input
              id="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stock" className="text-right">
              Stock
            </Label>
            <Input
              id="stock"
              type="number"
              value={formData.stock}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
          <Button onClick={handleSave}>Guardar Cambios</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
