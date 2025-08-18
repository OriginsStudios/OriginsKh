import { Metadata } from "next";
import HiringPageClient from "./HiringPageClient";

export const metadata: Metadata = {
  title: "Careers & Jobs - Join the Origins Studios Team",
  description:
    "Join Origins Studios, Cambodia's leading creative digital agency. We're looking for talented designers, developers, motion artists, and creative professionals to join our innovative team.",
  keywords: [
    "origins studios careers",
    "jobs cambodia creative agency",
    "motion graphics jobs",
    "web developer jobs cambodia",
    "graphic designer jobs",
    "creative agency hiring",
    "phnom penh jobs creative",
    "digital marketing jobs cambodia",
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
};

export default function HiringPage() {
  return <HiringPageClient />;
}
