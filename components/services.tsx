"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Recycle, Truck, Shield, FileCheck } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Coleta Especializada",
    description: "Transporte seguro de resíduos contaminados com frota própria e equipe treinada.",
    color: "#a2ca4f",
  },
  {
    icon: Shield,
    title: "Tratamento Adequado",
    description: "Processos certificados para tratamento e neutralização de materiais perigosos.",
    color: "#94cbe2",
  },
  {
    icon: Recycle,
    title: "Destinação Final",
    description: "Destinação ambientalmente correta em parceria com empresas licenciadas.",
    color: "#47762f",
  },
  {
    icon: FileCheck,
    title: "Documentação Completa",
    description: "Emissão de certificados e relatórios para conformidade legal e ambiental.",
    color: "#a2ca4f",
  },
]

export function Services() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev]
                  newVisible[index] = true
                  return newVisible
                })
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" ref={sectionRef} className="py-24 px-4 bg-[#f2efde]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#303b79] text-balance">Nossos Serviços</h2>
          <p className="text-lg text-[#303b79]/70 max-w-2xl mx-auto text-pretty">
            Soluções completas para gestão de resíduos contaminados com segurança e responsabilidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`border-none shadow-lg transition-all duration-700 hover:scale-105 ${
                  visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  backgroundColor: "#ffffff",
                }}
              >
                <CardContent className="p-6">
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-colors duration-500"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <Icon size={32} style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#303b79]">{service.title}</h3>
                  <p className="text-[#303b79]/70">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
