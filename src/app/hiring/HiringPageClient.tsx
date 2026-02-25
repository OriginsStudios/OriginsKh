"use client";

import Footer from "../components/ui/footer";
import { useNavigation } from "../components/hooks/use-navigation";
import IntroHiringSection from "../components/sections/hiring/intro-hiring-section";
import FindUrJobSection from "../components/sections/hiring/find-ur-job-section";
import SecondaryLayout from "../components/layouts/secondary-layout";
import { useState, useEffect } from "react";

export default function HiringPageClient() {
  const { activeSection, scrollToSection } = useNavigation();
  const [navColor, setNavColor] = useState<string>("rgb(255, 255, 255)");
  const [pageBackground, setPageBackground] =
    useState<string>("rgb(255, 255, 255)");
  const [textColor, setTextColor] = useState<string>("#000000");
  const [currentLogo, setCurrentLogo] = useState<string>("/originlogo.png");

  useEffect(() => {
    // Section color mapping (customize as needed)
    const sectionColors = {
      intro: {
        nav: "#ffffff",
        bg: "#ffffff",
        text: "#1f1a17",
        logo: "/originlogo.png",
      },
      findUrJob: {
        nav: "#9fd1fc",
        bg: "#9fd1fc",
        text: "#1f1a17",
        logo: "/originlogo.png",
      },
      findUrJobEnd: {
        nav: "#ffffff",
        bg: "#ffffff",
        text: "#1f1a17",
        logo: "/originlogo.png",
      },
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.3;
      const findUrJobElement = document.getElementById("findUrJob");

      // Check if we're near the end of findUrJob section (closer to footer)
      let isNearFooter = false;
      if (findUrJobElement) {
        const findUrJobBottom = findUrJobElement.offsetTop + findUrJobElement.offsetHeight;
        const distanceFromBottom = findUrJobBottom - (scrollY + windowHeight);
        // When within 300px of the bottom of findUrJob section
        isNearFooter = distanceFromBottom < 300;
      }

      const sections = Object.keys(sectionColors)
        .map((sectionId) => {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            const top = rect.top + scrollY;
            const bottom = top + element.offsetHeight;
            return { id: sectionId, top, bottom, element };
          }
          return null;
        })
        .filter(Boolean);

      let currentSection = "intro";
      for (const section of sections) {
        if (section) {
          const sectionTop = section.top;
          const sectionBottom = section.bottom;
          if (
            scrollY + threshold >= sectionTop &&
            scrollY + threshold < sectionBottom
          ) {
            // If we're near footer within findUrJob, use findUrJobEnd colors
            if (section.id === "findUrJob" && isNearFooter) {
              currentSection = "findUrJobEnd";
            } else {
              currentSection = section.id;
            }
            break;
          }
        }
      }
      const colors =
        sectionColors[currentSection as keyof typeof sectionColors];
      if (colors) {
        setNavColor(colors.nav);
        setPageBackground(colors.bg);
        setTextColor(colors.text);
        setCurrentLogo(colors.logo);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SecondaryLayout
      navColor={navColor}
      pageBackground={pageBackground}
      textColor={textColor}
      activeSection={activeSection}
      scrollToSection={scrollToSection}
      logo={currentLogo}
    >
      <IntroHiringSection textColor={textColor} />
      <FindUrJobSection textColor={textColor} />
      <Footer />
    </SecondaryLayout>
  );
}
