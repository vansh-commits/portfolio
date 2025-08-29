"use client";
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  return (
    <div 
      className={`
        backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl shadow-2xl
        ${hover ? 'hover:bg-white/15 hover:border-white/20 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 ease-out' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}