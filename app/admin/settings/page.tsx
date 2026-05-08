"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Save, Shield, Bell, Globe } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-primary">Configuración del Sistema</h1>

      <div className="grid gap-6">
        {/* General Settings */}
        <div className="bg-card p-6 rounded-lg border shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b pb-4">
            <Globe className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">General</h2>
          </div>
          
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="siteName">Nombre de la Tienda</Label>
              <Input id="siteName" defaultValue="Mykenjos Store" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contactEmail">Email de Contacto</Label>
              <Input id="contactEmail" type="email" defaultValue="contacto@mykenjos.com" />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-card p-6 rounded-lg border shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b pb-4">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Seguridad</h2>
          </div>
          
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Autenticación de dos factores</p>
                <p className="text-sm text-muted-foreground">Añade una capa extra de seguridad a tu cuenta.</p>
              </div>
              <Button variant="outline">Configurar</Button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-card p-6 rounded-lg border shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b pb-4">
            <Bell className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Notificaciones</h2>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Alertas de Stock Bajo</p>
              <p className="text-sm text-muted-foreground">Recibir email cuando un producto tenga menos de 10 unidades.</p>
            </div>
            <input type="checkbox" className="h-5 w-5" defaultChecked />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button className="gap-2 px-8">
          <Save className="h-4 w-4" />
          Guardar Cambios
        </Button>
      </div>
    </div>
  )
}
