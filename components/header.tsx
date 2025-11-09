"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define se o header deve ter fundo branco
  const isWhiteBackground = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isWhiteBackground
          ? "bg-white shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className={`text-2xl font-bold transition-colors duration-300 ${
              isWhiteBackground ? "text-primary" : "text-white"
            }`}
          >
            BSY Resíduos
          </div>

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#servicos"
              className={`transition-colors ${
                isWhiteBackground
                  ? "text-primary hover:text-gray-600"
                  : "text-white hover:text-primary"
              }`}
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className={`transition-colors ${
                isWhiteBackground
                  ? "text-primary hover:text-gray-600"
                  : "text-white hover:text-primary"
              }`}
            >
              Sobre
            </a>
            <a
              href="#processo"
              className={`transition-colors ${
                isWhiteBackground
                  ? "text-primary hover:text-gray-600"
                  : "text-white hover:text-primary"
              }`}
            >
              Processo
            </a>
            <Button asChild>
              <a href="#contato">Contato</a>
            </Button>
          </nav>

          {/* Botão do menu mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isWhiteBackground ? "text-primary" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4 animate-fadeIn">
            <a
              href="#servicos"
              className="text-primary hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="text-primary hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#processo"
              className="text-primary hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Processo
            </a>
            <Button asChild className="w-full">
              <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                Contato
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
