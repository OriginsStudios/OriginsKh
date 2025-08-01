"use client";

import type React from "react";
import NavigationBar from "../ui/navigation-bar";

interface SecondaryLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  scrollToSection?: (sectionId: string) => void; // optional if not used here
  centerType?: "logo" | "cta"; // 👈 New prop
  pageBackground: string;
  textColor?: string;
  navColor?: string;
  logo?: string;
}

export default function SecondaryLayout({
  children,
  activeSection,
  centerType = "logo", // Default to showing logo
  pageBackground,
  textColor = "#000000",
  navColor = "transparent",
  logo = "/originlogo.png",
}: SecondaryLayoutProps) {
  return (
    <div
      className="relative"
      style={{
        backgroundColor: pageBackground,
        color: textColor,
        transition:
          "background-color 700ms ease-in-out, color 700ms ease-in-out",
      }}
    >
      <NavigationBar
        activeSection={activeSection}
        navBackground={navColor}
        centerType={centerType} // Pass centerType to NavigationBar
        textColor={textColor}
        logo={logo}
      />
      <main className="pt-24">{children}</main>
    </div>
  );
}
