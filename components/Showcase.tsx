"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function Showcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, willChange: "transform" }} className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/devimage.jpg"
            alt="Developer workspace"
            fill
            priority
            className="object-cover grayscale [image-orientation:from-image]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center text-white px-4"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          Building scalable,
          <br />
          production-grade systems.
        </h2>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto text-balance">
          Passionate about creating efficient, maintainable code that solves real-world problems.
        </p>
      </motion.div>
    </section>
  )
}
