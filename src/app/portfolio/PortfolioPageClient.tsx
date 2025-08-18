"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";
import Footer from "../components/ui/footer";
import ServiceSection from "../components/sections/service-seaction";
import SecondaryLayout from "../components/layouts/secondary-layout";
import PortfolioSection from "../components/sections/portfolio/portfolio-section";

export default function PortfolioPageClient() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]
  );

  return (
    <SecondaryLayout
      navColor={navBackground.get()}
      pageBackground="rgb(255, 255, 255)"
      activeSection={activeSection}
      scrollToSection={scrollToSection}
    >
      <PortfolioSection />
      <ServiceSection />
      <Footer />
    </SecondaryLayout>
  );
}
