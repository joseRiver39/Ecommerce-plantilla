"use client"

import { useState } from "react"
import { Search, Eye, Truck, CheckCircle2, Clock, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { OrderDetailsModal } from "@/components/admin/order-details-modal"

const initialOrders = [
  {
    id: "MK-8492",
    customer: "Juan Pérez",
    date: "19 Nov 2025",
    total: 249900,
    status: "paid",
    items: 3,
  },
  {
    id: "MK-8491",
    customer: "Maria Gonzalez",
    date: "19 Nov 2025",
    total: 129900,
    status: "shipping",
    items: 1,
  },
  {
    id: "MK-8490",
    customer: "Carlos Rodriguez",
    date: "18 Nov 2025",
    total: 450000,
    status: "delivered",
    items: 5,
  },
  {
    id: "MK-8489",
    customer: "Ana Martinez",
    date: "18 Nov 2025",
    total: 189900,
    status: "pending",
    items: 2,
  },
]

const statusMap = {
  paid: { label: "Pagado", color: "bg-blue-100 text-blue-700", icon: CheckCircle2 },
  shipping: { label: "Enviado", color: "bg-yellow-100 text-yellow-700", icon: Truck },
  delivered: { label: "Entregado", color: "bg-green-100 text-green-700", icon: CheckCircle2 },
  pending: { label: "Pendiente", color: "bg-gray-100 text-gray-700", icon: Clock },
}

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedOrder, setSelectedOrder] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredOrders = initialOrders.filter((order) =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const exportToCSV = () => {
    const headers = ["Pedido", "Cliente", "Fecha", "Items", "Total", "Estado"]
    const data = filteredOrders.map(order => [
      order.id,
      order.customer,
      order.date,
      order.items,
      order.total,
      statusMap[order.status as keyof typeof statusMap].label
    ])
    
    // Add UTF-8 BOM for Excel compatibility
    const csvContent = [headers, ...data].map(e => e.join(",")).join("\n")
    const blob = new Blob(["\ufeff" + csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `reporte_pedidos_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewDetails = (order: any) => {
    setSelectedOrder(order)
    setIsModalOpen(true)
  }

  return (
    <div className="space-y-8">
      <OrderDetailsModal 
        order={selectedOrder}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <h1 className="text-3xl font-bold text-primary">Gestión de Pedidos</h1>

      <div className="flex items-center gap-4 bg-card p-4 rounded-lg border shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Buscar por pedido o cliente..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="gap-2" onClick={exportToCSV}>
          <Download className="h-4 w-4" />
          Exportar CSV
        </Button>
      </div>

      <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pedido</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => {
                const status = statusMap[order.status as keyof typeof statusMap]
                const StatusIcon = status.icon

                return (
                  <TableRow key={order.id}>
                    <TableCell className="font-mono font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell>${order.total.toLocaleString("es-CO")}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`gap-1 ${status.color} border-0`}>
                        <StatusIcon className="h-3 w-3" />
                        {status.label}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => handleViewDetails(order)}>
                        <Eye className="h-4 w-4 mr-2" />
                        Ver Detalles
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  No se encontraron pedidos
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
