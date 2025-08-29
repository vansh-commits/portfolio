import { topRowTechnologies } from './constants/techData';

export interface TechIconProps {
  tech: typeof topRowTechnologies[0];
  direction: 'left' | 'right';
}

export function TechIcon({ tech }: TechIconProps) {
  const IconComponent = tech.icon;
  
  return (
    <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/10 hover:border-white/30 transition-all duration-500 group hover:scale-105 hover:shadow-lg hover:shadow-white/10">
      <div 
        className="w-10 h-10 transition-all duration-300 group-hover:scale-110 drop-shadow-lg" 
        style={{ color: tech.color }}
      >
        {tech.slug ? (
          <img
            alt={tech.name}
            src={`https://cdn.simpleicons.org/${tech.slug}/${(tech.color || '#ffffff').replace('#','')}`}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        ) : (
          <IconComponent />
        )}
      </div>
      <span className="text-white/90 whitespace-nowrap group-hover:text-white transition-colors duration-300 font-medium">
        {tech.name}
      </span>
    </div>
  );
}