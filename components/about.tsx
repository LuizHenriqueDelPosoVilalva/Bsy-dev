"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="py-24 px-4 bg-[#5e6f3e]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src="/about.png"
              alt="Equipe analisando resíduos"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f2efde] text-balance">
              Compromisso com o Meio Ambiente
            </h2>
            <p className="text-lg text-[#aac225] mb-6 leading-relaxed">
              Há mais de 15 anos no mercado, somos referência em gestão de
              resíduos contaminados. Nossa missão é proteger o meio ambiente
              através de práticas sustentáveis e tecnologia de ponta.
            </p>
            <p className="text-lg text-[#aac225] mb-8 leading-relaxed">
              Contamos com equipe altamente qualificada, frota especializada e
              todas as licenças ambientais necessárias para garantir a segurança
              em cada etapa do processo.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#aac225] mb-2">
                  15+
                </div>
                <div className="text-sm text-[#aac225]">
                  Anos de Experiência
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#aac225] mb-2">
                  500+
                </div>
                <div className="text-sm text-[#aac225]">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#aac225] mb-2">
                  100%
                </div>
                <div className="text-sm text-[#aac225]">Conformidade Legal</div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#aac225] text-[#ffffff] hover:bg-[#47762f] hover:text-[#f2efde]"
            >
              Conheça Nossa História
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
