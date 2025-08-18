"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../../components/hooks/use-navigation";
import Footer from "../../components/ui/footer";
import SecondaryLayout from "../../components/layouts/secondary-layout";
import WorkDetail from "@/app/components/sections/portfolio/detail/detail-work-section";
import { Suspense } from "react";

function WorkDetailWithSuspense() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-transparent py-16 text-black">
          <div className="max-w-4xl mx-auto px-4">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded mb-4"></div>
              <div className="h-64 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
            </div>
          </div>
        </div>
      }
    >
      <WorkDetail />
    </Suspense>
  );
}

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
      <WorkDetailWithSuspense />
      <Footer />
    </SecondaryLayout>
  );
}
