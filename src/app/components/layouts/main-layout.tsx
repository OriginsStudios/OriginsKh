
"use client";

import type React from "react";
import { MotionValue } from "framer-motion";
import NavigationBar from "../ui/navigation-bar";

interface MainLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  scrollToSection?: (sectionId: string) => void; // optional if not used here
  navBackground: MotionValue<string>;
  centerType?: "logo" | "cta"; // 👈 New prop
}

export default function MainLayout({
  children,
  activeSection,
  navBackground,
  centerType = "cta", // Default to showing logo
}: MainLayoutProps) {
  return (
    <div className="relative bg-white text-black" >
      <NavigationBar
        activeSection={activeSection}
        navBackground={navBackground.get()}
        centerType={centerType} // Pass centerType to NavigationBar
      />
      <main className="pt-24">{children}</main>
    </div>
  );
}

