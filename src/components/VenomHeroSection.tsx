import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Target, Shield } from "lucide-react";

const VenomHeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-card border-b border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Video VSL Section */}
        <div className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center border border-border">
                <div className="text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <p className="text-muted-foreground">Vídeo VSL - Indicador Venom FX</p>
                  <p className="text-sm text-muted-foreground mt-2">Autoplay ativado, sem som inicialmente</p>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
                Assista agora e descubra como centenas de traders estão lucrando com 95% de precisão
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                em qualquer ativo do MT4
              </p>
              
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
                <p className="text-2xl font-bold text-accent mb-2">
                  🚨 Promoção Relâmpago: de R$ 997 por apenas R$ 97!
                </p>
                <div className="flex items-center justify-center gap-2 text-accent font-semibold">
                  <span>🕒 Oferta expira em</span>
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded font-mono">
                    00:09:59
                  </span>
                </div>
              </div>
              
              <Button 
                size="xl" 
                variant="accent" 
                className="text-xl px-12 py-6 font-bold hover:scale-105 transition-transform"
              >
                🎯 Quero Começar Agora
              </Button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Domine as Tendências com Confiança
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              O Indicador Venom FX revela com clareza reversões e confirma tendências com até 95% de assertividade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <TrendingUp className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Precisão Comprovada</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Funciona em Forex, Cripto, Ouro, Índices
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Sem repintar
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Setas visuais + alertas no MT4
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Pagamento único. Acesso vitalício.
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <Target className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Resultados Garantidos</h3>
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">95%</div>
                <p className="text-xl text-muted-foreground mb-4">de assertividade</p>
                <p className="text-muted-foreground">
                  Testado por centenas de traders profissionais
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="xl" 
              variant="cta" 
              className="text-xl px-12 py-6 font-bold hover:scale-105 transition-transform"
            >
              🚀 Quero Meu Venom FX Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenomHeroSection;