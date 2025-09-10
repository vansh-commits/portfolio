"use client"

import Image from "next/image"
import { techStack } from "../data/data"
import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useIsMobile } from "../hooks/use-mobile"
import { Button } from "./ui/button"
import { Sparkles, X } from "lucide-react"

export default function TechStack() {
  const isMobile = useIsMobile()
  const [expanded, setExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)

  const mid = Math.ceil(techStack.length / 2)
  const topRow = techStack.slice(0, mid)
  const bottomRow = techStack.slice(mid)

  // Categorize tech for the grid view (mobile default + desktop expanded)
  const categories = useMemo(() => {
    const byName = new Map(techStack.map((t) => [t.name.toLowerCase(), t]))
    const pick = (names: string[]) =>
      names
        .map((n) => byName.get(n.toLowerCase()))
        .filter(Boolean) as { name: string; icon?: string }[]
    return {
      Languages: pick(["Java", "JavaScript", "SQL", "Go"]),
      Frameworks: pick(["React.js", "Next.js", "Node.js", "Express.js", "Fiber", "Gorm"]),
      Databases: pick(["PostgreSQL", "MySQL", "MongoDB"]),
      DevOps: pick(["Docker", "AWS", "Cloudflare"]),
      Tools: pick(["Git", "Linux", "Vim"]),
    }
  }, [])

  const showGrid = isMobile || expanded

  return (
    <section id="tech" className="py-20 sm:py-32 px-4 sm:px-8 overflow-hidden relative bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="relative">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-thin mb-5 sm:mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground bg-clip-text text-transparent">
              Tech Arsenal
            </h2>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-28 sm:w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
          </div>
          <p className="text-lg sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light px-1">
            The powerful tools and technologies that fuel my digital creations. Always learning, always evolving.
          </p>
        </div>

        <div
          className={`relative ${!isMobile && !showGrid ? "pt-12" : ""}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <AnimatePresence initial={false} mode="wait">
            {!showGrid && (
              <motion.div
                key="marquee"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative mb-8 overflow-hidden mask-gradient">
                  <div className="flex animate-marquee-left space-x-6">
                    {[...topRow, ...topRow].map((tech, index) => (
                      <TechPill key={`top-${index}`} name={tech.name} icon={tech.icon} />
                    ))}
                  </div>
                </div>
                <div className="relative overflow-hidden mask-gradient">
                  <div className="flex animate-marquee-right space-x-6">
                    {[...bottomRow, ...bottomRow].map((tech, index) => (
                      <TechPill key={`bottom-${index}`} name={tech.name} icon={tech.icon} />
                    ))}
                  </div>
                </div>

                {/* Hover CTA for desktop */}
                {!isMobile && (
                  <>
                    {/* Soft gradient underlay so button doesn't visually overlap */}
                    <div className="pointer-events-none absolute top-0 right-0 p-3 z-0">
                      <div className="h-9 w-48 rounded-full bg-gradient-to-l from-background/90 via-background/70 to-transparent backdrop-blur-sm border border-border/40" />
                    </div>
                  <motion.div
                    initial={false}
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="pointer-events-none absolute top-0 right-0 p-3 z-10"
                  >
                    <Button
                      variant="default"
                      size="sm"
                      className="pointer-events-auto rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg ring-1 ring-primary/30 hover:shadow-primary/30 hover:translate-y-[-1px] transition will-change-transform"
                      onClick={() => setExpanded(true)}
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      View full tech stack
                    </Button>
                  </motion.div>
                  </>
                )}
              </motion.div>
            )}

            {showGrid && (
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className={`relative ${!isMobile ? "pt-12" : ""}`}
              >
                {!isMobile && (
                  <div className="absolute top-0 right-0 p-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full shadow-sm hover:translate-y-[-1px] transition"
                      onClick={() => setExpanded(false)}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Back to marquee
                    </Button>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(categories).map(([group, items]) => (
                    <motion.div
                      key={group}
                      layout
                      className="border rounded-xl bg-card/60 backdrop-blur-sm p-5"
                      whileHover={{ scale: isMobile ? 1 : 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">{group}</h3>
                        <span className="text-xs text-muted-foreground">{items.length}</span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {items.map((tech) => (
                          <TechPill key={`${group}-${tech.name}`} name={tech.name} icon={tech.icon} />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function TechPill({ name, icon }: { name: string; icon?: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-full border-2 bg-card/60 backdrop-blur-sm hover-lift">
      <div className="w-7 h-7 relative">
        <Image src={icon || "/placeholder.svg"} alt={name} fill sizes="28px" className="object-contain" />
      </div>
      <span className="text-sm font-medium text-foreground whitespace-nowrap">{name}</span>
    </div>
  )
}
