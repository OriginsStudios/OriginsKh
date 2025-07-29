
"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const FindUrJobSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navItems = [
    { label: "ALL", href: "" },
    { label: "DESIGN", href: "" },
    { label: "STRATEGY", href: "" },
    { label: "TECHNOLOGY", href: "" },
    { label: "PRODUCTION", href: "" },
    { label: "WRITING", href: "" },
    { label: "OPERATIONS", href: "" },
  ];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section id="findUrJob" className="bg-transparent relative overflow-hidden w-full m-0 px-8 py-32">
      {/* Full-width container with no left/right padding */}
      <div className="w-full mx-auto">
        {/* Title Section */}
        <div className="text-center mb-4">
          <h2
            className="text-4xl md:text-7xl font-serif mb-6 text-black"
            style={{ fontFamily: 'DM Serif Text' }}
          >
            Find Your Dream Job
          </h2>
        </div>

        <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 mb-8"></div>

          <div className="flex flex-wrap items-center gap-2 pb-32">
            <span className="px-4 py-2 rounded-full text-sm font-medium text-black">POSITION:</span>
            
            {/* Show nav items based on screen size */}
            {navItems.map((item) => {
              const active = activeCategory === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => handleCategoryChange(item.label)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    active
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black hover:bg-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

        </div>

        {/* Message Display */}
        <div className="bg-gray-200 border border-gray-300 rounded-lg p-6 text-center shadow-sm">
          <p className="text-lg text-black">
            {"There are no opening currently. Please check back again!"}
          </p>
        </div>

        {/* Text section with px-8 */}
      {/* <div className="text-left mb-4 px-8 pt-32 pb-24">
        <h2
          className="text-3xl md:text-5xl font-normal mb-6 text-black"
          style={{ fontFamily: 'DM Serif Text' }}
        >Equity, Inclusion & Opportunity at ORIGINS
        </h2>
            <div className="p-4 md:p-8 bg-light-green rounded-lg">
                <h3 className="text-l md:text-2xl text-black mb-8 font-light leading-relaxed">
                  At ORIGINS, we believe creativity thrives in a culture of inclusion, respect, and equity. We&apos;re committed to creating a welcoming environment where every team member feels seen, heard, and empowered to bring their whole self to the work.
                  {" "}We do not discriminate on the basis of race, color, religion, gender identity or expression, age, national origin, disability, marital status, sexual orientation, military status, or any other aspect of identity. Diversity doesn&apos;t just something we support—it&apos;s something we actively seek out and celebrate.
                  To ensure pay transparency and fairness, we follow clearly defined pay bands that align compensation with performance, growth, and impact across our teams. We&apos;re dedicated to fair opportunities at every level—from your first day to your next big promotion.
                  <br /><br />
                  As an equal opportunity employer, ORIGINS values the unique experiences and perspectives that each individual brings to our studio.
                </h3>
            </div>
      </div> */}



        {/* Hiring Journey Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start pt-32">
          {/* First Image - Left Side */}
          <div className="space-y-12">
            <div className="lg:sticky lg:top-8">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/ORS_WEB-HIRING1.jpg"
                  alt="A person working at a desk"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  rel="preload"
                />
              </div>
            </div>

            {/* Call to Action Section - Under First Image */}
            <div className="w-full">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                <div className="w-full text-left">
                  <h3 className="text-2xl md:text-3xl text-black mb-8">
                    To craft exceptional brand experiences, we embrace a multidisciplinary approach—blending strategy, creativity, and technology—while working hand-in-hand with our clients every step of the way.
                  </h3>
                  <Link href="/studios">
                    <button className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-400 transition-colors text-sm md:text-base">
                      View Our Services 
                      <motion.div
                      className="ml-3"
                      animate={{ x: [0, 6, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    >
                      →
                    </motion.div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text and Second Image */}
          <div className="space-y-12">
            {/* Text Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-normal leading-tight">
                Inside the Hiring Journey
              </h2>

              <div className="space-y-6">
                <p className="text-lg">
                  <span className="font-bold">01</span> Once we&apos;ve checked out your application, a recruiter will reach out to guide you through the next steps.
                </p>
                <p className="text-lg">
                  <span className="font-bold">02</span> You&apos;ll have a friendly chat with a recruiter to learn more about the role—and to tell us all about your superpowers.
                </p>
                <p className="text-lg">
                  <span className="font-bold">03</span> Next, two virtual interviews with key team members—think of it as a friendly showdown where we find out if you&apos;re the perfect fit.
                </p>
                <p className="text-lg">
                  <span className="font-bold">04</span> If you&apos;re the chosen one, you&apos;ll get a formal offer letter with your start date and all the exciting details. Spoiler: we&apos;ll be thrilled to have you!
                </p>
              </div>
            </div>

            {/* Second Image - Below Text */}
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src="/ORS_WEB-HIRING2.jpg"
                alt="A person working at a desk"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                rel="preload"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Wrap component with forwardRef while keeping internal logic clean
const ForwardedFindUrJobSection = React.forwardRef<HTMLElement>((props) => {
  return <FindUrJobSection {...props} />;
});
ForwardedFindUrJobSection.displayName = "FindUrJobSection";

export default ForwardedFindUrJobSection;


