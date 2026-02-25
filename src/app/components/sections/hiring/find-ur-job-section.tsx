"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
interface IntroHiringSectionProps {
  textColor: string;
}

const FindUrJobSection: React.FC<IntroHiringSectionProps> = ({ textColor }) => {
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
    <section
      id="findUrJob"
      className="bg-transparent relative overflow-hidden w-full m-0 px-6 sm:px-10 py-24"
    >
      {/* Lifestyle background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-16 left-1/3 h-56 w-56 rounded-full bg-amber-200/60 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-rose-200/50 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(255,255,255,0.7),_transparent_60%)]" />
      </div>

      {/* Full-width container with no left/right padding */}
      <div className="relative w-full mx-auto max-w-6xl">
        {/* Title Section */}
        <div className="text-center">
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.5em] text-stone-600"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Careers at Origins
          </p>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight mt-6"
            style={{ fontFamily: "DM Serif Text", color: textColor }}
          >
            Find your place on the team.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed">
            We look for thoughtful collaborators across design, strategy,
            technology, production, and operations.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          <span
            className="px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-[0.2em] text-stone-600 bg-white/70 ring-1 ring-stone-200/70"
          >
            POSITION:
          </span>

          {/* Show nav items based on screen size */}
          {navItems.map((item) => {
            const active = activeCategory === item.label;
            return (
              <button
                key={item.label}
                onClick={() => handleCategoryChange(item.label)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ring-1 ${
                  active
                    ? "bg-stone-900 text-white ring-stone-900"
                    : "bg-white/80 text-stone-700 ring-stone-200 hover:bg-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Message Display */}
        <div className="mt-10 rounded-[28px] bg-white/75 ring-1 ring-stone-200/70 shadow-[0_18px_50px_rgba(24,24,24,0.08)] backdrop-blur p-6 sm:p-8 text-center">
          <p className="text-base sm:text-lg text-stone-700">
            {"There are no opening currently. Please check back again!"}
          </p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="text-sm font-semibold text-amber-700 hover:text-amber-600"
            >
              Stay in touch →
            </Link>
          </div>
        </div>

        {/* Hiring Journey Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pt-24">
          {/* First Image - Left Side */}
          <div className="space-y-12">
            <div className="lg:sticky lg:top-8">
              <div className="relative rounded-[28px] overflow-hidden aspect-square shadow-[0_24px_60px_rgba(15,23,42,0.12)] ring-1 ring-white/70">
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
                  <h3
                    className="text-xl md:text-3xl text-stone-900 mb-8 leading-snug"
                  >
                    To craft exceptional brand experiences, we embrace a
                    multidisciplinary approach—blending strategy, creativity,
                    and technology—while working hand-in-hand with our clients
                    every step of the way.
                  </h3>
                  <Link href="/studios">
                    <button className="flex items-center px-6 py-3 bg-stone-900 text-white rounded-full font-semibold hover:bg-amber-600 transition-colors text-sm md:text-base">
                      View Our Services
                      <motion.div
                        className="ml-3"
                        animate={{ x: [0, 6, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 1.5,
                        }}
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
            <div className="space-y-8 rounded-[28px] bg-white/70 ring-1 ring-stone-200/70 shadow-[0_18px_50px_rgba(24,24,24,0.08)] backdrop-blur px-6 py-8 sm:px-10 sm:py-10">
              <h2
                className="text-3xl lg:text-4xl font-semibold leading-tight text-stone-900"
                style={{ fontFamily: "DM Serif Text" }}
              >
                Inside the Hiring Journey
              </h2>

              <div className="space-y-6 text-stone-700">
                <p className="text-base sm:text-lg">
                  <span className="font-bold">01</span> Once we&apos;ve checked
                  out your application, a recruiter will reach out to guide you
                  through the next steps.
                </p>
                <p className="text-base sm:text-lg">
                  <span className="font-bold">02</span> You&apos;ll have a
                  friendly chat with a recruiter to learn more about the
                  role—and to tell us all about your superpowers.
                </p>
                <p className="text-base sm:text-lg">
                  <span className="font-bold">03</span> Next, two virtual
                  interviews with key team members—think of it as a friendly
                  showdown where we find out if you&apos;re the perfect fit.
                </p>
                <p className="text-base sm:text-lg">
                  <span className="font-bold">04</span> If you&apos;re the
                  chosen one, you&apos;ll get a formal offer letter with your
                  start date and all the exciting details. Spoiler: we&apos;ll
                  be thrilled to have you!
                </p>
              </div>
            </div>

            {/* Second Image - Below Text */}
            <div className="relative rounded-[28px] overflow-hidden aspect-square shadow-[0_24px_60px_rgba(15,23,42,0.12)] ring-1 ring-white/70">
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
const ForwardedFindUrJobSection = React.forwardRef<
  HTMLElement,
  IntroHiringSectionProps
>((props) => {
  return <FindUrJobSection {...props} />;
});
ForwardedFindUrJobSection.displayName = "FindUrJobSection";

export default ForwardedFindUrJobSection;



// "use client";

// import React from "react";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// interface IntroHiringSectionProps {
//   textColor: string;
// }

// const FindUrJobSection: React.FC<IntroHiringSectionProps> = ({ textColor }) => {
//   const [activeCategory, setActiveCategory] = useState("ALL");

//   const navItems = [
//     { label: "ALL", href: "" },
//     { label: "CONTENT CREATOR", href: "" },
//     { label: "MARKETING", href: "" },
//     { label: "GRAPHIC", href: "" },
//   ];

//   const handleCategoryChange = (category: string) => {
//     setActiveCategory(category);
//   };

//   // Replace with your actual Telegram link
//   const telegramLink = "https://t.me/originskh";

//   // Filter logic
//   const showContentCreator = activeCategory === "ALL" || activeCategory === "CONTENT CREATOR";
//   const showMarketing = activeCategory === "ALL" || activeCategory === "MARKETING";
//   const showGraphic = activeCategory === "ALL" || activeCategory === "GRAPHIC";

//   return (
//     <section
//       id="findUrJob"
//       className="bg-transparent relative overflow-hidden w-full m-0 px-8 py-24"
//     >
//       <div className="w-full mx-auto max-w-7xl">
//         {/* Title Section */}
//         <div className="text-center mb-12">
//           <h2
//             className={`text-4xl md:text-7xl font-serif mb-12 text-[${textColor}]`}
//             style={{ fontFamily: "DM Serif Text" }}
//           >
//             Find Your Dream Job
//           </h2>
//         </div>

//         {/* Category Filters */}
//         <div className="flex flex-wrap items-center gap-2 pb-32">
//           <span
//             className={`px-4 py-2 rounded-full text-lg font-medium text-[${textColor}]`}
//           >
//             POSITION:
//           </span>
//           {navItems.map((item) => {
//             const active = activeCategory === item.label;
//             return (
//               <button
//                 key={item.label}
//                 onClick={() => handleCategoryChange(item.label)}
//                 className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
//                   active
//                     ? "bg-black text-white"
//                     : "bg-gray-200 text-black hover:bg-gray-300"
//                 }`}
//               >
//                 {item.label}
//               </button>
//             );
//           })}
//         </div>

//         {/* Job Listings */}
//         <div className="space-y-12 pb-20">
//           {/* Content Creator & Marketing Executive */}
//           {(showContentCreator || showMarketing) && (
//             <div className="bg-white border border-gray-300 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:shadow-xl transition-shadow">
//               <div className="flex-1">
//                 <h3 className="text-2xl font-bold text-black mb-4">
//                   Content Creator & Marketing Executive
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   We’re looking for a creative and strategic mind to produce engaging content across platforms, manage social media campaigns, and drive brand growth through innovative marketing strategies.
//                 </p>
//               </div>
//               <div>
//                 <Link href={telegramLink} target="_blank" rel="noopener noreferrer">
//                   <button className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-orange-500 transition-colors text-lg whitespace-nowrap">
//                     Apply Now
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           )}

//           {/* Graphic Designer */}
//           {showGraphic && (
//             <div className="bg-white border border-gray-300 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:shadow-xl transition-shadow">
//               <div className="flex-1">
//                 <h3 className="text-2xl font-bold text-black mb-4">
//                   Graphic Designer
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   Join our team to create stunning visuals, brand identities, digital assets, and marketing materials that captivate audiences and elevate our clients’ presence.
//                 </p>
//               </div>
//               <div>
//                 <Link href={telegramLink} target="_blank" rel="noopener noreferrer">
//                   <button className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-orange-500 transition-colors text-lg whitespace-nowrap">
//                     Apply Now
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           )}

//           {/* No jobs message */}
//           {!showContentCreator && !showMarketing && !showGraphic && (
//             <div className="bg-gray-200 border border-gray-300 rounded-lg p-6 text-center shadow-sm">
//               <p className="text-lg text-black">
//                 There are no openings in this category currently. Please check back again!
//               </p>
//             </div>
//           )}
//         </div>

//         {/* Hiring Journey Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start pt-32">
//           <div className="space-y-12">
//             <div className="lg:sticky lg:top-8">
//               <div className="relative rounded-2xl overflow-hidden aspect-square">
//                 <Image
//                   src="/ORS_WEB-HIRING1.jpg"
//                   alt="A person working at a desk"
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   priority
//                 />
//               </div>
//             </div>

//             <div className="w-full">
//               <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
//                 <div className="w-full text-left">
//                   <h3 className={`text-2xl md:text-3xl text-[${textColor}] mb-8`}>
//                     To craft exceptional brand experiences, we embrace a multidisciplinary approach—blending strategy, creativity, and technology—while working hand-in-hand with our clients every step of the way.
//                   </h3>
//                   <Link href="/studios">
//                     <button className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-400 transition-colors text-sm md:text-base">
//                       View Our Services
//                       <motion.div
//                         className="ml-3"
//                         animate={{ x: [0, 6, 0] }}
//                         transition={{
//                           repeat: Infinity,
//                           duration: 1.5,
//                         }}
//                       >
//                         →
//                       </motion.div>
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-12">
//             <div className="space-y-8">
//               <h2 className="text-4xl lg:text-5xl font-normal leading-tight">
//                 Inside the Hiring Journey
//               </h2>
//               <div className="space-y-6">
//                 <p className="text-lg">
//                   <span className="font-bold">01</span> Once we’ve checked out your application, a recruiter will reach out to guide you through the next steps.
//                 </p>
//                 <p className="text-lg">
//                   <span className="font-bold">02</span> You’ll have a friendly chat with a recruiter to learn more about the role—and to tell us all about your superpowers.
//                 </p>
//                 <p className="text-lg">
//                   <span className="font-bold">03</span> Next, two virtual interviews with key team members—think of it as a friendly showdown where we find out if you’re the perfect fit.
//                 </p>
//                 <p className="text-lg">
//                   <span className="font-bold">04</span> If you’re the chosen one, you’ll get a formal offer letter with your start date and all the exciting details. Spoiler: we’ll be thrilled to have you!
//                 </p>
//               </div>
//             </div>

//             <div className="relative rounded-2xl overflow-hidden aspect-square">
//               <Image
//                 src="/ORS_WEB-HIRING2.jpg"
//                 alt="Team collaboration"
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FindUrJobSection;
