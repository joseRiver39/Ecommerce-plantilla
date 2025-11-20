import type React from "react"
import { Sidebar } from "@/components/admin/sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-muted/20">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  )
}
