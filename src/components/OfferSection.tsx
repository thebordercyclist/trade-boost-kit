import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, Headphones, RefreshCw, Award } from "lucide-react";

const OfferSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-profit bg-clip-text text-transparent">
            Tudo o Que Você Precisa Para Operar Com Clareza e Consistência
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <CheckCircle className="h-6 w-6 text-profit flex-shrink-0" />
              <span className="text-lg text-foreground">Robô Trader com instalação + videoaula</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <CheckCircle className="h-6 w-6 text-profit flex-shrink-0" />
              <span className="text-lg text-foreground">Indicador de Tendência para MT4</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <CheckCircle className="h-6 w-6 text-profit flex-shrink-0" />
              <span className="text-lg text-foreground">Plano de Aprovação para Prop Firms</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <CheckCircle className="h-6 w-6 text-profit flex-shrink-0" />
              <span className="text-lg text-foreground">Suporte técnico e atualizações</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <CheckCircle className="h-6 w-6 text-profit flex-shrink-0" />
              <span className="text-lg text-foreground">Garantia de 7 dias</span>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Kit Completo de Trading</h3>
              <p className="text-muted-foreground">Tudo que você precisa para ser consistente</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-3" />
                  <span className="text-foreground">Robô Trader</span>
                </div>
                <span className="text-muted-foreground line-through">R$ 97</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-profit mr-3" />
                  <span className="text-foreground">Indicador MT4</span>
                </div>
                <span className="text-muted-foreground line-through">R$ 67</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-accent mr-3" />
                  <span className="text-foreground">Plano Prop Firm</span>
                </div>
                <span className="text-muted-foreground line-through">R$ 127</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                <div className="flex items-center">
                  <Headphones className="h-5 w-5 text-warning mr-3" />
                  <span className="text-foreground">Suporte Premium</span>
                </div>
                <span className="text-muted-foreground line-through">R$ 47</span>
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-foreground">Total:</span>
                  <div className="text-right">
                    <span className="text-lg text-muted-foreground line-through mr-2">R$ 338</span>
                    <span className="text-3xl font-bold text-primary">R$ 197</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-1">ou 12x de R$ 19,70 no cartão</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button variant="cta" size="xl" className="w-full">
                🎯 Quero Começar Agora
              </Button>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-profit" />
                <span>Garantia de 7 dias - Risco zero</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-muted/20 p-8 rounded-2xl border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-profit mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Garantia Total</h4>
              <p className="text-sm text-muted-foreground">7 dias para testar sem risco</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Headphones className="h-8 w-8 text-accent mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Suporte Dedicado</h4>
              <p className="text-sm text-muted-foreground">Ajuda na instalação e uso</p>
            </div>
            
            <div className="flex flex-col items-center">
              <RefreshCw className="h-8 w-8 text-warning mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Atualizações Gratuitas</h4>
              <p className="text-sm text-muted-foreground">Sempre com as melhores versões</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;