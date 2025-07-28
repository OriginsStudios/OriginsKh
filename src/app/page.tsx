"use client";
import { useScroll, useTransform } from "framer-motion";
import MainLayout from "./components/layouts/main-layout";
import Footer from "./components/ui/footer";
import IntroHomeSection from "./components/sections/home/intro-home-section";
import { useNavigation } from "./components/hooks/use-navigation";
import OurWorkSection from "./components/sections/home/our-work-section";
import OurStudiosSection from "./components/sections/home/our-studios-section";
import OurClientsSection from "./components/sections/home/our-clients-section";

export default function HomePage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection} >
      <IntroHomeSection/>
      <OurWorkSection/>
      <OurStudiosSection/>
      <OurClientsSection/>
      {/* <RelatedReading/> */}
      <Footer />
    </MainLayout>
  );
}