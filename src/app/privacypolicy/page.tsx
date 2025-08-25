import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Eye,
  Lock,
  Users,
  FileText,
  Mail,
  Calendar,
  ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - How We Protect Your Data | Origins Studios",
  description:
    "Learn how Origins Studios collects, uses, and protects your personal information. Our comprehensive privacy policy explains our data practices and your rights regarding your information.",
  keywords: [
    "privacy policy origins studios",
    "data protection Cambodia",
    "personal information security",
    "website privacy policy",
    "data collection practices",
    "user privacy rights",
    "information security policy",
    "digital privacy Cambodia",
  ],
  alternates: {
    canonical: "/privacypolicy",
  },
  openGraph: {
    type: "website",
    title: "Privacy Policy - How We Protect Your Data | Origins Studios",
    description:
      "Learn how Origins Studios collects, uses, and protects your personal information. Our comprehensive privacy policy explains our data practices and your rights.",
    url: "https://www.originskh.com/privacypolicy",
    images: [
      {
        url: "/origins-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Origins Studios Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - How We Protect Your Data | Origins Studios",
    description:
      "Learn how Origins Studios collects, uses, and protects your personal information. Our comprehensive privacy policy explains our data practices and your rights.",
    images: ["/origins-thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "December 15, 2024";

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: FileText,
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you create an account, make a purchase, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and billing information.",
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect certain information about your use of our services, including your IP address, browser type, operating system, referring URLs, and pages viewed.",
        },
        {
          subtitle: "Cookies and Tracking",
          text: "We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and deliver personalized content and advertisements.",
        },
      ],
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: Users,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve our services, process transactions, and communicate with you about your account or our services.",
        },
        {
          subtitle: "Personalization",
          text: "We may use your information to personalize your experience, recommend content, and deliver targeted advertisements that may be of interest to you.",
        },
        {
          subtitle: "Communication",
          text: "We use your contact information to send you important updates, newsletters, marketing communications, and respond to your inquiries.",
        },
      ],
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      icon: Eye,
      content: [
        {
          subtitle: "Third-Party Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or serving our users.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information when required by law, to protect our rights, or to comply with legal proceedings, court orders, or government requests.",
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.",
        },
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        },
        {
          subtitle: "Data Encryption",
          text: "We use industry-standard encryption protocols to protect sensitive information during transmission and storage.",
        },
        {
          subtitle: "Access Controls",
          text: "We limit access to your personal information to employees and contractors who need it to perform their job functions and are bound by confidentiality obligations.",
        },
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights and Choices",
      icon: Shield,
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or correct your personal information. You can do this through your account settings or by contacting us directly.",
        },
        {
          subtitle: "Data Portability",
          text: "You have the right to request a copy of your personal information in a structured, machine-readable format.",
        },
        {
          subtitle: "Deletion",
          text: "You may request that we delete your personal information, subject to certain legal and contractual obligations.",
        },
        {
          subtitle: "Marketing Communications",
          text: "You can opt out of receiving marketing communications from us at any time by following the unsubscribe instructions in our emails or contacting us directly.",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-24">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100">
                <Shield className="w-8 h-8 text-slate-700" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-2">
                  Privacy Policy
                </h1>
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Last updated: {lastUpdated}</span>
                </div>
              </div>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              We are committed to protecting your privacy and ensuring the
              security of your personal information. This policy explains how we
              collect, use, and safeguard your data when you use our services.
            </p>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-12 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all duration-200"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-slate-200 transition-colors duration-200">
                    <IconComponent className="w-4 h-4 text-slate-700" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-900 group-hover:text-slate-700">
                      {index + 1}. {section.title}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <section key={section.id} id={section.id} className="scroll-mt-8">
                <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-12 shadow-sm">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100">
                      <IconComponent className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900">
                        {index + 1}. {section.title}
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {section.content.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="border-l-4 border-slate-100 pl-6"
                      >
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">
                          {item.subtitle}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">
                Questions About This Policy?
              </h2>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              If you have any questions about this Privacy Policy, our data
              practices, or your rights regarding your personal information,
              please don&apos;t hesitate to contact us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link
                href="mailto:info@originskh.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                info@originskh.com
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            This privacy policy is effective as of {lastUpdated} and will remain
            in effect except with respect to any changes in its provisions in
            the future, which will be in effect immediately after being posted
            on this page.
          </p>
        </div>
      </div>
    </main>
  );
}
