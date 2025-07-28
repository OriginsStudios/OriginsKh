"use client";
import { useScroll, useTransform } from "framer-motion";
import Footer from "../components/ui/footer";
import { useNavigation } from "../components/hooks/use-navigation";
import IntroAboutSection from "../components/sections/about/intro-about-section";
import OurOValuesSection from "../components/sections/about/our-o-value-section";
import OurOriginsSection from "../components/sections/about/our-origins-section";
import TeamSection from "../components/sections/about/our-management-team";
import ServiceSection from "../components/sections/service-seaction";
import SecondaryLayout from "../components/layouts/secondary-layout";
import OurManagementTeam from "../components/sections/about/our-team";



export default function ContactPage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <SecondaryLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <IntroAboutSection/>
      <OurOValuesSection/>
      <ServiceSection/>
      <OurOriginsSection/>
      <TeamSection/>
      <OurManagementTeam />
      <Footer />
    </SecondaryLayout>
  );
}