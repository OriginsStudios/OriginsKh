"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";
import MainLayout from "../components/layouts/main-layout";
import Footer from "../components/ui/footer";
import InstagramNewsSection from "../components/sections/news/instagram-news-section";
import BlogListSection from "../components/sections/blog/BlogListSection";

export default function NewsPage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]
  );

  return (
    <MainLayout
      navBackground={navBackground}
      activeSection={activeSection}
      scrollToSection={scrollToSection}
    >
      <BlogListSection />
      <InstagramNewsSection />
      <Footer />
    </MainLayout>
  );
}
