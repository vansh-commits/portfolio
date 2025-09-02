import { topRowTechnologies, bottomRowTechnologies } from './constants/techData';
import { TechIcon, TechIconProps } from './TechIcon';

export function TechStack() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-8 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="relative">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-thin text-white mb-5 sm:mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Tech Arsenal
            </h2>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-28 sm:w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
          </div>
          <p className="text-lg sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light px-1">
            The powerful tools and technologies that fuel my digital creations. 
            Always learning, always evolving. 🚀
          </p>
        </div>

        {/* Top Marquee Row - Left to Right */}
        <div className="relative mb-8 overflow-hidden mask-gradient">
          <div className="flex animate-marquee-left space-x-6">
            {[...topRowTechnologies, ...topRowTechnologies].map((tech, index) => (
              <TechIcon key={`top-${index}`} tech={tech} direction="left" />
            ))}
          </div>
        </div>

        {/* Bottom Marquee Row - Right to Left */}
        <div className="relative overflow-hidden mask-gradient">
          <div className="flex animate-marquee-right space-x-6">
            {[...bottomRowTechnologies, ...bottomRowTechnologies].map((tech, index) => (
              <TechIcon key={`bottom-${index}`} tech={tech} direction="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
