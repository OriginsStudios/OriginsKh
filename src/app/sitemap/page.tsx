import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2, Briefcase, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Site Map - Navigate Our Website | Origins Studios",
  description:
    "Explore all pages and sections of the Origins Studios website. Find exactly what you're looking for with our comprehensive site map including portfolio, services, and company information.",
  keywords: [
    "origins studios sitemap",
    "website navigation",
    "site structure",
    "website pages list",
    "origins studios pages",
    "website map",
    "site organization",
    "page directory",
  ],
  alternates: {
    canonical: "/sitemap",
  },
  openGraph: {
    type: "website",
    title: "Site Map - Navigate Our Website | Origins Studios",
    description:
      "Explore all pages and sections of the Origins Studios website. Find exactly what you're looking for with our comprehensive site map.",
    url: "https://www.originskh.com/sitemap",
    images: [
      {
        url: "/origins-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Origins Studios Site Map",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site Map - Navigate Our Website | Origins Studios",
    description:
      "Explore all pages and sections of the Origins Studios website. Find exactly what you're looking for with our comprehensive site map.",
    images: ["/origins-thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SiteMapPage() {
  const sitemap = [
    {
      title: "Company",
      icon: Building2,
      description: "Learn about our story and team",
      links: [
        {
          name: "About Us",
          path: "/about",
          description: "Our mission and values",
        },
        {
          name: "Our Team",
          path: "/about#team",
          description: "Meet the people behind our work",
        },
        {
          name: "Timeline",
          path: "/about#origins",
          description: "Our journey and milestones",
        },
        {
          name: "Contact",
          path: "/contact",
          description: "Get in touch with us",
        },
      ],
    },
    {
      title: "Work",
      icon: Briefcase,
      description: "Explore our portfolio and studios",
      links: [
        {
          name: "Portfolio",
          path: "/portfolio",
          description: "Our latest projects and case studies",
        },
        {
          name: "Studios",
          path: "/studios",
          description: "What we offer to our clients",
        },
      ],
    },
    {
      title: "Resources",
      icon: BookOpen,
      description: "Helpful tools and information",
      links: [
        {
          name: "Site Map",
          path: "/sitemap",
          description: "Navigate our entire website",
        },
        {
          name: "Privacy Policy",
          path: "/privacypolicy",
          description:
            "Learn how we collect, use, and protect your personal information.",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
              Site Map
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Navigate through all sections of our website. Find exactly what
              you&apos;re looking for with our comprehensive site overview.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sitemap.map((section) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.title}
                className="group relative bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-slate-200 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-1">
                        {section.title}
                      </h2>
                      <p className="text-sm text-slate-500">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="space-y-4">
                    {section.links.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        className="group/link block p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all duration-200"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-slate-900 group-hover/link:text-slate-700">
                                {link.name}
                              </h3>
                              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/link:text-slate-600 transition-colors duration-200" />
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">
                              {link.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Section Footer */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <p className="text-xs text-slate-400 text-center">
                      {section.links.length}{" "}
                      {section.links.length === 1 ? "page" : "pages"} in this
                      section
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full text-sm text-slate-600">
            <span>Need help finding something?</span>
            <Link
              href="/contact"
              className="font-semibold text-slate-900 hover:text-slate-700 transition-colors duration-200"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
