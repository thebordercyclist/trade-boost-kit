import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Caio M.",
      location: "São Paulo",
      text: "Passei na mesa FTMO na primeira tentativa com o plano deles. Robô ajudou a manter o emocional no lugar.",
      rating: 5
    },
    {
      name: "Lucas T.",
      location: "Portugal", 
      text: "O indicador me salvou de entrar em várias furadas. Parece que ele lê o mercado.",
      rating: 5
    },
    {
      name: "Juliano A.",
      location: "Curitiba",
      text: "Antes era só loss e ansiedade. Agora tenho um robô que faz dinheiro com calma todo mês.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Milhares de Traders Já Estão Vencendo com Nossas Ferramentas
          </h2>
          <p className="text-xl text-muted-foreground">Veja o que nossos clientes estão dizendo</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
              <div className="mb-6">
                <Quote className="h-8 w-8 text-primary/60 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-warning fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                🗣️ "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-profit rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">– {testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-card p-6 rounded-lg border border-border max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4">
              <span className="text-primary font-bold">+5.000 traders</span> já transformaram seus resultados
            </p>
            <div className="flex justify-center items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-warning fill-current" />
              ))}
              <span className="ml-2 text-muted-foreground">4.9/5 avaliação média</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;