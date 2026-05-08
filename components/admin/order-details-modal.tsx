"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Truck, Clock } from "lucide-react"

interface Order {
  id: string
  customer: string
  date: string
  total: number
  status: string
  items: number
}

const statusMap = {
  paid: { label: "Pagado", color: "bg-blue-100 text-blue-700", icon: CheckCircle2 },
  shipping: { label: "Enviado", color: "bg-yellow-100 text-yellow-700", icon: Truck },
  delivered: { label: "Entregado", color: "bg-green-100 text-green-700", icon: CheckCircle2 },
  pending: { label: "Pendiente", color: "bg-gray-100 text-gray-700", icon: Clock },
}

interface OrderDetailsModalProps {
  order: Order | null
  isOpen: boolean
  onClose: () => void
}

export function OrderDetailsModal({ order, isOpen, onClose }: OrderDetailsModalProps) {
  if (!order) return null

  const status = statusMap[order.status as keyof typeof statusMap]
  const StatusIcon = status.icon

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Detalle del Pedido {order.id}</span>
            <Badge variant="outline" className={`gap-1 ${status.color} border-0`}>
              <StatusIcon className="h-3 w-3" />
              {status.label}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4 border-b pb-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Cliente</p>
              <p className="text-base font-semibold">{order.customer}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Fecha</p>
              <p className="text-base font-semibold">{order.date}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Resumen de Productos</h4>
            <div className="flex justify-between items-center py-2 border-b">
              <span>Cantidad de Items</span>
              <span className="font-medium">{order.items}</span>
            </div>
            {/* Here you could add more details if the order object had them */}
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-lg font-bold">Total</span>
            <span className="text-2xl font-bold text-primary">
              ${order.total.toLocaleString("es-CO")}
            </span>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={onClose} className="w-full">Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
