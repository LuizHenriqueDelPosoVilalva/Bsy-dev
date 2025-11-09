"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollShape } from "@/components/scroll-shape";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 bg-[#aac225]">
      <ScrollShape
        className="absolute top-32 left-10"
        color="#c9ebfc"
        speed={0.8}
        horizontalSpeed={1.5}
        rotationSpeed={0.5}
        variant="square"
      />
      <ScrollShape
        className="absolute top-40 right-20"
        color="#71d0f6"
        speed={0.7}
        horizontalSpeed={-0.4}
        rotationSpeed={0.15}
        variant="circle"
      />
      <ScrollShape
        className="absolute bottom-32 left-1/4"
        color="#47762f"
        speed={0.8}
        horizontalSpeed={1.2}
        rotationSpeed={0.5}
        variant="triangle"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance transition-all duration-1000 delay-200 text-[#f2efde] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Gestão Responsável de{" "}
          <span className="text-[#5e6f3e]">Resíduos Contaminados</span>
        </h1>

        <p
          className={`text-lg md:text-xl text-[#5e6f3e] mb-8 max-w-3xl mx-auto text-pretty transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Soluções completas e seguras para coleta, transporte e destinação
          final de resíduos perigosos. Protegendo o meio ambiente e sua empresa.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            size="lg"
            className="text-base px-8 bg-[#5e6f3e] text-[#ffffff] hover:bg-[#47762f] hover:text-[#f2efde]"
          >
            Solicitar Orçamento
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 bg-transparent border-[#5e6f3e] text-[#5e6f3e] hover:bg-[#47762f] hover:text-[#ffffff]"
          >
            Nossos Serviços
          </Button>
        </div>

        <div
          className={`mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src="/header.png"
            alt="Equipe de coleta de resíduos"
            className="rounded-lg shadow-2xl w-full max-w-5xl mx-auto mb-28"
          />
        </div>
      </div>
    </section>
  );
}
