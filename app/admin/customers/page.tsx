"use client"

import { useState } from "react"
import { Search, Download, UserPlus, Mail, Phone, MapPin, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { CustomerModal } from "@/components/admin/customer-modal"

const initialCustomersData = [
  {
    id: "CUST-001",
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    phone: "+57 300 123 4567",
    address: "Calle 123 #45-67, Bogotá",
    orders: 5,
    totalSpent: 1250000,
    status: "active",
  },
  {
    id: "CUST-002",
    name: "Maria Gonzalez",
    email: "maria.g@example.com",
    phone: "+57 311 987 6543",
    address: "Carrera 10 #20-30, Medellín",
    orders: 2,
    totalSpent: 450000,
    status: "active",
  },
  {
    id: "CUST-003",
    name: "Carlos Rodriguez",
    email: "carlos.rod@example.com",
    phone: "+57 320 456 7890",
    address: "Avenida Siempre Viva 742, Cali",
    orders: 12,
    totalSpent: 3800000,
    status: "inactive",
  },
  {
    id: "CUST-004",
    name: "Ana Martinez",
    email: "ana.mtz@example.com",
    phone: "+57 315 222 3344",
    address: "Transversal 5 #8-9, Barranquilla",
    orders: 0,
    totalSpent: 0,
    status: "active",
  },
]

export default function CustomersPage() {
  const [customers, setCustomers] = useState(initialCustomersData)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null)

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch = 
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === "all" || customer.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const handleOpenModal = (customer: any = null) => {
    setSelectedCustomer(customer)
    setIsModalOpen(true)
  }

  const handleSave = (id: string | null, data: any) => {
    if (id) {
      setCustomers(customers.map(c => c.id === id ? { ...c, ...data } : c))
    } else {
      const newCustomer = {
        ...data,
        id: `CUST-${(customers.length + 1).toString().padStart(3, '0')}`,
        orders: 0,
        totalSpent: 0,
      }
      setCustomers([...customers, newCustomer])
    }
  }

  const handleDelete = (id: string) => {
    if (confirm("¿Estás seguro de que deseas eliminar este cliente?")) {
      setCustomers(customers.filter(c => c.id !== id))
    }
  }

  const exportToCSV = () => {
    const headers = ["ID", "Nombre", "Email", "Teléfono", "Dirección", "Pedidos", "Total Gastado", "Estado"]
    const data = filteredCustomers.map(c => [
      c.id,
      c.name,
      c.email,
      c.phone,
      c.address,
      c.orders,
      c.totalSpent,
      c.status === "active" ? "Activo" : "Inactivo"
    ])
    
    const csvContent = [headers, ...data].map(e => e.join(",")).join("\n")
    const blob = new Blob(["\ufeff" + csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `reporte_clientes_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-8">
      <CustomerModal 
        customer={selectedCustomer}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />

      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary">Gestión de Clientes</h1>
        <Button className="gap-2" onClick={() => handleOpenModal()}>
          <UserPlus className="h-4 w-4" />
          Nuevo Cliente
        </Button>
      </div>

      <div className="flex items-center gap-4 bg-card p-4 rounded-lg border shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Buscar por nombre o email..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select 
          className="h-10 px-3 rounded-md border border-input bg-background text-sm"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">Todos los estados</option>
          <option value="active">Activo</option>
          <option value="inactive">Inactivo</option>
        </select>
        <Button variant="outline" className="gap-2" onClick={exportToCSV}>
          <Download className="h-4 w-4" />
          Exportar CSV
        </Button>
      </div>

      <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cliente</TableHead>
              <TableHead>Contacto</TableHead>
              <TableHead>Pedidos</TableHead>
              <TableHead>Total Gastado</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium text-base">{customer.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{customer.id}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="h-3 w-3" /> {customer.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3" /> {customer.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center font-medium">{customer.orders}</TableCell>
                  <TableCell className="font-semibold text-primary">
                    ${customer.totalSpent.toLocaleString("es-CO")}
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={customer.status === "active" 
                        ? "bg-green-50 text-green-700 border-green-200" 
                        : "bg-gray-50 text-gray-700 border-gray-200"}
                    >
                      {customer.status === "active" ? "Activo" : "Inactivo"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleOpenModal(customer)}>
                          <Pencil className="mr-2 h-4 w-4" /> Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(customer.id)}>
                          <Trash2 className="mr-2 h-4 w-4" /> Eliminar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No se encontraron clientes
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
