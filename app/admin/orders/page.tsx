import { Search, Eye, Truck, CheckCircle2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const orders = [
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
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Gestión de Pedidos</h1>

      <div className="flex items-center gap-4 bg-card p-4 rounded-lg border shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar por pedido, cliente o email..." className="pl-10" />
        </div>
        <Button variant="outline">Exportar CSV</Button>
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
            {orders.map((order) => {
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
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Detalles
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
