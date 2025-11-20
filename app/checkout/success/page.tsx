import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SuccessPage() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-500">
        <CheckCircle2 className="h-12 w-12" />
      </div>

      <h1 className="font-serif text-4xl font-bold text-primary mb-4">¡Gracias por tu compra!</h1>

      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        Tu pedido ha sido confirmado y pronto lo estaremos preparando. Hemos enviado los detalles a tu correo
        electrónico.
      </p>

      <div className="bg-card border rounded-lg p-6 mb-8 w-full max-w-md text-left">
        <h3 className="font-bold mb-4 border-b pb-2">Detalles del Pedido</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Número de pedido:</span>
            <span className="font-mono font-medium">#MK-2025-8492</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Estado:</span>
            <span className="text-green-600 font-medium">Pago Aprobado</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Fecha estimada:</span>
            <span className="font-medium">3 - 5 días hábiles</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Link href="/">
          <Button variant="outline" size="lg">
            Volver al Inicio
          </Button>
        </Link>
        <Link href="/account/orders">
          <Button size="lg">Ver mis Pedidos</Button>
        </Link>
      </div>
    </div>
  )
}
