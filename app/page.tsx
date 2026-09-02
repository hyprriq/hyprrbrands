import SiteHeader from "@/components/home/SiteHeader";
import JsonLd from "@/components/JsonLd";
import { webPageLd } from "@/lib/schema";
import Hero from "@/components/home/Hero";
import Channels from "@/components/home/Channels";
import ThreeEngines from "@/components/home/ThreeEngines";
import SystemScroll from "@/components/home/SystemScroll";
import CommercePaths from "@/components/home/CommercePaths";
import FullyManaged from "@/components/home/FullyManaged";
import EverythingConnects from "@/components/home/EverythingConnects";
import Ownership from "@/components/home/Ownership";
import HowWeWork from "@/components/home/HowWeWork";
import Principles from "@/components/home/Principles";
import Transparency from "@/components/home/Transparency";
import CostSection from "@/components/home/CostSection";
import FitSection from "@/components/home/FitSection";
import ProofSection from "@/components/home/ProofSection";
import FaqSection from "@/components/home/FaqSection";
import PricingBand from "@/components/home/PricingBand";
import CtaSection from "@/components/home/CtaSection";
import SiteFooter from "@/components/home/SiteFooter";

export default function Home() {
  return (
    <>
      <JsonLd
        nodes={[
          webPageLd({
            path: "/",
            title: "Ecommerce Operations Agency | Hyprr Brands",
            description:
              "Hyprr builds, grows and operates ecommerce businesses on Amazon US & UK, Walmart US and Shopify. You own the accounts and the inventory. We run the operation.",
          }),
        ]}
      />
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Channels />
        <ThreeEngines />
        <SystemScroll />
        <CommercePaths />
        <FullyManaged />
        <EverythingConnects />
        <Ownership />
        <HowWeWork />
        <Principles />
        <Transparency />
        <CostSection />
        <FitSection />
        <ProofSection />
        <FaqSection />
        <PricingBand />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
