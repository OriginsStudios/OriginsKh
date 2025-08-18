import { Metadata } from "next";
import StudiosPageClient from "./StudiosPageClient";

export const metadata: Metadata = {
  title:
    "Our Studios - Creative Services & Digital Solutions | Origins Studios",
  description:
    "Discover Origins Studios' comprehensive creative services including motion graphics, web development, brand identity, video production, and digital marketing solutions tailored for your business.",
  keywords: [
    "origins studios services",
    "creative services cambodia",
    "motion graphics services",
    "web development cambodia",
    "brand identity design",
    "video production services",
    "digital marketing cambodia",
    "creative studio phnom penh",
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
    url: "https://originsstudios.com/studios",
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
