import { AlertTriangle, TrendingDown, Frown } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="bg-destructive/10 p-4 rounded-full border border-destructive/20">
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
          Cansado de Resultados Inconsistentes no Mercado?
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Você estuda, opera, mas seus lucros continuam instáveis. Talvez o que falte não seja mais conteúdo… mas sim{" "}
            <span className="text-primary font-semibold">ferramentas práticas e testadas</span> que colocam você no mesmo nível dos{" "}
            <span className="text-profit font-semibold">traders aprovados nas melhores prop firms do mundo</span>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg border border-border">
              <TrendingDown className="h-8 w-8 text-destructive mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Lucros Instáveis</h3>
              <p className="text-muted-foreground">Resultados inconsistentes que não permitem crescimento sustentável</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <Frown className="h-8 w-8 text-warning mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Stress Emocional</h3>
              <p className="text-muted-foreground">Ansiedade e pressão que afetam suas decisões de trading</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <AlertTriangle className="h-8 w-8 text-destructive mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Falta de Estrutura</h3>
              <p className="text-muted-foreground">Sem ferramentas profissionais para competir no mercado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;