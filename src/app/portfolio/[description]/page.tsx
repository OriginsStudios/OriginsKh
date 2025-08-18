import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allImages, slugify } from "../../../data/portfolioData";
import PortfolioDetailClient from "./PortfolioDetailClient";
import { CreativeWorkStructuredData } from "../../components/seo/StructuredData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ description: string }>;
}): Promise<Metadata> {
  const { description } = await params;
  const work = allImages.find(
    (work) => slugify(work.description) === description
  );

  if (!work) {
    return {
      title: "Portfolio Item Not Found",
      description: "The requested portfolio item could not be found.",
    };
  }

  const baseUrl = "https://www.originskh.com";

  return {
    title: `${work.description} | Origins Studios Portfolio`,
    description: work.longDescription.substring(0, 160) + "...",
    keywords: [
      work.hashtags.replace("#", "").toLowerCase(),
      "origins studios",
      "creative agency cambodia",
      "portfolio",
      work.description.toLowerCase(),
      ...work.caption.toLowerCase().split(" "),
    ],
    alternates: {
      canonical: `/portfolio/${description}`,
    },
    openGraph: {
      type: "article",
      title: `${work.description} | Origins Studios Portfolio`,
      description: work.longDescription.substring(0, 200) + "...",
      url: `${baseUrl}/portfolio/${description}`,
      siteName: "Origins Studios",
      images: work.images.map((img) => ({
        url: img.src,
        width: img.width,
        height: img.height,
        alt: work.description,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: `${work.description} | Origins Studios Portfolio`,
      description: work.longDescription.substring(0, 200) + "...",
      images: [work.images[0]?.src],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  return allImages.map((work) => ({
    description: slugify(work.description),
  }));
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ description: string }>;
}) {
  const { description } = await params;
  const work = allImages.find(
    (work) => slugify(work.description) === description
  );

  if (!work) {
    notFound();
  }

  return (
    <>
      <CreativeWorkStructuredData
        name={work.description}
        description={work.longDescription}
        image={work.images[0]?.src || ""}
        dateCreated={new Date().toISOString()}
        genre={work.hashtags.replace("#", "")}
      />
      <PortfolioDetailClient />
    </>
  );
}
