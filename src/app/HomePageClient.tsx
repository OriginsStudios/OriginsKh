"use client";
import { useScroll, useTransform } from "framer-motion";
import MainLayout from "./components/layouts/main-layout";
import Footer from "./components/ui/footer";
import IntroHomeSection from "./components/sections/home/intro-home-section";
import { useNavigation } from "./components/hooks/use-navigation";
import OurWorkSection from "./components/sections/home/our-work-section";
import OurStudiosSection from "./components/sections/home/our-studios-section";
import OurClientsSection from "./components/sections/home/our-clients-section";
import {
  ServiceStructuredData,
  FAQStructuredData,
} from "./components/seo/StructuredData";

export default function HomePageClient() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]
  );

  const services = [
    {
      name: "Motion Graphics & Animation",
      description:
        "Professional motion graphics and animation services for brands, explainer videos, and marketing content.",
      url: "https://www.originskh.com/studios#motion-graphics",
    },
    {
      name: "Web Development",
      description:
        "Custom website development, web applications, and e-commerce solutions using modern technologies.",
      url: "https://www.originskh.com/studios#web-development",
    },
    {
      name: "Brand Identity Design",
      description:
        "Complete brand identity design including logos, visual guidelines, and brand strategy.",
      url: "https://www.originskh.com/studios#brand-identity",
    },
    {
      name: "Video Production",
      description:
        "Professional video production services from concept to final delivery including filming and post-production.",
      url: "https://www.originskh.com/studios#video-production",
    },
    {
      name: "Digital Marketing",
      description:
        "Comprehensive digital marketing solutions including social media management, content creation, and campaign strategy.",
      url: "https://www.originskh.com/studios#digital-marketing",
    },
  ];

  const faqs = [
    {
      question: "What services does Origins Studios offer?",
      answer:
        "Origins Studios offers comprehensive creative services including motion graphics, web development, brand identity design, video production, and digital marketing solutions.",
    },
    {
      question: "Where is Origins Studios located?",
      answer:
        "Origins Studios is located in Phnom Penh, Cambodia, and serves clients across Cambodia and internationally.",
    },
    {
      question: "How can I start a project with Origins Studios?",
      answer:
        "You can start a project by contacting us through our website contact form, email, or by visiting our studio in Phnom Penh. We'll discuss your requirements and provide a custom proposal.",
    },
    {
      question:
        "What makes Origins Studios different from other creative agencies?",
      answer:
        "Origins Studios combines local Cambodian market knowledge with international creative standards, offering personalized service, innovative solutions, and a deep understanding of both traditional and digital media.",
    },
  ];

  return (
    <>
      <ServiceStructuredData services={services} />
      <FAQStructuredData faqs={faqs} />
      <MainLayout
        navBackground={navBackground}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      >
        <IntroHomeSection />
        <div className="bg-[#fff7f1]">
          <OurWorkSection />
          <OurStudiosSection />
          <OurClientsSection />
        </div>
        {/* <RelatedReading/> */}
        <Footer />
      </MainLayout>
    </>
  );
}
