import { TrendingDown, TrendingUp } from "lucide-react";

const VenomBeforeAfterSection = () => {
  return (
    <section className="py-20 bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Antes e Depois
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja a diferença que o Venom FX faz na sua operação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Antes */}
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="text-center mb-6">
                <TrendingDown className="w-16 h-16 mx-auto mb-4 text-accent" />
                <h3 className="text-2xl font-bold text-foreground mb-2">📉 Antes</h3>
                <p className="text-muted-foreground">Operando sem direção</p>
              </div>

              <div className="space-y-4">
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Gráficos Confusos</h4>
                  <p className="text-sm text-muted-foreground">
                    Múltiplos indicadores conflitantes, sinais contraditórios
                  </p>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Decisões Erradas</h4>
                  <p className="text-sm text-muted-foreground">
                    Entradas baseadas em "achismo", stops prematuros
                  </p>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Resultados Inconsistentes</h4>
                  <p className="text-sm text-muted-foreground">
                    Lucros esporádicos, perdas frequentes, frustração constante
                  </p>
                </div>
              </div>
            </div>

            {/* Depois */}
            <div className="bg-card border border-primary/20 rounded-lg p-8">
              <div className="text-center mb-6">
                <TrendingUp className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold text-foreground mb-2">📈 Depois</h3>
                <p className="text-muted-foreground">Com Venom FX</p>
              </div>

              <div className="space-y-4">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Tendência Clara</h4>
                  <p className="text-sm text-muted-foreground">
                    Sinal único e preciso, direção óbvia do mercado
                  </p>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Entradas Seguras</h4>
                  <p className="text-sm text-muted-foreground">
                    Pontos de entrada e saída bem definidos, timing perfeito
                  </p>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Lucros Consistentes</h4>
                  <p className="text-sm text-muted-foreground">
                    95% de assertividade, resultados previsíveis e constantes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparação Visual */}
          <div className="mt-16 bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Comparação Visual dos Resultados
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-4">
                  <div className="text-4xl mb-2">😰</div>
                  <h4 className="font-semibold text-foreground mb-2">Sem Venom FX</h4>
                  <div className="text-2xl font-bold text-accent mb-2">~30%</div>
                  <p className="text-sm text-muted-foreground">Taxa de acerto</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-4">
                  <div className="text-4xl mb-2">😎</div>
                  <h4 className="font-semibold text-foreground mb-2">Com Venom FX</h4>
                  <div className="text-2xl font-bold text-primary mb-2">95%</div>
                  <p className="text-sm text-muted-foreground">Taxa de acerto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenomBeforeAfterSection;