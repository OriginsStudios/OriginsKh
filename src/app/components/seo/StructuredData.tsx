import Script from "next/script";

interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  description: string;
  url: string;
  logo: string;
  sameAs: string[];
  address: {
    "@type": "PostalAddress";
    streetAddress?: string;
    addressLocality: string;
    addressRegion?: string;
    addressCountry: string;
  };
  contactPoint: {
    "@type": "ContactPoint";
    contactType: string;
    email?: string;
    url: string;
  };
}

interface ArticleSchema {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  image: string;
  author: {
    "@type": "Person";
    name: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
    logo: {
      "@type": "ImageObject";
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
}

interface WebsiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  potentialAction: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

interface CreativeWorkSchema {
  "@context": "https://schema.org";
  "@type": "CreativeWork";
  name: string;
  description: string;
  image: string;
  creator: {
    "@type": "Organization";
    name: string;
  };
  dateCreated: string;
  genre: string;
}

export function OrganizationStructuredData() {
  const organizationSchema: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Origins Studios",
    description:
      "Leading creative digital agency in Cambodia specializing in motion graphics, web development, brand identity, video production, and digital marketing solutions.",
    url: "https://www.originskh.com",
    logo: "https://www.originskh.com/origins-thumbnail.png",
    sameAs: [
      "https://www.instagram.com/originskh/",
      "https://web.facebook.com/originskh",
      "https://t.me/originskh",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Phnom Penh",
      addressCountry: "Cambodia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://www.originskh.com/contact",
    },
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  );
}

export function WebsiteStructuredData() {
  const websiteSchema: WebsiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Origins Studios",
    url: "https://www.originskh.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.originskh.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteSchema),
      }}
    />
  );
}

interface ArticleStructuredDataProps {
  title: string;
  description: string;
  image: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  url: string;
}

export function ArticleStructuredData({
  title,
  description,
  image,
  author,
  publishedDate,
  modifiedDate,
  url,
}: ArticleStructuredDataProps) {
  const articleSchema: ArticleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Origins Studios",
      logo: {
        "@type": "ImageObject",
        url: "https://www.originskh.com/origins-thumbnail.png",
      },
    },
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema),
      }}
    />
  );
}

interface CreativeWorkStructuredDataProps {
  name: string;
  description: string;
  image: string;
  dateCreated: string;
  genre: string;
}

export function CreativeWorkStructuredData({
  name,
  description,
  image,
  dateCreated,
  genre,
}: CreativeWorkStructuredDataProps) {
  const creativeWorkSchema: CreativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: name,
    description: description,
    image: image,
    creator: {
      "@type": "Organization",
      name: "Origins Studios",
    },
    dateCreated: dateCreated,
    genre: genre,
  };

  return (
    <Script
      id="creative-work-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(creativeWorkSchema),
      }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  faqs: FAQItem[];
}

export function FAQStructuredData({ faqs }: FAQStructuredDataProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  );
}

interface ServiceStructuredDataProps {
  services: Array<{
    name: string;
    description: string;
    url?: string;
  }>;
}

export function ServiceStructuredData({
  services,
}: ServiceStructuredDataProps) {
  const serviceSchemas = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Origins Studios",
      url: "https://www.originskh.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Cambodia",
    },
    url: service.url || "https://www.originskh.com/studios",
  }));

  return (
    <>
      {serviceSchemas.map((schema, index) => (
        <Script
          key={index}
          id={`service-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
