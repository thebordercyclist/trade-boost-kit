import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VenomFAQSection = () => {
  const faqs = [
    {
      question: "O robô funciona em conta real e demo?",
      answer: "Sim, o Venom FX funciona perfeitamente tanto em contas demo quanto reais. É ideal para testes de consistência antes de operar com dinheiro real."
    },
    {
      question: "Preciso deixar o computador ligado o tempo todo?",
      answer: "Para operação contínua, recomendamos usar um VPS (servidor virtual) ou manter o MetaTrader 4 aberto durante o horário de operação definido. Isso garante que você não perca nenhum sinal."
    },
    {
      question: "O indicador funciona em qual ativo?",
      answer: "O Venom FX funciona em todos os ativos disponíveis no MetaTrader 4: Forex (pares de moedas), Índices, Ouro, Prata, Petróleo e Criptomoedas. A versatilidade é total."
    },
    {
      question: "Vocês ajudam na instalação?",
      answer: "Sim! Fornecemos tutorial completo em vídeo passo a passo, além de suporte técnico via WhatsApp e e-mail. Nossa equipe garante que você consiga instalar e configurar corretamente."
    },
    {
      question: "Posso usar para passar em mesas proprietárias?",
      answer: "Exatamente! Nosso foco é operação limpa, com controle emocional e gerenciamento de risco equilibrado. Muitos clientes usam o Venom FX para aumentar suas chances de aprovação em prop firms."
    },
    {
      question: "Os sinais repintam?",
      answer: "NÃO! Esta é uma das principais vantagens do Venom FX. Os sinais são fixos após confirmação e não mudam, garantindo confiabilidade total em suas operações."
    },
    {
      question: "Qual a diferença para outros indicadores?",
      answer: "O Venom FX tem 95% de precisão comprovada, sinais que não repintam, alertas em tempo real e funciona em qualquer ativo do MT4. Além disso, oferecemos suporte completo e garantia de 7 dias."
    },
    {
      question: "É realmente vitalício?",
      answer: "Sim! Pagamento único de R$ 97 (na promoção) e você tem acesso vitalício ao indicador, incluindo atualizações futuras. Sem mensalidades ou taxas escondidas."
    }
  ];

  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire todas as suas dúvidas sobre o Venom FX
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="text-lg font-semibold text-foreground">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed pt-2">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Ainda tem dúvidas?
              </h3>
              <p className="text-muted-foreground mb-4">
                Nossa equipe de suporte está pronta para ajudar você
              </p>
              <p className="text-primary font-semibold">
                📧 suporte@venomfx.com | 📱 WhatsApp: (11) 99999-9999
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenomFAQSection;