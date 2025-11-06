import CTA from "@/components/sections/CTA";
import Descriptions from "@/components/sections/Descriptions";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import IdealCustomer from "@/components/sections/IdealCustomer";
import QuipposBanner from "@/components/sections/QuipposBanner";
import TeamBanner from "@/components/sections/TeamBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Descriptions />
      <Features />
      <IdealCustomer />
      <QuipposBanner />
      <TeamBanner />
      <CTA />
      <Footer />
    </>
  );
}
