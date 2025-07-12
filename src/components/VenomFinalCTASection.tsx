import { Button } from "@/components/ui/button";
import { Timer, Package, Shield, Zap } from "lucide-react";

const VenomFinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
              Não Deixe o Mercado Decidir Seu Destino
            </h2>
            <p className="text-2xl text-muted-foreground mb-8">
              Use a Tecnologia a Seu Favor
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Com as ferramentas certas, você para de operar no escuro e começa a construir um histórico de sucesso consistente e previsível.
            </p>
          </div>

          {/* Urgência */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Timer className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">⚠️ Apenas HOJE: R$ 97 (de R$ 997)</h3>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-card border border-border rounded-lg p-4">
                <Package className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Acesso Vitalício</h4>
                <p className="text-sm text-muted-foreground">Pagamento único</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Instalação Simples</h4>
                <p className="text-sm text-muted-foreground">Tutorial completo</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">95% Precisão</h4>
                <p className="text-sm text-muted-foreground">Resultados comprovados</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <Timer className="w-8 h-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Garantia 7 Dias</h4>
                <p className="text-sm text-muted-foreground">Risco zero</p>
              </div>
            </div>

            <div className="bg-accent text-accent-foreground rounded-lg p-4 mb-6">
              <p className="text-lg font-bold">
                🔴 Restam apenas 14 licenças nesta oferta!
              </p>
            </div>

            <Button 
              size="xl" 
              variant="accent" 
              className="text-2xl px-16 py-8 font-bold hover:scale-105 transition-transform mb-4"
            >
              🚀 Quero Operar com Confiança
            </Button>

            <p className="text-sm text-muted-foreground">
              📌 Após o prazo ou fim do estoque, o valor volta para R$ 997
            </p>
          </div>

          {/* Resumo dos Benefícios */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">🎯 Precisão Cirúrgica</h4>
              <p className="text-muted-foreground">
                95% de assertividade comprovada em qualquer ativo do MT4
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">⚡ Sinais Instantâneos</h4>
              <p className="text-muted-foreground">
                Alertas visuais e sonoros em tempo real, sem repintar
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">🛡️ Risco Zero</h4>
              <p className="text-muted-foreground">
                Garantia incondicional de 7 dias, 100% do dinheiro de volta
              </p>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Transforme Sua Operação Hoje Mesmo
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Junte-se a centenas de traders que já descobriram o poder do Venom FX
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-3xl text-muted-foreground line-through">R$ 997</span>
              <span className="text-5xl font-bold text-accent">R$ 97</span>
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded text-sm font-bold">
                90% OFF
              </span>
            </div>

            <Button 
              size="xl" 
              variant="cta" 
              className="text-2xl px-16 py-8 font-bold hover:scale-105 transition-transform"
            >
              💎 Garantir Meu Venom FX Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenomFinalCTASection;