"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";
import IntroStudiosSection from "../components/sections/studios/intro-studio-section";
import DetailStudiosSection from "../components/sections/studios/detail-studios-section";
import OurServicesSection from "../components/sections/studios/our-services-section";
import Footer from "../components/ui/footer";
import SecondaryLayout from "../components/layouts/secondary-layout";

export default function StudiosPage() {
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
      <IntroStudiosSection />
      <DetailStudiosSection />
      <OurServicesSection />
      <Footer />
    </SecondaryLayout>
  );
}
