import { Metadata } from "next";
import NewsPageClient from "./NewsPageClient";

export const metadata: Metadata = {
  title: "News & Blog - Latest Updates from Origins Studios",
  description:
    "Stay updated with the latest news, insights, and creative stories from Origins Studios. Read our blog posts about motion graphics, web development, design trends, and industry insights.",
  keywords: [
    "origins studios blog",
    "creative agency news Cambodia",
    "motion graphics blog Cambodia",
    "web development insights Cambodia",
    "design trends Cambodia Phnom Penh",
    "digital marketing blog Cambodia",
    "creative industry news Cambodia",
    "Cambodia creative updates",
    "branding tips Cambodia",
    "website design trends",
    "video production tips",
    "creative inspiration blog",
    "agency case studies",
    "creative process insights",
    "design tutorials Cambodia",
  ],
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    type: "website",
    title: "News & Blog - Latest Updates from Origins Studios",
    description:
      "Stay updated with the latest news, insights, and creative stories from Origins Studios. Read our blog posts about motion graphics, web development, design trends, and industry insights.",
    url: "https://www.originskh.com/news",
    images: [
      {
        url: "/origins-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Origins Studios News & Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Blog - Latest Updates from Origins Studios",
    description:
      "Stay updated with the latest news, insights, and creative stories from Origins Studios. Read our blog posts about motion graphics, web development, design trends, and industry insights.",
    images: ["/origins-thumbnail.png"],
  },
};

export default function NewsPage() {
  return <NewsPageClient />;
}
