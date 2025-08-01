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
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
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
      className="bg-transparent relative overflow-hidden py-48 px-8"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {studios.map((studio, index) => (
          <div
            key={studio.name}
            className={`relative w-full ${
              index !== 0 ? "mt-16 sm:mt-20 lg:mt-24" : ""
            }`}
          >
            {/* Background Image with rounded corners preserved */}
            <motion.div
              className="absolute inset-0 z-0 overflow-hidden rounded-xl"
              whileHover="hover"
            >
              <motion.div variants={imageVariants}>
                <Image
                  src={studio.image}
                  alt={`${studio.name} Studio`}
                  fill
                  className="object-cover brightness-75"
                  priority={index === 0}
                  rel="preload"
                />
              </motion.div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
            </motion.div>

            <motion.div variants={itemVariants} custom={index}>
              {/* Content Wrapper - responsive padding */}
              <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-28 mx-auto max-w-screen-xl flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16">
                {/* Left Section - Studio Name */}
                <div className="w-full md:w-1/2">
                  <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light text-white leading-none"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                  >
                    {studio.name}
                  </motion.h1>
                </div>
                {/* Right Section - Description & Services */}
                <div className="w-full md:w-1/2 text-left text-white">
                  <motion.p
                    className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed opacity-90"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  >
                    {studio.description}
                  </motion.p>
                  {/* Services Grid */}
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + 0.4,
                      staggerChildren: 0.1,
                    }}
                  >
                    {studio.services.map((service, idx) => (
                      <motion.p
                        key={idx}
                        className="text-gray-200"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4 + idx * 0.05 }}
                      >
                        {service}
                      </motion.p>
                    ))}
                  </motion.div>
                  <div className="w-full md:w-1/2 text-left">
                    <Link href="/portfolio">
                      <motion.button
                        className="flex items-center px-6 py-3 bg-white text-black rounded-full font-bold hover:text-white hover:bg-black transition-colors text-sm md:text-base"
                        variants={buttonVariants}
                        initial="rest"
                        whileHover="hover"
                        whileTap="pressed"
                      >
                        See Work
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
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
