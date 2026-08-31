import SiteHeader from "@/components/home/SiteHeader";
import Hero from "@/components/home/Hero";
import Channels from "@/components/home/Channels";
import ThreeEngines from "@/components/home/ThreeEngines";
import SystemScroll from "@/components/home/SystemScroll";
import CommercePaths from "@/components/home/CommercePaths";
import EverythingConnects from "@/components/home/EverythingConnects";
import Ownership from "@/components/home/Ownership";
import HowWeWork from "@/components/home/HowWeWork";
import Principles from "@/components/home/Principles";
import Transparency from "@/components/home/Transparency";
import CostSection from "@/components/home/CostSection";
import FitSection from "@/components/home/FitSection";
import TeamSection from "@/components/home/TeamSection";
import ProofSection from "@/components/home/ProofSection";
import InsightsSection from "@/components/home/InsightsSection";
import FaqSection from "@/components/home/FaqSection";
import PricingBand from "@/components/home/PricingBand";
import CtaSection from "@/components/home/CtaSection";
import SiteFooter from "@/components/home/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <Channels />
        <ThreeEngines />
        <SystemScroll />
        <CommercePaths />
        <EverythingConnects />
        <Ownership />
        <HowWeWork />
        <Principles />
        <Transparency />
        <CostSection />
        <FitSection />
        <TeamSection />
        <ProofSection />
        <InsightsSection />
        <FaqSection />
        <PricingBand />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
