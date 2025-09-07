"use client"

import Image from "next/image"
import { techStack } from "../data/data"

export default function TechStack() {
  const mid = Math.ceil(techStack.length / 2)
  const topRow = techStack.slice(0, mid)
  const bottomRow = techStack.slice(mid)

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
