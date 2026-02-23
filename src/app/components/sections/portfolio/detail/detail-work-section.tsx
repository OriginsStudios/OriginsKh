// 'use client';
// import { useState } from 'react';
// import FloatingShape from '@/app/components/ui/floating-shape';
// import { slugify } from '@/app/components/utils/slugify';
// import { allImages } from '@/data/portfolioData';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useParams, useSearchParams } from 'next/navigation';
// import { AnimatePresence, motion } from 'framer-motion';

// export default function WorkDetail() {
//   const params = useParams();
//   const searchParams = useSearchParams();
//   const descriptionSlug = params.description as string;
//   const from = searchParams.get('from');

//   const work = allImages.find((item) => slugify(item.description) === descriptionSlug);

//   const [index, setIndex] = useState(0);

//   if (!work) {
//     return (
//       <section className="min-h-screen bg-transparent py-16 text-black">
//         <div className="max-w-4xl mx-auto px-4">
//           <h1 className="text-4xl font-serif mb-6 text-center">Work Not Found</h1>
//           <Link
//             href={from === 'work' ? '/work' : '/portfolio'}
//             className="flex items-center py-3 px-6 bg-orange-400 text-white rounded-full font-bold hover:bg-black transition-colors text-sm mx-auto"
//           >
//             Back to {from === 'work' ? 'Work' : 'Portfolio'}
//           </Link>
//         </div>
//       </section>
//     );
//   }

//   const currentImage = work.images[index];

//   const nextImage = () => {
//     setIndex((prev) => (prev + 1) % work.images.length);
//   };

//   const prevImage = () => {
//     setIndex((prev) => (prev - 1 + work.images.length) % work.images.length);
//   };

//   const hasMultipleImages = work.images.length > 1;

//   return (
//     <section className="min-h-screen bg-transparent py-16 text-black relative">
//       <div className="max-w-4xl mx-auto px-4">
//         {/* Background shapes */}
//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <FloatingShape delay={0} duration={12} className="top-1/4 left-1/4 md:w-30 md:h-30 w-15 h-15 rounded-full bg-orange-400" />
//           <FloatingShape delay={4} duration={18} className="top-3/4 right-1/4 md:w-32 md:h-32 w-12 h-12 rounded-full bg-gray-400" />
//           <FloatingShape delay={8} duration={20} className="top-1/2 right-1/3 md:w-20 md:h-20 w-10 h-10 rounded-2xl bg-orange-400" />
//           <div className="absolute inset-0 opacity-5">
//             <div
//               className="w-full h-full"
//               style={{
//                 backgroundImage: `
//                   linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
//                   linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
//                 `,
//                 backgroundSize: '50px 50px',
//               }}
//             />
//           </div>
//         </div>
//         <h1 className="text-4xl md:text-5xl font-serif mb-6 text-center" style={{ fontFamily: 'DM Serif Text' }}>
//           {work.caption}
//         </h1>
//         <div className="flex flex-col gap-4 mb-6">
//           <span className="bg-gray-200 text-black text-xs font-medium px-3 py-1 rounded-full self-start">
//             {work.description}
//           </span>
//         </div>

//         {/* Slideshow */}
//         <div className="relative z-10 mb-6 flex justify-center">
//           <div className="relative" style={{ width: 800, height: 600 }}>
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentImage.src}
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute inset-0"
//               >
//                 <Image
//                   src={currentImage.src}
//                   alt={work.description}
//                   fill
//                   className="rounded-2xl shadow-lg object-cover"
//                   priority
//                   sizes="(max-width: 800px) 100vw, 800px"
//                 />
//               </motion.div>
//             </AnimatePresence>

//             {/* Navigation Arrows */}
//             {hasMultipleImages && (
//               <>
//                 <button
//                   onClick={prevImage}
//                   className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
//                   aria-label="Previous Image"
//                   style={{ zIndex: 10 }}
//                 >
//                   ◀
//                 </button>
//                 <button
//                   onClick={nextImage}
//                   className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
//                   aria-label="Next Image"
//                   style={{ zIndex: 10 }}
//                 >
//                   ▶
//                 </button>
//               </>
//             )}
//           </div>
//         </div>

//         <p className="text-justify text-gray-600 text-lg leading-relaxed mb-8">
//           {work.longDescription}
//         </p>
//         <Link
//           href={from === 'work' ? '/#work' : '/portfolio'}
//           className="inline-flex items-center gap-2 py-2 px-4 md:py-3 md:px-6 bg-orange-400 text-white rounded-full font-semibold hover:bg-black transition-colors duration-300 text-sm shadow-md hover:shadow-lg"
//         >
//           Back to {from === 'work' ? 'Work' : 'Portfolio'}
//         </Link>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import { slugify } from "@/app/components/utils/slugify";
import { allImages } from "@/data/portfolioData";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function WorkDetail() {
  const params = useParams();
  const searchParams = useSearchParams();
  const descriptionSlug = params.description as string;
  const from = searchParams.get("from");

  const work = allImages.find(
    (item) => slugify(item.description) === descriptionSlug
  );

  const [index, setIndex] = useState(0);

  if (!work) {
    return (
      <section className="relative overflow-hidden px-4 sm:px-8 py-20 md:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-teal-200/40 blur-3xl" />
          <div className="absolute top-10 right-16 h-40 w-40 rounded-full bg-orange-200/50 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-orange-100/60 blur-3xl" />
        </div>
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="rounded-[32px] border border-white/70 bg-white/70 backdrop-blur-xl px-6 py-10 md:px-10 md:py-12 shadow-[0_20px_60px_rgba(15,23,42,0.08)] text-center">
            <h1
              className="text-3xl md:text-5xl font-normal text-teal-900"
              style={{ fontFamily: "DM Serif Text" }}
            >
              Work Not Found
            </h1>
            <p className="mt-3 text-sm md:text-base text-teal-900/70">
              The requested portfolio item could not be found.
            </p>
            <Link
              href={from === "work" ? "/work" : "/portfolio"}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-800 hover:bg-orange-50 transition-colors"
            >
              Back to {from === "work" ? "Work" : "Portfolio"} →
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const currentImage = work.images[index];

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % work.images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + work.images.length) % work.images.length);
  };

  const hasMultipleImages = work.images.length > 1;

  return (
    <section className="relative overflow-hidden px-4 sm:px-8 py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="absolute top-10 right-16 h-40 w-40 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-orange-100/60 blur-3xl" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="rounded-[32px] border border-white/70 bg-white/70 backdrop-blur-xl px-6 py-10 md:px-10 md:py-12 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-teal-700">
              Recent Work
            </p>
            <h1
              className="text-3xl md:text-5xl font-normal text-teal-900"
              style={{ fontFamily: "DM Serif Text" }}
            >
              {work.caption}
            </h1>
            <p className="text-sm md:text-base text-teal-900/70">
              {work.description}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="relative px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-white">
                <span className="absolute inset-0 rounded-full bg-teal-800 shadow-md shadow-teal-900/20" />
                <span className="relative z-10">{work.hashtags}</span>
              </span>
            </div>
          </div>

          {/* Slideshow */}
          <div className="relative z-10 mt-8 md:mt-10 flex justify-center">
            <div className="relative w-full">
              <div className="absolute inset-0 bg-[#f3e9dd] rounded-3xl transform translate-x-2 translate-y-2" />
              <div className="absolute inset-0 bg-[#efe4da] rounded-3xl transform translate-x-1 translate-y-1" />
              <div className="relative w-full pt-[70%] rounded-3xl overflow-hidden shadow-lg bg-white group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage.src}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentImage.src}
                      alt={work.description}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 960px"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/20 to-transparent transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="transition-all duration-500 px-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="font-semibold text-lg mb-2">
                        {work.caption}
                      </h3>
                      <p className="text-sm text-white/80 mb-2">
                        {work.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full border border-white/80 bg-white/90 p-2 text-teal-800 shadow-sm transition-transform hover:-translate-y-1/2 hover:scale-105"
                    aria-label="Previous Image"
                    style={{ zIndex: 10 }}
                  >
                    ◀
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full border border-white/80 bg-white/90 p-2 text-teal-800 shadow-sm transition-transform hover:-translate-y-1/2 hover:scale-105"
                    aria-label="Next Image"
                    style={{ zIndex: 10 }}
                  >
                    ▶
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="mt-8 text-sm md:text-base text-teal-900/70 leading-relaxed">
            {work.longDescription.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href={from === "work" ? "/#work" : "/portfolio"}
              className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-800 hover:bg-orange-50 transition-colors"
            >
              Back to {from === "work" ? "Work" : "Portfolio"} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
