import VenomHeroSection from "@/components/VenomHeroSection";
import VenomProblemSection from "@/components/VenomProblemSection";
import VenomProductSection from "@/components/VenomProductSection";
import VenomBeforeAfterSection from "@/components/VenomBeforeAfterSection";
import VenomTestimonialsSection from "@/components/VenomTestimonialsSection";
import VenomGuaranteeSection from "@/components/VenomGuaranteeSection";
import VenomFAQSection from "@/components/VenomFAQSection";
import VenomFinalCTASection from "@/components/VenomFinalCTASection";
import VenomFooter from "@/components/VenomFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <VenomHeroSection />
      <VenomProblemSection />
      <VenomProductSection />
      <VenomBeforeAfterSection />
      <VenomTestimonialsSection />
      <VenomGuaranteeSection />
      <VenomFAQSection />
      <VenomFinalCTASection />
      <VenomFooter />
    </div>
  );
};

export default Index;
