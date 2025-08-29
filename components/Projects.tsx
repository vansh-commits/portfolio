"use client";
import { useState, useRef } from 'react';
import { projects } from './constants/projectData';
import { handleMouseMove, getProjectTransform, getAnimationClass } from './utils/projectHelpers';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="min-h-screen py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-light text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A curated selection of my latest work showcasing innovation and creativity
          </p>
        </div>
        
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`transform transition-all duration-500 ease-out ${getAnimationClass(index)}`}
              style={{
                transform: getProjectTransform(index, hoveredCard, project.id, mousePosition),
                transition: hoveredCard === project.id ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
              }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => {
                setHoveredCard(null);
                setMousePosition({ x: 0, y: 0 });
              }}
              onMouseMove={(e) => handleMouseMove(e, containerRef, setMousePosition)}
            >
              <ProjectCard 
                project={project} 
                isHovered={hoveredCard === project.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}