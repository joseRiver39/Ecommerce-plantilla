import { DollarSign, ShoppingBag, Users, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ventas Totales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45.231.890</div>
            <p className="text-xs text-muted-foreground">+20.1% respecto al mes anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+180 pedidos esta semana</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Activos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">+19 nuevos clientes hoy</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasa de Conversión</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground">+0.4% respecto a la semana pasada</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Pedidos Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                    JD
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Juan David Pérez</p>
                    <p className="text-sm text-muted-foreground">juan.perez@email.com</p>
                  </div>
                  <div className="ml-auto font-medium">+$249.900</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Productos Más Vendidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[
                { name: "Jean Skinny High Waist", sales: 124 },
                { name: "Jean Slim Fit Clásico", sales: 98 },
                { name: "Jean Mom Fit Vintage", sales: 85 },
                { name: "Jean Cargo Urbano", sales: 72 },
                { name: "Jean Recto Premium", sales: 65 },
              ].map((product, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{product.name}</p>
                    <div className="w-full bg-secondary/20 rounded-full h-2 mt-2">
                      <div
                        className="bg-secondary h-2 rounded-full"
                        style={{ width: `${(product.sales / 150) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="ml-4 font-medium text-sm">{product.sales} ventas</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
