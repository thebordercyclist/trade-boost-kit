import { Button } from "@/components/ui/button";
import { Rocket, TrendingUp, Target, Clock } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-card to-muted">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="bg-primary/10 p-6 rounded-full border border-primary/20">
            <Rocket className="h-16 w-16 text-primary" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-profit to-accent bg-clip-text text-transparent leading-tight">
          Não Deixe o Mercado Decidir Seu Destino. Use a Tecnologia a Seu Favor.
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Com ferramentas certas, você para de operar no escuro e começa a construir um{" "}
          <span className="text-profit font-semibold">histórico de sucesso</span>.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-lg border border-border">
            <TrendingUp className="h-8 w-8 text-primary mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Resultados Automáticos</h3>
            <p className="text-muted-foreground text-sm">Robô opera 24h com disciplina perfeita</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <Target className="h-8 w-8 text-profit mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Precisão Profissional</h3>
            <p className="text-muted-foreground text-sm">Indicadores usados por traders aprovados</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <Clock className="h-8 w-8 text-accent mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Economia de Tempo</h3>
            <p className="text-muted-foreground text-sm">Menos tempo em frente às telas</p>
          </div>
        </div>
        
        <div className="bg-card p-8 rounded-2xl border-2 border-primary/20 max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-destructive/10 p-3 rounded-full border border-destructive/20 mr-4">
              <Clock className="h-6 w-6 text-destructive" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-foreground">Oferta por Tempo Limitado</h3>
              <p className="text-muted-foreground">Preço promocional válido apenas hoje</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">R$ 197</div>
            <div className="text-lg text-muted-foreground mb-6">ou 12x de R$ 19,70</div>
            
            <Button variant="cta" size="xl" className="w-full mb-4">
              🚀 Quero Operar com Confiança
            </Button>
            
            <p className="text-sm text-muted-foreground">
              ✅ Garantia de 7 dias • ✅ Suporte completo • ✅ Atualizações gratuitas
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-8">
            <span className="text-primary font-semibold">+5.000 traders</span> já transformaram seus resultados.{" "}
            <span className="text-profit font-semibold">Seja o próximo!</span>
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">5.000+</div>
              <div className="text-sm text-muted-foreground">Traders Ativos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-profit">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-warning">7 dias</div>
              <div className="text-sm text-muted-foreground">Garantia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;