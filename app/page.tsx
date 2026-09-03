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
import RuleBand from "@/components/home/RuleBand";
import PricingBand from "@/components/home/PricingBand";
import CtaSection from "@/components/home/CtaSection";
import SiteFooter from "@/components/home/SiteFooter";
import { ObjectBandSection } from "@/components/pages/VisualSystem";

export default function Home() {
  return (
    <>
      <JsonLd
        nodes={[
          webPageLd({
            path: "/",
            title: "Ecommerce Operations Agency | You Own It, We Run It",
            description:
              "Hyprr builds, grows and operates ecommerce businesses on Amazon US & UK, Walmart US and Shopify. You own the accounts and inventory; we run the desk.",
          }),
        ]}
      />
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Channels />
        {/* PROMPT_21 — real products from the operation, floated over
            the channel band's edge (§7.3 dressing in the component) */}
        <ObjectBandSection
          band={{
            position: "mid",
            ground: "bone",
            objects: [
              {
                src: "/images/private-label/grill-cover",
                alt: "Private label grill cover developed and listed through the Hyprr build process",
                maxW: 320,
              },
              {
                src: "/images/private-label/planter-bowl",
                alt: "Private label concrete planter bowl photographed for its marketplace listing",
                maxW: 320,
              },
              {
                src: "/images/wholesale-ecommerce/pipe-cutter",
                alt: "Cordless pipe cutter from a sourced tool brand in the wholesale catalogue",
                maxW: 360,
                specCard: { k: "Sourced line", v: "Bought on approval, resold in your account" },
              },
            ],
            caption:
              "Real products from the operation — private label goods the build process developed, beside sourced wholesale lines.",
          }}
        />
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
        <RuleBand />
        <PricingBand />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
