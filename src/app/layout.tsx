import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/ui/CustomCursor";
import {
  OrganizationStructuredData,
  WebsiteStructuredData,
} from "./components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Origins Studios - Creative Digital Agency in Cambodia",
    template: "%s | Origins Studios",
  },
  description:
    "Origins Studios is a leading creative digital agency in Cambodia specializing in motion graphics, web development, brand identity, video production, and digital marketing solutions.",
  keywords: [
    "digital agency Cambodia",
    "motion graphics",
    "web development",
    "brand identity",
    "video production",
    "creative studio",
    "digital marketing",
    "animation studio",
    "Phnom Penh",
    "Cambodia creative agency",
  ],
  authors: [{ name: "Origins Studios Team" }],
  creator: "Origins Studios",
  publisher: "Origins Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://originsstudios.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://originsstudios.com",
    title: "Origins Studios - Creative Digital Agency in Cambodia",
    description:
      "Leading creative digital agency in Cambodia specializing in motion graphics, web development, brand identity, video production, and digital marketing solutions.",
    siteName: "Origins Studios",
    images: [
      {
        url: "/origins-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Origins Studios - Creative Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Origins Studios - Creative Digital Agency in Cambodia",
    description:
      "Leading creative digital agency in Cambodia specializing in motion graphics, web development, brand identity, video production, and digital marketing solutions.",
    images: ["/origins-thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "g94slQ64JGtNp5UVjykVcMsyVbA_-j10kQNGK_6HSAA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <OrganizationStructuredData />
        <WebsiteStructuredData />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
