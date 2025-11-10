import AboutFinnegans from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Descriptions from "@/components/sections/Descriptions";
import DescriptionsDesktop from "@/components/sections/DescriptionsDesktop";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import IdealCustomer from "@/components/sections/IdealCustomer";
import PartnersCarousel from "@/components/sections/PartnersCarousel";
import QuipposBanner from "@/components/sections/QuipposBanner";
import TeamBannerDesktop from "@/components/sections/TeamBannerDesktop";
import TeamBannerMobile from "@/components/sections/TeamBannerMobile";

export default function Home() {
  return (
    <>
      <Hero />
      <Descriptions />
      <DescriptionsDesktop />
      <Features />
      <IdealCustomer />
      <QuipposBanner />
      <TeamBannerDesktop />
      <TeamBannerMobile />
      <CTA />
      <AboutFinnegans />
      <PartnersCarousel />
      <Footer />
    </>
  );
}
