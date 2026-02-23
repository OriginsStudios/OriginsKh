"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const studios = [
  {
    name: "Creative",
    image: "/creative.png",
    description:
      "ORIGINS Creative brings ideas to life through design, interactivity, and expression. From graphic design and visual branding to social media content and experiential art, this sector focuses on visual storytelling that's bold, stylish, and unforgettable.",
    services: [
      "Branding & Visual Identity",
      "Graphic Design (Digital & Print)",
      "Social Media Content & Templates",
      "Creative Direction & Art Styling",
      "Web & UI/UX Design",
    ],
  },
  {
    name: "Production",
    image: "/production.png",
    description:
      "ORIGINS Production is our powerhouse of content creation. We craft high-impact visuals through cinematic storytelling, precise editing, and compelling audio-visual experiences. From branded films to social media content, we transform ideas into stories that move people.",
    services: [
      "Video Production & Direction",
      "Cinematography & Photography",
      "Editing & Post-production",
      "Motion Graphics & Animation",
      "Events & Performance Coverage",
    ],
  },
  {
    name: "Concept",
    image: "/concepts.png",
    description:
      "ORIGINS Concepts develops and manages original ideas and lifestyle projects, including curated product lines, spatial concepts, and branded environments. It's where creativity meets entrepreneurship. The forefront of our side ventures and innovative brand experiences.",
    services: [
      "ORIGINS Coffee & Gallery",
      "Product Curation & Merchandise",
      "Pop-up & Event Concepts",
      "Spatial & Interior Branding",
      "Experience-based Retail Concepts",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 0.77, 0.47, 0.97],
    },
  },
};

const imageVariants = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  pressed: {
    scale: 0.95,
  },
};

export default function DetailStudioSection() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden px-4 sm:px-8 py-20 md:py-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-10 h-56 w-56 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="absolute top-12 right-12 h-40 w-40 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-orange-100/60 blur-3xl" />
      </div>

      <motion.div
        className="relative w-full max-w-6xl mx-auto space-y-10 md:space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {studios.map((studio, index) => {
          const isReversed = index % 2 === 1;
          const imageOrder = isReversed ? "md:order-2" : "md:order-1";
          const contentOrder = isReversed ? "md:order-1" : "md:order-2";

          return (
            <motion.div
              key={studio.name}
              variants={cardVariants}
              className="rounded-[32px] border border-white/70 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center p-6 md:p-8">
                <div className={`relative w-full aspect-[4/3] ${imageOrder}`}>
                  <div className="absolute inset-0 bg-[#f3e9dd] rounded-3xl transform translate-x-2 translate-y-2" />
                  <div className="absolute inset-0 bg-[#efe4da] rounded-3xl transform translate-x-1 translate-y-1" />
                  <motion.div
                    className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg"
                    variants={imageVariants}
                    whileHover="hover"
                  >
                    <Image
                      src={studio.image}
                      alt={`${studio.name} Studio`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </motion.div>
                </div>

                <div className={`w-full ${contentOrder}`}>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-teal-600">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-800 text-white text-[10px] font-semibold">
                      0{index + 1}
                    </span>
                    <span>Studio</span>
                  </div>
                  <h3
                    className="mt-4 text-3xl md:text-4xl font-normal text-teal-900"
                    style={{ fontFamily: "DM Serif Text" }}
                  >
                    {studio.name}
                  </h3>
                  <p className="mt-4 text-sm md:text-base text-teal-900/70 leading-relaxed">
                    {studio.description}
                  </p>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-teal-900/70">
                    {studio.services.map((service) => (
                      <div key={service} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link href="/portfolio">
                      <motion.button
                        className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-800 hover:bg-orange-50 transition-colors"
                        variants={buttonVariants}
                        initial="rest"
                        whileHover="hover"
                        whileTap="pressed"
                      >
                        See Work →
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
