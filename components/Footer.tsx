"use client"

import { Heart, Sparkles } from "lucide-react"
import { socialLinks, funFacts } from "./constants/footerData"

export function Footer() {
  return (
    <footer id="contact" className="py-16 sm:py-20 px-4 sm:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Sparkles className="w-6 h-6 sm:w-6 sm:h-6 text-primary mr-2 sm:mr-3 animate-pulse" />
            <h3 className="text-4xl sm:text-4xl md:text-5xl font-thin bg-gradient-to-r from-foreground via-foreground/90 to-foreground bg-clip-text text-transparent">
              Let&apos;s Vibe & Build
            </h3>
            <Sparkles className="w-6 h-6 sm:w-6 sm:h-6 text-primary ml-2 sm:ml-3 animate-pulse" />
          </div>
          <p className="text-lg sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 font-light px-1">
            Ready to create something that absolutely <span className="text-primary font-medium">slaps</span>? Hit me up and let&apos;s make magic happen! ✨
          </p>
          <div className="text-muted-foreground/80 text-base sm:text-base md:text-lg">
            No cap, I&apos;m always down for cool projects 🚀
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="group p-4 bg-card rounded-2xl border border-border hover:border-foreground/20 transition-all duration-300 hover:scale-105"
            >
              <fact.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${fact.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`} />
              <p className="text-muted-foreground text-xs sm:text-sm font-light">{fact.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center flex-wrap gap-4 sm:space-x-6 mb-10 sm:mb-12">
          {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
            <a
              key={label}
              href={href}
              className={`group p-4 sm:p-5 bg-card hover:bg-card/80 rounded-2xl transition-all duration-500 backdrop-blur-sm border border-border hover:border-foreground/30 hover:scale-110`}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={24} className={`text-foreground/80 group-hover:text-foreground transition-all duration-300 ${hoverColor}`} />
            </a>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
            <span>and probably too much caffeine</span>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-border/60">
            <p className="text-muted-foreground/80 font-light">
              © 2025 Vansh Malhotra. All rights reserved.
              <span className="text-primary/70"> No 🧢</span>
            </p>
            <div className="mt-2 text-muted-foreground/70 text-xs sm:text-sm">
              This website is lowkey fire 🔥 (I&apos;m not biased at all)
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


