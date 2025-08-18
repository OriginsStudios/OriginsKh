import { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio - Creative Projects & Case Studies | Origins Studios",
  description:
    "Explore Origins Studios' portfolio of creative projects including motion graphics, web development, brand identity, and video production work for clients across Cambodia and beyond.",
  keywords: [
    "origins studios portfolio",
    "creative projects cambodia",
    "motion graphics portfolio",
    "web development projects",
    "brand identity case studies",
    "video production portfolio",
    "digital agency work",
    "cambodia creative work",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    type: "website",
    title: "Portfolio - Creative Projects & Case Studies | Origins Studios",
    description:
      "Explore Origins Studios' portfolio of creative projects including motion graphics, web development, brand identity, and video production work.",
    url: "https://originsstudios.com/portfolio",
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
