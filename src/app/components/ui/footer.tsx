"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, FormEvent } from "react";
import { handleSubscribe } from "../utils/subscriptionUtils";

type SubscriptionStatus = {
  success: boolean;
  message: string;
} | null;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] =
    useState<SubscriptionStatus>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getInTouchLinks = [
    { id: 1, name: "Start a Project", href: "/contact" },
    { id: 2, name: "Join the Team", href: "/hiring" },
    { id: 3, name: "Drop Us a Note", href: "/contact" },
  ];

  const seeMoreLinks = [
    { id: 4, name: "Home", href: "/" },
    { id: 5, name: "Portfolio", href: "/portfolio" },
    { id: 6, name: "Studios", href: "/studios" },
    { id: 7, name: "About", href: "/about" },
    { id: 8, name: "Hiring", href: "/hiring" },
    { id: 9, name: "News", href: "/news" },
    { id: 10, name: "Contact", href: "/contact" },
  ];

  const followAlongLinks = [
    { id: 11, name: "Instagram", href: "https://instagram.com/originskh" },
    { id: 12, name: "Facebook", href: "https://web.facebook.com/originskh" },
    { id: 13, name: "Telegram", href: "https://t.me/originskh" },
  ];

  const onSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    await handleSubscribe(email, setEmail, setSubscriptionStatus, setIsLoading);
  };

  return (
    <footer className="relative z-10 overflow-x-hidden bg-gradient-to-b from-white via-[#f2e6d9] to-[#d9cbbd] px-6 md:px-8 pt-16 pb-10 text-teal-900/80">
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-300 via-teal-300 to-transparent opacity-50" />
        <div className="absolute -top-24 right-16 h-56 w-56 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.5),transparent_45%),radial-gradient(circle_at_85%_60%,rgba(255,170,90,0.3),transparent_50%)]" />
      </div> */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-teal-700">
              Origins Studio Journal
            </p>
            <h2
              className="mt-3 text-2xl md:text-4xl font-normal text-teal-900"
              style={{ fontFamily: "DM Serif Text" }}
            >
              A lifestyle-led creative house for brands that feel alive.
            </h2>
          </div>
          <div className="flex gap-3">
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-full border border-teal-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-teal-900 hover:bg-orange-50 transition-colors"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-orange-400 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:bg-orange-500 transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 md:gap-8 w-full">
          {/* Newsletter */}
          <div className="col-span-12 md:col-span-5 flex flex-row items-start gap-6 mb-8 md:mb-0">
            <div className="flex-none w-[120px]">
              <Link href="/">
                <Image
                  src="/originsStar.svg"
                  alt="Origins Logo"
                  width={150}
                  height={150}
                  className="h-auto w-full max-w-[120px]"
                  priority
                />
              </Link>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg md:text-2xl font-semibold text-teal-900 mb-3 md:mb-4">
                Studio Notes
              </h3>
              <p className="text-sm text-teal-900/60 mb-5">
                Behind-the-scenes, new work drops, and moodboard inspiration —
                occasional and curated.
              </p>
              <form onSubmit={onSubscribe}>
                <div className="rounded-3xl border border-teal-100 bg-white/70 p-4 md:p-5 backdrop-blur">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email for studio updates..."
                    className="w-full bg-white border border-teal-100 px-3 md:px-4 py-2 md:py-3 rounded-full mb-3 md:mb-4 text-sm md:text-base text-teal-900 placeholder:text-teal-900/40 focus:outline-none focus:ring-2 focus:ring-orange-300/60"
                    aria-label="Email address"
                    required
                  />
                  <button
                    type="submit"
                    className="flex items-center px-3 py-1 md:px-6 md:py-3 bg-teal-900 text-white border border-teal-800/60 rounded-full font-semibold hover:bg-teal-800 transition-colors text-sm md:text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Joining..."
                    ) : (
                      <>
                        Join the List
                        <motion.div
                          className="ml-3"
                          animate={{ x: [0, 6, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.div>
                      </>
                    )}
                  </button>
                  {subscriptionStatus && (
                    <p
                      className={`text-sm mt-2 ${
                        subscriptionStatus.success
                          ? "text-green-300"
                          : "text-red-300"
                      }`}
                    >
                      {subscriptionStatus.message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-12 md:col-span-7 grid grid-cols-3 gap-4 md:gap-6 md:pl-10">
            <div className="rounded-3xl border border-teal-100 bg-white/70 p-5">
              <h3 className="text-xs md:text-sm font-semibold text-teal-900 uppercase tracking-[0.35em] mb-3 md:mb-4">
                Connect
              </h3>
              <ul className="space-y-1 md:space-y-2 text-teal-900/60">
                {getInTouchLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-xs md:text-sm hover:text-orange-500 transition-colors block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-teal-100 bg-white/70 p-5">
              <h3 className="text-xs md:text-sm font-semibold text-teal-900 uppercase tracking-[0.35em] mb-3 md:mb-4">
                Explore
              </h3>
              <ul className="space-y-1 md:space-y-2 text-teal-900/60">
                {seeMoreLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-xs md:text-sm hover:text-orange-500 transition-colors block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-teal-100 bg-white/70 p-5">
              <h3 className="text-xs md:text-sm font-semibold text-teal-900 uppercase tracking-[0.35em] mb-3 md:mb-4">
                Social
              </h3>
              <ul className="space-y-1 md:space-y-2 text-teal-900/60">
                {followAlongLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs md:text-sm hover:text-orange-500 transition-colors block py-1"
                      aria-label={`Visit our ${link.name} page`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-300 via-teal-300 to-transparent opacity-50" />
          <div className="absolute -top-24 right-16 h-56 w-56 rounded-full bg-orange-200/40 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-teal-200/40 blur-3xl" />
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.5),transparent_45%),radial-gradient(circle_at_85%_60%,rgba(255,170,90,0.3),transparent_50%)]" />
        </div> */}
        {/* Bottom */}
        <div className="border-t border-teal-200 mt-8 md:mt-16 pt-6 md:pt-8 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs md:text-sm space-y-4 md:space-y-0 w-full">
            <div className="flex flex-row flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/sitemap"
                className="hover:text-orange-500 transition-colors"
              >
                Sitemap
              </Link>
              <Link
                href="/privacypolicy"
                className="hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
            <span className="text-xs md:text-sm">
              © 2025, Origins Studios. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
