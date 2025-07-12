import { Button } from "@/components/ui/button";
import { TrendingDown, Target, Zap, AlertTriangle } from "lucide-react";

const VenomProblemSection = () => {
  return (
    <section className="py-20 bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              "Você já entrou certo… mas saiu cedo demais?"
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              O problema não é sua análise. É a falta de confiança nas suas decisões.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <TrendingDown className="w-12 h-12 text-accent mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Antes: Operando no Escuro</h3>
              <p className="text-muted-foreground">
                Sinais confusos, decisões baseadas em "achismo" e resultados inconsistentes
              </p>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <Target className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Com Venom FX: Clareza Total</h3>
              <p className="text-muted-foreground">
                Sinais claros e precisos direto no gráfico, sem adivinhações
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <Zap className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Resultado: Confiança</h3>
              <p className="text-muted-foreground">
                Operações com segurança e resultados consistentes
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Com o Venom FX, você:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground font-bold text-sm">🛑</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Para de operar no escuro</h4>
                  <p className="text-muted-foreground text-sm">Sinais claros e objetivos</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold text-sm">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Recebe sinais precisos</h4>
                  <p className="text-muted-foreground text-sm">Direto no gráfico do MT4</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold text-sm">🚀</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Opera com confiança</h4>
                  <p className="text-muted-foreground text-sm">Sem adivinhações ou dúvidas</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold text-sm">💎</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Resultados consistentes</h4>
                  <p className="text-muted-foreground text-sm">95% de assertividade comprovada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenomProblemSection;