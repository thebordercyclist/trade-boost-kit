import { Button } from "@/components/ui/button";
import { Check, Zap, Shield, TrendingUp, Bell, Infinity } from "lucide-react";

const VenomProductSection = () => {
  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              O Que Você Vai Receber
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo o que você precisa para operar com precisão e confiança
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Detecção Automática de Tendência</h3>
              <p className="text-muted-foreground">
                Identifica automaticamente mudanças de tendência com precisão cirúrgica
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Bell className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Alertas Visuais e Sonoros</h3>
              <p className="text-muted-foreground">
                Nunca perca uma oportunidade com alertas em tempo real
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">95% de Precisão</h3>
              <p className="text-muted-foreground">
                Resultados auditados e comprovados por traders profissionais
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Compatibilidade Total</h3>
              <p className="text-muted-foreground">
                Funciona com qualquer ativo disponível no MetaTrader 4
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Check className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Sinais Sem Repintar</h3>
              <p className="text-muted-foreground">
                Sinais fixos e confiáveis após confirmação - sem mudanças
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Infinity className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Pagamento Único</h3>
              <p className="text-muted-foreground">
                Sem mensalidades. Acesso vitalício garantido
              </p>
            </div>
          </div>

          {/* Oferta Especial */}
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-lg p-8 text-center">
            <div className="mb-6">
              <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                💥 Promoção Relâmpago
              </span>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl text-muted-foreground line-through">De R$ 997</span>
                <span className="text-5xl font-bold text-accent">por R$ 97</span>
              </div>
              <p className="text-lg text-muted-foreground">
                🎁 Válido apenas hoje. Depois, volta ao preço cheio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Detecção automática de tendência</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Alertas visuais e sonoros</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Resultados auditados com até 95% de precisão</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Compatível com qualquer ativo do MT4</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Sinais sem repintar</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Pagamento único — sem mensalidades</span>
                </div>
              </div>
            </div>

            <Button 
              size="xl" 
              variant="accent" 
              className="text-xl px-12 py-6 font-bold hover:scale-105 transition-transform"
            >
              🚀 Quero Comprar Agora com 90% de Desconto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenomProductSection;