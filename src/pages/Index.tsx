import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ProductSection from "@/components/ProductSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <ProductSection />
      <TestimonialsSection />
      <OfferSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
