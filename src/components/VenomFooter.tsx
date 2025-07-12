const VenomFooter = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Venom FX</h3>
            <p className="text-muted-foreground">
              O indicador mais preciso para traders profissionais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Contato</h4>
              <p className="text-muted-foreground text-sm">
                📧 suporte@venomfx.com<br />
                📱 WhatsApp: (11) 99999-9999
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Suporte</h4>
              <p className="text-muted-foreground text-sm">
                Atendimento 24/7<br />
                Instalação e configuração<br />
                Treinamento completo
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Garantias</h4>
              <p className="text-muted-foreground text-sm">
                🛡️ 7 dias de garantia<br />
                💎 Acesso vitalício<br />
                ⚡ Atualizações gratuitas
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                Política de Privacidade
              </a>
              <span className="hidden md:block text-muted-foreground">|</span>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                Termos de Uso
              </a>
              <span className="hidden md:block text-muted-foreground">|</span>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                Contato
              </a>
            </div>
            
            <p className="text-xs text-muted-foreground">
              "Este produto não garante resultados financeiros. Resultados variam por usuário."
            </p>
            
            <p className="text-xs text-muted-foreground mt-2">
              © 2024 Venom FX. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default VenomFooter;