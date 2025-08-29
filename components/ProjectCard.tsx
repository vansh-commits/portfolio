import { GlassCard } from './GlassCard';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  live?: string;
  source?: string;
}

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
}

export function ProjectCard({ project, isHovered }: ProjectCardProps) {
  return (
    <GlassCard 
      hover={true} 
      className={`p-0 overflow-hidden group cursor-pointer border-white/10 transition-all duration-500 hover:border-cyan-400/30 relative ${
        isHovered ? 'shadow-2xl shadow-cyan-400/20 border-cyan-400/50' : ''
      }`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Overlay action icons on hover */}
        <div className="absolute inset-0 flex items-start justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-black/60 border border-white/20 text-white/90 hover:text-white hover:bg-black/70 backdrop-blur-sm transition-colors"
                aria-label="Open live demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-black/60 border border-white/20 text-white/90 hover:text-white hover:bg-black/70 backdrop-blur-sm transition-colors"
                aria-label="Open source code"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6 relative z-10">
        <h3 className="text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 font-light">
          {project.title}
        </h3>
        <p className="text-white/70 mb-4 leading-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tech.map((tech) => (
            <span 
              key={tech}
              className="px-2.5 py-1 bg-white/10 text-white/80 rounded-lg text-xs backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 hover:text-cyan-400 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Actions moved to image overlay */}
      </div>
    </GlassCard>
  );
}