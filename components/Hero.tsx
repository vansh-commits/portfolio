"use client";
import { useEffect, useState, useMemo } from 'react';
import { GlassCard } from './GlassCard';
import { Sparkles, ArrowDown } from 'lucide-react';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Deterministic pseudo-random generator to avoid hydration mismatches
  const particles = useMemo(() => {
    function mulberry32(a: number) {
      return function () {
        let t = (a += 0x6D2B79F5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }
    const seedBase = 123456789;
    return Array.from({ length: 20 }, (_, i) => {
      const rand = mulberry32(seedBase + i);
      const left = rand() * 100;
      const top = rand() * 100;
      const animationDelay = rand() * 3;
      const animationDuration = 2 + rand() * 2;
      return { left, top, animationDelay, animationDuration };
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const zoomScale = 1 + scrollY * 0.0008;
  const fadeOpacity = Math.max(0, 1 - scrollY * 0.0015);
  const parallaxX = mousePosition.x * 20;
  const parallaxY = mousePosition.y * 20;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-5 sm:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${parallaxX * 0.3}px, ${parallaxY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${-parallaxX * 0.2}px, ${-parallaxY * 0.2}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-2xl animate-ping"
          style={{ transform: `translate(-50%, -50%) translate(${parallaxX * 0.1}px, ${parallaxY * 0.1}px)` }}
        ></div>
      </div>

      {/* Floating particles (deterministic) */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.animationDelay}s`,
              animationDuration: `${p.animationDuration}s`,
            }}
          ></div>
        ))}
      </div>
      
      <div 
        className="max-w-5xl w-full transition-all duration-200 ease-out relative z-10"
        style={{ 
          transform: `scale(${zoomScale}) translate(${parallaxX * 0.5}px, ${parallaxY * 0.5}px)`,
          opacity: fadeOpacity
        }}
      >
        <GlassCard className="p-8 sm:p-10 md:p-16 lg:p-20 text-center border-white/10 backdrop-blur-xl relative overflow-hidden group">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-5 sm:mb-8">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mr-2 sm:mr-4 animate-spin" />
              <span className="text-cyan-400/80 uppercase tracking-widest text-sm sm:text-sm font-medium">Full Stack Developer</span>
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 ml-2 sm:ml-4 animate-spin" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-thin text-white mb-5 sm:mb-8 tracking-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Vansh Malhotra
            </h1>
            
            <div className="w-28 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-5 sm:mb-8 opacity-80"></div>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto font-light px-1">
              Building tomorrow's web, today. Crafting <span className="text-cyan-400 font-medium">immersive digital experiences</span> 
              that blur the line between imagination and reality.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:space-x-8">
              <button 
                className="group px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 hover:from-cyan-400/30 hover:to-blue-400/30 text-white rounded-2xl transition-all duration-500 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/50 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20 w-full sm:w-auto"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="text-lg sm:text-lg font-medium">Explore Work</span>
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </button>
              <button 
                className="group px-8 py-4 sm:px-10 sm:py-5 bg-transparent hover:bg-white/10 text-white rounded-2xl transition-all duration-500 border border-white/20 hover:border-white/40 hover:scale-105 w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="text-lg sm:text-lg font-medium">Let's Connect</span>
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" />
          <div className="w-0.5 h-8 sm:h-12 bg-gradient-to-b from-white/60 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}