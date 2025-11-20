import type React from "react"
import { Sidebar } from "@/components/admin/sidebar"

export default function AdminLayout({
  children,
  title = "Panel de Administración",
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <>
      <head>
        <title>{title}</title>
      </head>
      <div className="flex min-h-screen bg-muted/20">
        <Sidebar />
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </>
  )
}
