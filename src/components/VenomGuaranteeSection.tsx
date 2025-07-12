import { Button } from "@/components/ui/button";
import { Shield, RefreshCw, CheckCircle } from "lucide-react";

const VenomGuaranteeSection = () => {
  return (
    <section className="py-20 bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <Shield className="w-20 h-20 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Garantia Zero Risco
            </h2>
            <p className="text-xl text-muted-foreground">
              Sua satisfação é nossa prioridade absoluta
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">7 Dias</h3>
                <p className="text-muted-foreground">Garantia completa</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">100%</h3>
                <p className="text-muted-foreground">Dinheiro de volta</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Sem Burocacia</h3>
                <p className="text-muted-foreground">Processo simples</p>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                🛡️ Garantia Incondicional de 7 Dias
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                Teste o Venom FX por 7 dias completos. Se não estiver 100% satisfeito com os resultados, 
                devolvemos todo o seu dinheiro sem fazer perguntas.
              </p>
              <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>Risco zero para você. Garantia total para nós.</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">Por que oferecemos essa garantia?</h4>
              <p className="text-muted-foreground">
                Porque temos total confiança na qualidade e eficácia do Venom FX. 
                Centenas de traders já comprovaram a precisão de 95% em seus resultados.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">Como solicitar o reembolso?</h4>
              <p className="text-muted-foreground">
                Simples: envie um email para nosso suporte dentro de 7 dias e 
                processamos o reembolso em até 24 horas. Sem perguntas, sem burocacia.
              </p>
            </div>
          </div>

          <Button 
            size="xl" 
            variant="cta" 
            className="text-xl px-12 py-6 font-bold hover:scale-105 transition-transform"
          >
            🚀 Quero Testar Sem Risco Por 7 Dias
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VenomGuaranteeSection;