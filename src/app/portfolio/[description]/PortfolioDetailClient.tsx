"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../../components/hooks/use-navigation";
import Footer from "../../components/ui/footer";
import SecondaryLayout from "../../components/layouts/secondary-layout";
import WorkDetail from "@/app/components/sections/portfolio/detail/detail-work-section";

export default function PortfolioDetailClient() {
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
      <WorkDetail />
      <Footer />
    </SecondaryLayout>
  );
}
