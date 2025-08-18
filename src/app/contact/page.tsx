import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us - Get In Touch with Origins Studios",
  description:
    "Ready to start your next creative project? Contact Origins Studios today. We're here to help with motion graphics, web development, branding, and digital marketing solutions in Cambodia.",
  keywords: [
    "contact origins studios",
    "creative agency contact",
    "digital agency cambodia contact",
    "motion graphics inquiry",
    "web development quote",
    "brand design consultation",
    "phnom penh creative agency",
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
