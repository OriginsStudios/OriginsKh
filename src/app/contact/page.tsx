import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us - Get In Touch with Origins Studios",
  description:
    "Ready to start your next creative project? Contact Origins Studios today. We're here to help with motion graphics, web development, branding, and digital marketing solutions in Cambodia.",
  keywords: [
    "contact origins studios",
    "creative agency contact Cambodia",
    "digital agency Cambodia contact",
    "website building quote Cambodia",
    "affordable website quote",
    "quality website development quote",
    "cheap website design quote",
    "budget website building inquiry",
    "professional website quote Cambodia",
    "motion graphics inquiry Phnom Penh",
    "web development quote Cambodia",
    "brand design consultation",
    "Phnom Penh creative agency contact",
    "website design quote",
    "video production inquiry",
    "branding services quote",
    "creative project consultation",
    "digital marketing consultation",
    "event space rental inquiry",
    "studio rental contact",
    "creative partnership inquiry",
    "affordable web design consultation",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    title: "Contact Us - Get In Touch with Origins Studios",
    description:
      "Ready to start your next creative project? Contact Origins Studios today for motion graphics, web development, branding, and digital marketing solutions.",
    url: "https://www.originskh.com/contact",
    images: [
      {
        url: "/origins-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Contact Origins Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get In Touch with Origins Studios",
    description:
      "Ready to start your next creative project? Contact Origins Studios today for motion graphics, web development, branding, and digital marketing solutions.",
    images: ["/origins-thumbnail.png"],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
