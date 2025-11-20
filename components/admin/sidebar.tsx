"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Package, ShoppingBag, Users, Settings, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: Package, label: "Productos", href: "/admin/products" },
  { icon: ShoppingBag, label: "Pedidos", href: "/admin/orders" },
  { icon: Users, label: "Clientes", href: "/admin/customers" },
  { icon: Settings, label: "Configuración", href: "/admin/settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-primary text-primary-foreground hidden md:flex flex-col">
      <div className="p-6 border-b border-primary-foreground/10">
        <h1 className="font-serif text-2xl font-bold">Mykenjos Admin</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
                isActive
                  ? "bg-secondary text-secondary-foreground font-medium"
                  : "hover:bg-primary-foreground/10 text-gray-300 hover:text-white",
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-primary-foreground/10">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-left text-gray-300 hover:text-white hover:bg-primary-foreground/10 rounded-md transition-colors">
          <LogOut className="h-5 w-5" />
          Cerrar Sesión
        </button>
      </div>
    </aside>
  )
}
