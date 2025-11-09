export function Footer() {
  return (
    <footer className="bg-[#5e6f3e] border-t border-[#94cbe2]/20 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-[#a2ca4f] mb-4">
              BSY Resíduos
            </h3>
            <p className="text-[#aac225] text-sm leading-relaxed">
              Gestão responsável de resíduos contaminados com segurança e
              sustentabilidade.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#f2efde] mb-4">Serviços</h4>
            <ul className="space-y-2 text-[#aac225] text-sm">
              <li>Coleta Especializada</li>
              <li>Tratamento de Resíduos</li>
              <li>Destinação Final</li>
              <li>Consultoria Ambiental</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#f2efde] mb-4">Empresa</h4>
            <ul className="space-y-2 text-[#aac225] text-sm">
              <li>Sobre Nós</li>
              <li>Certificações</li>
              <li>Política de Qualidade</li>
              <li>Trabalhe Conosco</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#f2efde] mb-4">Legal</h4>
            <ul className="space-y-2 text-[#aac225] text-sm">
              <li>Política de Privacidade</li>
              <li>Termos de Uso</li>
              <li>Licenças Ambientais</li>
              <li>Compliance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#aac225]/20 pt-8 text-center text-[#aac225] text-sm">
          <p>&copy; 2025 BSY Resíduos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
