"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import FunnyPopup from "./funny-popup";
import AnimatedBackground from "./animated-background";

interface NavigationBarProps {
  activeSection: string;
  navBackground?: string;
  centerType?: "logo" | "cta"; // New prop
}

export default function NavigationBar({
  activeSection,
  navBackground = "transparent",
  centerType = "logo", // Default to showing logo
}: NavigationBarProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFunnyPopup, setShowFunnyPopup] = useState(false);
  const pathname = usePathname();

  // Scroll tracking logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setScrollPosition(currentScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isAtTop = scrollPosition < 50;
  const isVisible = isAtTop || scrollDirection !== "down";
  const showLogo = !isAtTop && isVisible;

  const navLinks = [
    { id: "portfolio", href: "/portfolio", label: "PORTFOLIO" },
    { id: "studios", href: "/studios", label: "STUDIOS" },
    { id: "about", href: "/about", label: "ABOUT" },
    { id: "hiring", href: "/hiring", label: "HIRING" },
    { id: "news", href: "/news", label: "NEWS" },
    { id: "contact", href: "/contact", label: "CONTACT" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -80, opacity: isVisible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 40 }}
      style={{ backgroundColor: navBackground }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-6 pointer-events-none"
    >
      <div className="pointer-events-auto w-full">
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-col items-center">
          <div className="w-full flex justify-between items-center">
            {/* Left Nav */}
            <div className="flex space-x-2 group">
              <AnimatedBackground
                className="rounded-full bg-orange-400"
                hoverClassName="bg-orange-400"
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                }}
                enableHover
                defaultValue={
                  navLinks
                    .slice(0, 3)
                    .find(
                      (link) =>
                        activeSection === link.id || pathname === link.href
                    )?.id
                }
              >
                {navLinks.slice(0, 3).map((link) => {
                  const isActive =
                    activeSection === link.id || pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      data-id={link.id}
                      className={`px-4 py-2 transition-colors duration-200 rounded-full text-xs font-medium uppercase tracking-wider relative z-10 bg-gray-200 ${
                        isActive
                          ? "text-white group-hover:text-black hover:!text-white"
                          : "text-black hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </AnimatedBackground>
            </div>

            {/* Center Logo or CTA */}
            <div className="flex items-center justify-center">
              {centerType === "logo" || showLogo ? (
                <Link href="/">
                  <Image
                    src="/originlogo.png"
                    alt="Origins Logo"
                    width={180}
                    height={180}
                    className="h-auto max-w-[120px] sm:max-w-[150px]"
                    priority
                    rel="preload"
                  />
                </Link>
              ) : (
                <div className="sm:text-xs font-medium uppercase tracking-wider hidden lg:inline">
                  LOOKING TO REVIVE YOUR DREAMS?{" "}
                  <button
                    onClick={() => setShowFunnyPopup(true)}
                    className="inline-flex items-center ml-2 text-black hover:text-orange-600 transition-colors"
                  >
                    CALL US
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Nav */}
            <div className="flex space-x-2 group">
              <AnimatedBackground
                className="rounded-full bg-orange-400"
                hoverClassName="bg-orange-400"
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                }}
                enableHover
                defaultValue={
                  navLinks
                    .slice(3)
                    .find(
                      (link) =>
                        activeSection === link.id || pathname === link.href
                    )?.id
                }
              >
                {navLinks.slice(3).map((link) => {
                  const isActive =
                    activeSection === link.id || pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      data-id={link.id}
                      className={`px-4 py-2 transition-colors duration-200 rounded-full text-xs font-medium uppercase tracking-wider relative z-10 bg-gray-200 ${
                        isActive
                          ? "text-white group-hover:text-black hover:!text-white"
                          : "text-black hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </AnimatedBackground>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex justify-between items-center">
          <Link href="/">
            <Image
              src="/originlogo.png"
              alt="Origins Logo"
              width={120}
              height={120}
              className="h-auto max-w-[90px]"
              priority
              rel="preload"
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        <FunnyPopup
          isOpen={showFunnyPopup}
          onClose={() => setShowFunnyPopup(false)}
        />

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 pb-6 border-b border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex justify-between items-center px-4 py-3 text-lg font-medium uppercase tracking-wider border-b border-gray-100 hover:bg-gray-200"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
