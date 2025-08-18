import { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio - Creative Projects & Case Studies | Origins Studios",
  description:
    "Explore Origins Studios' portfolio of creative projects including motion graphics, web development, brand identity, and video production work for clients across Cambodia and beyond.",
  keywords: [
    "origins studios portfolio",
    "creative projects Cambodia Phnom Penh",
    "motion graphics portfolio Cambodia",
    "web development projects showcase",
    "brand identity case studies",
    "video production portfolio Cambodia",
    "digital agency work examples",
    "Cambodia creative work showcase",
    "website design portfolio",
    "branding projects Cambodia",
    "corporate video portfolio",
    "event photography portfolio",
    "graphic design showcase",
    "social media content portfolio",
    "creative campaign case studies",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    type: "website",
    title: "Portfolio - Creative Projects & Case Studies | Origins Studios",
    description:
      "Explore Origins Studios' portfolio of creative projects including motion graphics, web development, brand identity, and video production work.",
    url: "https://www.originskh.com/portfolio",
    images: [
      {
        url: "/origins-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Origins Studios Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Creative Projects & Case Studies | Origins Studios",
    description:
      "Explore Origins Studios' portfolio of creative projects including motion graphics, web development, brand identity, and video production work.",
    images: ["/origins-thumbnail.png"],
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
