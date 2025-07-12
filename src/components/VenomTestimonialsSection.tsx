import { Star, Quote } from "lucide-react";

const VenomTestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rafael M.",
      location: "São Paulo",
      text: "Parei de tomar stop bobo em menos de 1 semana. O Venom FX mostra com clareza a hora certa de entrar.",
      rating: 5,
      avatar: "RM"
    },
    {
      name: "João V.",
      location: "Rio de Janeiro", 
      text: "Uso no ouro, dólar e Nasdaq. Hoje opero com muito mais confiança.",
      rating: 5,
      avatar: "JV"
    },
    {
      name: "Carlos A.",
      location: "Brasília",
      text: "Finalmente um indicador que não repinta. Os sinais são fixos e confiáveis.",
      rating: 5,
      avatar: "CA"
    },
    {
      name: "Marina S.",
      location: "Porto Alegre",
      text: "95% de assertividade não é marketing. É real! Meus resultados provam isso.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "Lucas T.",
      location: "Belo Horizonte",
      text: "Investimento que se paga sozinho. Em 2 semanas já recuperei o valor.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "Ana P.",
      location: "Curitiba",
      text: "Os alertas sonoros são perfeitos. Nunca mais perco uma oportunidade.",
      rating: 5,
      avatar: "AP"
    }
  ];

  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Provas Reais de Traders
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja o que nossos clientes estão dizendo sobre o Venom FX
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <Quote className="w-6 h-6 text-primary/30" />
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Junte-se a centenas de traders que já transformaram seus resultados
              </h3>
              <div className="flex justify-center items-center gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <p className="text-muted-foreground">Traders ativos</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <p className="text-muted-foreground">Taxa de satisfação</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <p className="text-muted-foreground">Suporte técnico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenomTestimonialsSection;