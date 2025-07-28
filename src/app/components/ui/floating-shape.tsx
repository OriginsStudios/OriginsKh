
"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { cn } from "../utils/utils"

interface FloatingShapeProps {
  delay?: number
  duration?: number
  className?: string
}

const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min

const FloatingShape = ({ delay = 0, duration = 8, className = "" }: FloatingShapeProps) => {
  const controls = useAnimation()

  useEffect(() => {
    const animate = () => {
      controls.start({
        x: getRandom(-window.innerWidth / 2, window.innerWidth / 2),
        y: getRandom(-window.innerHeight / 2, window.innerHeight / 2),
        rotate: getRandom(0, 360),
        opacity: [0, 0.4, 0],
        scale: [0.5, 1.5, 0.5],
        transition: {
          duration,
          delay,
          ease: "easeInOut",
          repeat: Infinity,
        },
      })
    }

    animate()
    // Re-run the animation every few seconds for randomization
    const interval = setInterval(animate, duration * 1000)
    return () => clearInterval(interval)
  }, [controls, delay, duration])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={controls}
      className={cn("absolute pointer-events-none", className)}
    />
  )
}

export default FloatingShape
