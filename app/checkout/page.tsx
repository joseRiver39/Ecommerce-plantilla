"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { CreditCard, Truck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/components/cart-provider"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  firstName: z.string().min(2, "El nombre es requerido"),
  lastName: z.string().min(2, "El apellido es requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Número de celular inválido"),
  address: z.string().min(5, "La dirección es requerida"),
  city: z.string().min(1, "Selecciona una ciudad"),
  department: z.string().min(1, "Selecciona un departamento"),
  paymentMethod: z.enum(["card", "pse", "nequi", "daviplata"], {
    required_error: "Selecciona un método de pago",
  }),
})

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)

  const shippingCost = subtotal > 200000 ? 0 : 15000
  const total = subtotal + shippingCost

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: "card",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(values)
    clearCart()
    toast.success("¡Pedido realizado con éxito!")
    router.push("/checkout/success")
  }

  if (items.length === 0) {
    router.push("/cart")
    return null
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Finalizar Compra</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Shipping Info */}
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold">Información de Envío</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Juan" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Apellido</FormLabel>
                        <FormControl>
                          <Input placeholder="Pérez" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="juan@ejemplo.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Celular</FormLabel>
                        <FormControl>
                          <Input placeholder="300 123 4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Departamento</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="antioquia">Antioquia</SelectItem>
                            <SelectItem value="cundinamarca">Cundinamarca</SelectItem>
                            <SelectItem value="valle">Valle del Cauca</SelectItem>
                            <SelectItem value="atlantico">Atlántico</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ciudad</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="medellin">Medellín</SelectItem>
                            <SelectItem value="bogota">Bogotá</SelectItem>
                            <SelectItem value="cali">Cali</SelectItem>
                            <SelectItem value="barranquilla">Barranquilla</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Dirección de Entrega</FormLabel>
                        <FormControl>
                          <Input placeholder="Calle 123 # 45 - 67, Apto 101" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold">Método de Pago</h2>
                </div>

                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem value="card" className="peer sr-only" />
                            </FormControl>
                            <Label
                              htmlFor="card"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                            >
                              <CreditCard className="mb-3 h-6 w-6" />
                              Tarjeta de Crédito/Débito
                            </Label>
                          </FormItem>
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem value="pse" className="peer sr-only" />
                            </FormControl>
                            <Label
                              htmlFor="pse"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                            >
                              <span className="mb-3 font-bold text-xl">PSE</span>
                              Transferencia Bancaria
                            </Label>
                          </FormItem>
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem value="nequi" className="peer sr-only" />
                            </FormControl>
                            <Label
                              htmlFor="nequi"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                            >
                              <span className="mb-3 font-bold text-xl">Nequi</span>
                              Pago Móvil
                            </Label>
                          </FormItem>
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem value="daviplata" className="peer sr-only" />
                            </FormControl>
                            <Label
                              htmlFor="daviplata"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                            >
                              <span className="mb-3 font-bold text-xl">DaviPlata</span>
                              Pago Móvil
                            </Label>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full h-14 text-lg font-bold" size="lg" disabled={isProcessing}>
                {isProcessing ? "Procesando Pago..." : `Pagar $${total.toLocaleString("es-CO")}`}
              </Button>
            </form>
          </Form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg border shadow-sm p-6 sticky top-24">
            <h2 className="font-serif text-xl font-bold mb-6">Resumen de Compra</h2>

            <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 text-sm">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border bg-gray-100">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium line-clamp-2">{item.name}</p>
                    <p className="text-muted-foreground">
                      Talla: {item.selectedSize} x {item.quantity}
                    </p>
                    <p className="font-bold">${(item.price * item.quantity).toLocaleString("es-CO")}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${subtotal.toLocaleString("es-CO")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Envío</span>
                <span className="font-medium">
                  {shippingCost === 0 ? (
                    <span className="text-green-600">Gratis</span>
                  ) : (
                    `$${shippingCost.toLocaleString("es-CO")}`
                  )}
                </span>
              </div>
              <div className="border-t pt-4 flex justify-between items-end">
                <span className="font-bold text-lg">Total a Pagar</span>
                <span className="font-bold text-2xl text-primary">${total.toLocaleString("es-CO")}</span>
              </div>
            </div>

            <div className="mt-6 bg-muted/50 p-4 rounded-md text-xs text-muted-foreground flex gap-3">
              <Truck className="h-5 w-5 flex-shrink-0" />
              <p>
                Tiempos de entrega estimados: <br />
                Ciudades principales: 2-3 días hábiles <br />
                Otras regiones: 4-6 días hábiles
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
