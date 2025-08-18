import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/ui/CustomCursor";
import { Analytics } from "@vercel/analytics/next";
import {
  OrganizationStructuredData,
  WebsiteStructuredData,
} from "./components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Origins Studios - Creative Digital Agency in Cambodia",
    template: "%s | Origins Studios",
  },
  description:
    "Origins Studios is Cambodia's leading website building agency offering affordable, high-quality web development, creative design, motion graphics, brand identity, video production, and digital marketing solutions in Phnom Penh.",
  keywords: [
    // Core Digital Services
    "digital agency Cambodia",
    "creative agency Phnom Penh",
    "web development Cambodia",
    "website design Phnom Penh",
    "website building agency Cambodia",
    "affordable website building Cambodia",
    "quality website development Cambodia",
    "affordable web design Phnom Penh",
    "quality web development services",
    "custom website building agency",
    "web design UX UI services Cambodia",
    "responsive website development",
    "creative website design studio",
    "professional web development agency",
    "e-commerce website solutions",
    "WordPress Shopify Webflow development",
    "mobile-friendly website design",
    "SEO-optimized website development",
    "business website design hosting",
    "cheap website design Cambodia",
    "budget-friendly web development",
    "high-quality affordable websites",
    "professional website builder Cambodia",

    // Creative & Branding
    "creative studio services Cambodia",
    "branding identity design Phnom Penh",
    "logo visual identity creation",
    "graphic design agency Cambodia",
    "digital print design services",
    "creative direction art styling",
    "social media content creation",
    "marketing collateral design",
    "brand storytelling agency",
    "innovative creative agency",

    // Production & Content
    "video production company Cambodia",
    "corporate video commercials",
    "social media video content",
    "event photography videography Phnom Penh",
    "motion graphics animation services",
    "post-production video editing",
    "cinematic storytelling agency",
    "digital content production",

    // Concept & Experience
    "experiential marketing concepts",
    "pop-up store design branding",
    "lifestyle product curation",
    "retail spatial branding",
    "event concept development",
    "interactive brand experiences",
    "creative entrepreneurship projects",

    // Space Rental
    "event space rental Phnom Penh",
    "small seminar venue 30 pax",
    "workshop meeting room rental",
    "photography studio space",
    "studio rental lighting backdrops",
    "affordable event venues Cambodia",
    "multi-purpose creative space",
    "minimalist event venue",
    "content creation studio rental",

    // Long-tail SEO
    "full-service creative production agency",
    "one-stop branding web design agency",
    "creative marketing solutions businesses",
    "website branding packages",
    "best agency startups entrepreneurs",
    "custom creative projects brands",
    "digital transformation businesses",
    "creative partner bold brands",

    // Location-specific
    "Phnom Penh creative agency",
    "Cambodia digital marketing",
    "Southeast Asia creative studio",
  ],
  authors: [{ name: "Origins Studios Team" }],
  creator: "Origins Studios",
  publisher: "Origins Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.originskh.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.originskh.com",
    title: "Origins Studios - Affordable Website Building Agency in Cambodia",
    description:
      "Cambodia's leading website building agency offering affordable, high-quality web development, creative design, motion graphics, brand identity, video production, and digital marketing solutions in Phnom Penh.",
    siteName: "Origins Studios",
    images: [
      {
        url: "/origins-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Origins Studios - Creative Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Origins Studios - Affordable Website Building Agency in Cambodia",
    description:
      "Cambodia's leading website building agency offering affordable, high-quality web development, creative design, motion graphics, brand identity, video production, and digital marketing solutions in Phnom Penh.",
    images: ["/origins-thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "g94slQ64JGtNp5UVjykVcMsyVbA_-j10kQNGK_6HSAA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <OrganizationStructuredData />
        <WebsiteStructuredData />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
