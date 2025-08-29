"use client";
import { GlassCard } from './GlassCard';

export function Navbar() {
  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <GlassCard className="px-8 py-4 border-white/10">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/90 hover:text-white transition-all duration-300 relative group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </GlassCard>
    </nav>
  );
}