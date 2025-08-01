"use client";
import Footer from "../components/ui/footer";
import { useNavigation } from "../components/hooks/use-navigation";
import IntroAboutSection from "../components/sections/about/intro-about-section";
import OurOValuesSection from "../components/sections/about/our-o-value-section";
import OurOriginsSection from "../components/sections/about/our-origins-section";
import TeamSection from "../components/sections/about/our-management-team";
import ServiceSection from "../components/sections/service-seaction";
import SecondaryLayout from "../components/layouts/secondary-layout";
import OurManagementTeam from "../components/sections/about/our-team";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const { activeSection, scrollToSection } = useNavigation();
  const [navColor, setNavColor] = useState<string>("rgb(255, 255, 255)");
  const [pageBackground, setPageBackground] = useState<string>("rgb(255, 255, 255)");
  const [textColor, setTextColor] = useState<string>("#000000");
  const [currentLogo, setCurrentLogo] = useState<string>("/originlogo.png");

  // Section color mapping
  const sectionColors = {
    intro:      { nav: "#f0faeb", bg: "#f0faeb", text: "#000000", logo: "/originlogo.png" },
    values:     { nav: "#f0faeb", bg: "#f0faeb", text: "#000000", logo: "/originlogo.png" },
    service:    { nav: "#f0faeb", bg: "#f0faeb", text: "#000000", logo: "/originlogo.png" },
    origins:    { nav: "#1C1B17", bg: "#1C1B17", text: "#FFFFFF", logo: "/originlogo2.png" },
    team:       { nav: "#E8E8E8", bg: "#E8E8E8", text: "#000000", logo: "/originlogo.png" },
    studioTeam: { nav: "#E8E8E8", bg: "#E8E8E8", text: "#000000", logo: "/originlogo.png" }
  };
  

  // Scroll-based color detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.3; // 30% of viewport height

      // Get all sections and their positions
      const sections = Object.keys(sectionColors).map(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const top = rect.top + scrollY;
          const bottom = top + element.offsetHeight;
          return { id: sectionId, top, bottom, element };
        }
        return null;
      }).filter(Boolean);

      // Find the current section based on scroll position
      let currentSection = 'intro'; // default
      
      for (const section of sections) {
        if (section) {
          const sectionTop = section.top;
          const sectionBottom = section.bottom;
          
          // Check if scroll position is within this section
          if (scrollY + threshold >= sectionTop && scrollY + threshold < sectionBottom) {
            currentSection = section.id;
            break;
          }
        }
      }

      // Update colors based on current section
      const colors = sectionColors[currentSection as keyof typeof sectionColors];
      if (colors) {
        setNavColor(colors.nav);
        setPageBackground(colors.bg);
        setTextColor(colors.text);
        setCurrentLogo(colors.logo);
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call to set colors for current position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionColors]);

  return (
    <SecondaryLayout
      navColor={navColor}
      pageBackground={pageBackground}
      textColor={textColor}
      activeSection={activeSection}
      scrollToSection={scrollToSection}
      logo={currentLogo}
    >
      <IntroAboutSection id="intro" />
      <OurOValuesSection id="values" />
      <ServiceSection id="service" textColor={textColor}/>
      <OurOriginsSection id="origins" textColor={textColor} />
      <TeamSection id="team" textColor={textColor} />
      <OurManagementTeam id="studioTeam" textColor={textColor} />
      <Footer />
    </SecondaryLayout>
  );
}
