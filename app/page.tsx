"use client"

import { useEffect } from "react"
import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import About from "../components/About"
import TechStack from "../components/TechStack"
import Projects from "../components/Projects"
import Showcase from "../components/Showcase"
import Contact from "../components/Contact"
import { Footer } from "../components/Footer"

export default function Home() {
  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      // Cleanup function
      return () => {
        lenis.destroy()
      }
    }

    const cleanup = initLenis()

    return () => {
      cleanup.then((cleanupFn) => cleanupFn && cleanupFn())
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Showcase />
      <About />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}
