"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([50000, 300000])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold text-lg mb-4">Filtros</h3>
        <Button variant="outline" size="sm" className="w-full mb-4 bg-transparent">
          Limpiar Filtros
        </Button>
      </div>

      <Accordion type="single" collapsible defaultValue="category" className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger>Tipo de Jean</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Skinny", "Slim", "Regular", "Wide Leg", "Mom Fit", "Cargo"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={`type-${type}`} />
                  <Label htmlFor={`type-${type}`}>{type}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="size">
          <AccordionTrigger>Talla</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-2">
              {["6", "8", "10", "12", "14", "16", "28", "30", "32", "34"].map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox id={`size-${size}`} />
                  <Label htmlFor={`size-${size}`}>{size}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Precio</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={[50000, 300000]}
                max={500000}
                step={10000}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="flex items-center justify-between text-sm">
                <span>${priceRange[0].toLocaleString()}</span>
                <span>${priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
