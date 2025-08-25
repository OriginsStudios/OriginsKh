import { Metadata } from "next";
import HiringPageClient from "./HiringPageClient";

export const metadata: Metadata = {
  title: "Careers & Jobs - Join the Origins Studios Team",
  description:
    "Join Origins Studios, Cambodia's leading creative digital agency. We're looking for talented designers, developers, motion artists, and creative professionals to join our innovative team.",
  keywords: [
    "origins studios careers",
    "jobs Cambodia creative agency",
    "motion graphics jobs Cambodia",
    "web developer jobs Cambodia Phnom Penh",
    "graphic designer jobs Cambodia",
    "creative agency hiring Phnom Penh",
    "Phnom Penh creative jobs",
    "digital marketing jobs Cambodia",
    "video editor jobs Cambodia",
    "UI UX designer jobs",
    "creative director jobs",
    "photographer jobs Phnom Penh",
    "social media manager jobs",
    "brand designer jobs",
    "creative internship Cambodia",
    "startup jobs Cambodia",
    "agency jobs Phnom Penh",
  ],
  alternates: {
    canonical: "/hiring",
  },
  openGraph: {
    type: "website",
    title: "Careers & Jobs - Join the Origins Studios Team",
    description:
      "Join Origins Studios, Cambodia's leading creative digital agency. We're looking for talented designers, developers, motion artists, and creative professionals.",
    url: "https://www.originskh.com/hiring",
    images: [
      {
        url: "/origins-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Origins Studios Careers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers & Jobs - Join the Origins Studios Team",
    description:
      "Join Origins Studios, Cambodia's leading creative digital agency. We're looking for talented designers, developers, motion artists, and creative professionals.",
    images: ["/origins-thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HiringPage() {
  return <HiringPageClient />;
}
