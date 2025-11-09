"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "Análise e Diagnóstico",
    description: "Avaliação completa dos resíduos e necessidades específicas da sua empresa.",
  },
  {
    number: "02",
    title: "Planejamento",
    description: "Desenvolvimento de plano personalizado de coleta e destinação.",
  },
  {
    number: "03",
    title: "Coleta Segura",
    description: "Retirada dos resíduos com equipamentos adequados e equipe especializada.",
  },
  {
    number: "04",
    title: "Tratamento",
    description: "Processamento e tratamento dos materiais em instalações certificadas.",
  },
  {
    number: "05",
    title: "Destinação Final",
    description: "Descarte ambientalmente correto seguindo todas as normas vigentes.",
  },
  {
    number: "06",
    title: "Documentação",
    description: "Emissão de certificados e relatórios para comprovação legal.",
  },
]

export function Process() {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => {
                  const newVisible = [...prev]
                  newVisible[index] = true
                  return newVisible
                })
              }, index * 200)
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
    <section id="processo" ref={sectionRef} className="py-24 px-4 bg-[#f2efde]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#303b79] text-balance">Como Funciona</h2>
          <p className="text-lg text-[#303b79]/70 max-w-2xl mx-auto text-pretty">
            Processo completo e transparente do início ao fim
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                visibleSteps[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div
                  className="text-6xl font-bold mb-4 transition-colors duration-500"
                  style={{
                    color: index % 2 === 0 ? "#a2ca4f" : "#94cbe2",
                  }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#303b79]">{step.title}</h3>
                <p className="text-[#303b79]/70 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
