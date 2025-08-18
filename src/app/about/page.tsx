import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us - Origins Studios Creative Team & Company Story",
  description:
    "Learn about Origins Studios, Cambodia's premier creative digital agency. Meet our talented team of designers, developers, and motion artists who bring innovative ideas to life.",
  keywords: [
    "about origins studios",
    "creative team Cambodia Phnom Penh",
    "digital agency team",
    "motion graphics artists Cambodia",
    "web developers Phnom Penh",
    "creative professionals Cambodia",
    "company story creative agency",
    "Cambodia creative agency team",
    "experienced creative professionals",
    "award-winning creative team",
    "innovative design team Cambodia",
    "full-service creative agency team",
    "branding specialists Cambodia",
    "video production team Phnom Penh",
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
