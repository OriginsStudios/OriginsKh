import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us - Origins Studios Creative Team & Company Story",
  description:
    "Learn about Origins Studios, Cambodia's premier creative digital agency. Meet our talented team of designers, developers, and motion artists who bring innovative ideas to life.",
  keywords: [
    "about origins studios",
    "creative team cambodia",
    "digital agency team",
    "motion graphics artists",
    "web developers cambodia",
    "creative professionals",
    "company story",
    "cambodia creative agency",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    title: "About Us - Origins Studios Creative Team & Company Story",
    description:
      "Learn about Origins Studios, Cambodia's premier creative digital agency. Meet our talented team of designers, developers, and motion artists.",
    url: "https://www.originskh.com/about",
    images: [
      {
        url: "/origins-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Origins Studios Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Origins Studios Creative Team & Company Story",
    description:
      "Learn about Origins Studios, Cambodia's premier creative digital agency. Meet our talented team of designers, developers, and motion artists.",
    images: ["/origins-thumbnail.png"],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
