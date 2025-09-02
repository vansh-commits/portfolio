"use client";
import { GlassCard } from './GlassCard';
import { Monitor, Server, Cloud, Zap, Code, Cpu } from 'lucide-react';

export function About() {

  return (
    <section id="about" className="min-h-screen py-20 sm:py-32 px-4 sm:px-8 relative">
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-purple-400/20 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="relative">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-thin text-white mb-5 sm:mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-28 sm:w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light px-1">
            Crafting the future with code. I'm a <span className="text-cyan-400 font-medium">full-stack architect</span> who 
            transforms ideas into digital experiences that push boundaries and redefine possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-20">
          <div className="group">
            <GlassCard className="p-6 sm:p-8 text-center border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10">
              <div className="relative mb-6">
                <Monitor className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl text-white mb-4 font-light">Frontend Mastery</h3>
              <p className="text-white/70 leading-relaxed">
                Architecting pixel-perfect interfaces with cutting-edge frameworks. Every interaction tells a story.
              </p>
            </GlassCard>
          </div>
          
          <div className="group">
            <GlassCard className="p-6 sm:p-8 text-center border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-400/10">
              <div className="relative mb-6">
                <Cpu className="w-12 h-12 sm:w-16 sm:h-16 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl text-white mb-4 font-light">Backend Engineering</h3>
              <p className="text-white/70 leading-relaxed">
                Building scalable architectures that power millions. Performance meets elegance in every line of code.
              </p>
            </GlassCard>
          </div>
          
          <div className="group">
            <GlassCard className="p-6 sm:p-8 text-center border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/10">
              <div className="relative mb-6">
                <Cloud className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl text-white mb-4 font-light">Cloud Innovation</h3>
              <p className="text-white/70 leading-relaxed">
                Orchestrating cloud-native solutions. From containers to Kubernetes, infrastructure as art.
              </p>
            </GlassCard>
          </div>
        </div>

        <div className="text-center">
          <GlassCard className="p-8 sm:p-12 max-w-5xl mx-auto border-white/10 hover:border-white/20 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-purple-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-white/80 mx-auto mb-4 sm:mb-6 group-hover:text-cyan-400 transition-colors duration-300" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-6 font-light">Ready to Build the Future?</h3>
              <p className="text-white/70 mb-6 sm:mb-10 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto px-1">
                Let's collaborate on something extraordinary. Whether it's a revolutionary app, 
                a complex system, or the next big thing—I'm here to make it happen.
              </p>
              <button 
                className="px-6 py-3 sm:px-10 sm:py-5 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 hover:from-cyan-400/30 hover:to-blue-400/30 text-white rounded-2xl transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/50 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 backdrop-blur-sm w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="text-base sm:text-lg font-medium">Let's Connect</span>
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}