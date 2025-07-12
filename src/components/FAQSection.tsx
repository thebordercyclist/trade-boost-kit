import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "O robô funciona em conta real e demo?",
      answer: "Sim, o robô funciona perfeitamente em ambas e é ideal para testes de consistência."
    },
    {
      question: "Preciso deixar o robô ligado o tempo todo?",
      answer: "Sim, você precisa de um VPS ou manter o MetaTrader aberto durante o horário de operação definido."
    },
    {
      question: "O indicador funciona em qual ativo?",
      answer: "Funciona em Forex, Índices, Ouro e Criptomoedas — desde que você use o MetaTrader 4."
    },
    {
      question: "Vocês ajudam na instalação?",
      answer: "Sim! Fornecemos tutorial em vídeo + suporte por WhatsApp ou e-mail."
    },
    {
      question: "Posso usar tudo isso para passar na mesa?",
      answer: "Exatamente. Nosso foco é operacional limpo, com controle emocional e risco equilibrado para aumentar suas chances de aprovação."
    }
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-6">
            <HelpCircle className="h-12 w-12 text-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Esclarecemos as principais perguntas sobre nosso kit
          </p>
        </div>
        
        <div className="bg-background p-8 rounded-2xl border border-border">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/50 rounded-lg">
                  <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-2">Ainda tem dúvidas?</h3>
            <p className="text-muted-foreground mb-4">
              Entre em contato conosco pelo WhatsApp e tire todas suas dúvidas antes de decidir.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-success text-success-foreground rounded-lg hover:bg-success/90 transition-colors font-semibold"
              >
                📱 Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;