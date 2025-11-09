"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
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
    <section id="contato" ref={sectionRef} className="py-24 px-4 bg-[#aac225]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#f2efde] text-balance">
            Entre em Contato
          </h2>
          <p className="text-lg text-[#5e6f3e] max-w-2xl mx-auto text-pretty">
            Solicite um orçamento ou tire suas dúvidas com nossa equipe
            especializada
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#47762f]/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-[#5e6f3e]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#f2efde]">
                    Telefone
                  </h3>
                  <p className="text-[#5e6f3e]">(11) 1234-5678</p>
                  <p className="text-[#5e6f3e]">(11) 98765-4321</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#47762f]/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-[#5e6f3e]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#f2efde]">
                    E-mail
                  </h3>
                  <p className="text-[#5e6f3e]">contato@bsyresiduos.com.br</p>
                  <p className="text-[#5e6f3e]">comercial@bsyresiduos.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#47762f]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-[#5e6f3e]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#f2efde]">
                    Endereço
                  </h3>
                  <p className="text-[#5e6f3e]">Rua Exemplo, 1234</p>
                  <p className="text-[#5e6f3e]">São Paulo - SP, 01234-567</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <form className="space-y-6 bg-[#f2efde] p-8 rounded-lg">
              <div>
                <Input
                  placeholder="Nome completo"
                  className="bg-white border-[#303b79]/20"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="E-mail"
                  className="bg-white border-[#303b79]/20"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Telefone"
                  className="bg-white border-[#303b79]/20"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Mensagem"
                  rows={5}
                  className="bg-white border-[#303b79]/20 resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#5e6f3e] text-[#ffffff] hover:bg-[#47762f] hover:text-[#f2efde]"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
