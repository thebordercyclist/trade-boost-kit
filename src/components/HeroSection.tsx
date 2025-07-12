import { Button } from "@/components/ui/button";
import { TrendingUp, Target, BarChart3 } from "lucide-react";
const HeroSection = () => {
  return <section className="min-h-screen bg-gradient-to-br from-background via-card to-muted flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="bg-primary/10 p-4 rounded-full border border-primary/20">
            <TrendingUp className="h-12 w-12 text-primary" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-profit to-accent bg-clip-text text-transparent leading-tight">
          🚀 Transforme Seu Trading com Ferramentas Profissionais Usadas por Traders Aprovados
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Automatize lucros consistentes com nosso Robô Trader, identifique tendências com precisão no MT4 e passe em mesas proprietárias com confiança.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="cta" size="xl" className="w-full sm:w-auto">
            <Target className="mr-2 h-5 w-5" />
            ➡️ Quero Aumentar Meus Resultados
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-card p-4 rounded-lg border border-border mb-4">
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Resultados Consistentes</h3>
            <p className="text-muted-foreground text-sm">Lucros médios entre 1% e 5% ao mês</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-card p-4 rounded-lg border border-border mb-4">
              <Target className="h-8 w-8 text-profit" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Alta Precisão</h3>
            <p className="text-muted-foreground text-sm">Identifica tendências reais com 95% de precisão</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-card p-4 rounded-lg border border-border mb-4">
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Aprovação Garantida</h3>
            <p className="text-muted-foreground text-sm">Estratégia testada para prop firms</p>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;