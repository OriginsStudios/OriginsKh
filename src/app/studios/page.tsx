import { Metadata } from "next";
import StudiosPageClient from "./StudiosPageClient";

export const metadata: Metadata = {
  title:
    "Our Studios - Creative Services & Digital Solutions | Origins Studios",
  description:
    "Discover Origins Studios' comprehensive creative services including motion graphics, web development, brand identity, video production, and digital marketing solutions tailored for your business.",
  keywords: [
    "origins studios services",
    "creative services Cambodia Phnom Penh",
    "website building agency Cambodia",
    "affordable website building Cambodia",
    "quality website development Cambodia",
    "affordable web design services",
    "quality web development services",
    "budget-friendly website design",
    "professional website builder Cambodia",
    "cheap website design Cambodia",
    "motion graphics services Cambodia",
    "web development services Cambodia",
    "brand identity design services",
    "video production services Cambodia",
    "digital marketing services Phnom Penh",
    "creative studio services Phnom Penh",
    "website design services Cambodia",
    "graphic design services",
    "social media content creation services",
    "event photography services",
    "corporate video production",
    "branding consultation services",
    "digital transformation services",
    "e-commerce development services",
    "SEO web development",
    "creative direction services",
    "affordable quality websites",
    "best website builder Cambodia",
  ],
  alternates: {
    canonical: "/studios",
  },
  openGraph: {
    type: "website",
    title:
      "Our Studios - Creative Services & Digital Solutions | Origins Studios",
    description:
      "Discover Origins Studios' comprehensive creative services including motion graphics, web development, brand identity, video production, and digital marketing solutions.",
    url: "https://www.originskh.com/studios",
    images: [
      {
        url: "/origins-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Origins Studios Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Our Studios - Creative Services & Digital Solutions | Origins Studios",
    description:
      "Discover Origins Studios' comprehensive creative services including motion graphics, web development, brand identity, video production, and digital marketing solutions.",
    images: ["/origins-thumbnail.png"],
  },
};

export default function StudiosPage() {
  return <StudiosPageClient />;
}
