
"use client"

import { useRef, forwardRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"
import { cn } from "../../utils/utils"
import ButtonSection from "../button-section"
import Image from 'next/image';



type TimelineItem = {
  years: string
  title: string
  description: string
  image: string
  highlight: boolean
}

const timelineData: TimelineItem[] = [
  {
    years: "2017-2018",
    title: "Exploration Begins",
    description:
      "Our creative journey began in Singapore's vibrant ecosystem. Expanded collaborations across Southeast Asia and Australia",
    image: "/pic-2017-2018.jpeg",
    highlight: false,
  },
  {
    years: "2019",
    title: "Creative Consultation Starts",
    description: "Launched creative consultation services in Cambodia. Developed innovative solutions for emerging markets",
    image: "/pic2019.png",
    highlight: true,
  },
  {
    years: "2020-2021",
    title: "Adapting Through Change",
    description: "Helped brands adapt during the pandemic with digital transformation. Pioneered remote creative collaboration frameworks",
    image: "/pic2020.jpg",
    highlight: false,
  },
  {
    years: "2022-2024",
    title: "Expanding Horizons",
    description:
      "Expanded to full-service production and concept development. Global projects across 5 continents with diverse clients",
    image: "/pic2025.jpg",
    highlight: true,
  },
  {
    years: "2025",
    title: "A Bold New Chapter",
    description:
      "Officially launched ORIGINS STUDIOS as a creative powerhouse. Dedicated to turning bold visions into extraordinary realities",
    image: "/pic2025.jpg",
    highlight: true,
  },
]

interface TimelineItemProps {
  item: TimelineItem
  index: number
  isActive: boolean
  progress: MotionValue<number>
}

const TimelineItem = ({ item, index, isActive, progress }: TimelineItemProps) => {
  const itemRef = useRef(null)
  return (
    <motion.div
      ref={itemRef}
      className="min-h-[90vh] flex items-center justify-center px-8 md:px-12 py-12"
      style={{
        opacity: useTransform(progress, [index - 0.5, index, index + 0.5], [0.3, 1, 0.3]),
        scale: useTransform(progress, [index - 0.5, index, index + 0.5], [0.8, 1, 0.8]),
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className={cn("space-y-6", index % 2 === 0 ? "md:order-1" : "md:order-2")}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            animate={{ opacity: isActive ? 1 : 0.5, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black text-white font-mono font-bold text-lg"
            >
            <div className="flex items-center gap-1 text-white text-sm">
              <Image 
            src="/originsStar2.svg" 
            alt="origin icon" 
            className="w-6 h-6" 
            width={24} // Adjust the width according to your needs
            height={24} // Adjust the height according to your needs
          />
            {item.years}
          </div>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight"
            >
              {item.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-lg md:text-xl leading-relaxed"
            >
              {item.description}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <ButtonSection 
                buttonHref="/portfolio"
                />
            </motion.div>
          </motion.div>

          <motion.div
            className={cn("relative", index % 2 === 0 ? "md:order-2" : "md:order-1")}
            initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
            animate={{ opacity: isActive ? 1 : 0.5, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent z-10" />
              <motion.img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-80 md:h-[500px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute top-6 right-6 z-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "linear" }}
                  className="w-10 h-10 border-2 border-orange-400 rounded-full flex items-center justify-center bg-white/90"
                >
                  <div className="flex items-center gap-1 text-white text-sm">
                <Image 
                  src="/originsStar.svg" 
                  alt="origin icon" 
                  className="w-10 h-8" 
                  width={40} // Adjust the width according to your needs
                  height={32} // Adjust the height according to your needs
                />
                </div>
                </motion.div>
              </div>


            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

const OurOriginsSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const currentSection = useTransform(smoothProgress, [0, 1], [0, timelineData.length - 1])

  useEffect(() => {
    const unsubscribe = currentSection.onChange((latest) => {
      const newIndex = Math.round(latest)
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < timelineData.length) {
        setActiveIndex(newIndex)
      }
    })
    return unsubscribe
  }, [currentSection, activeIndex])

  return (
    <section ref={ref} id="origins" className="relative bg-white text-black overflow-hidden">
      <style jsx global>{`
        html {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        html::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Header */}
      <div className="relative z-10 pt-20 pb-10 text-center">
        <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl md:text-7xl font-bold mb-6">
            <span className="text-black">Our</span>
            <span className="ml-4 text-orange-400">Origins</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-l md:text-2xl mb-8 px-6">
            Scroll to explore the journey that shaped who we are today
          </p>
        </motion.div>
      </div>

      {/* Scrollable Content */}
      <div ref={containerRef} className="relative z-10">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            isActive={index === activeIndex}
            progress={currentSection}
          />
        ))}
      </div>

      <div className="h-16" />
    </section>
  )
})

OurOriginsSection.displayName = "OurOriginsSection"
export default OurOriginsSection

