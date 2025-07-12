import { Bot, TrendingUp, Award, Shield, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-profit bg-clip-text text-transparent">
            Conheça o Kit Completo para Traders Consistentes
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Robô Trader */}
          <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
            <div className="bg-primary/10 p-4 rounded-full w-fit mb-6 group-hover:bg-primary/20 transition-colors">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              🔹 Robô Trader Inteligente
            </h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-muted-foreground">
                <Shield className="h-4 w-4 text-primary mr-3" />
                Automatiza operações com risco controlado
              </li>
              <li className="flex items-center text-muted-foreground">
                <Target className="h-4 w-4 text-profit mr-3" />
                Lucros médios entre 1% e 5% ao mês
              </li>
              <li className="flex items-center text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-accent mr-3" />
                Otimizado para mercados laterais e em tendência
              </li>
              <li className="flex items-center text-muted-foreground">
                <Zap className="h-4 w-4 text-warning mr-3" />
                Comandos simples + suporte completo
              </li>
            </ul>
          </div>
          
          {/* Indicador MT4 */}
          <div className="bg-card p-8 rounded-2xl border border-border hover:border-profit/50 transition-all duration-300 hover:shadow-xl group">
            <div className="bg-profit/10 p-4 rounded-full w-fit mb-6 group-hover:bg-profit/20 transition-colors">
              <TrendingUp className="h-8 w-8 text-profit" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              🔹 Indicador de Tendência para MT4
            </h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-muted-foreground">
                <Target className="h-4 w-4 text-profit mr-3" />
                Identifica tendências reais com alta precisão
              </li>
              <li className="flex items-center text-muted-foreground">
                <Zap className="h-4 w-4 text-accent mr-3" />
                Fácil leitura visual (setas, zonas e alertas)
              </li>
              <li className="flex items-center text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-primary mr-3" />
                Ideal para scalpers e swing traders
              </li>
            </ul>
          </div>
          
          {/* Plano Prop Firm */}
          <div className="bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl group">
            <div className="bg-accent/10 p-4 rounded-full w-fit mb-6 group-hover:bg-accent/20 transition-colors">
              <Award className="h-8 w-8 text-accent" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              🔹 Plano de Aprovação Prop Firm
            </h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-muted-foreground">
                <Award className="h-4 w-4 text-accent mr-3" />
                Estratégia testada para contas demo e challenge
              </li>
              <li className="flex items-center text-muted-foreground">
                <Shield className="h-4 w-4 text-primary mr-3" />
                Regras de risco + rotina + mindset operacional
              </li>
              <li className="flex items-center text-muted-foreground">
                <Target className="h-4 w-4 text-profit mr-3" />
                Inclui modelo de gerenciamento e checklist diário
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="accent" size="xl">
            <Target className="mr-2 h-5 w-5" />
            Ver Todos os Benefícios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;