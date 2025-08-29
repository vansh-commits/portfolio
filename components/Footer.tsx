import { Heart, Sparkles } from 'lucide-react';
import { socialLinks, funFacts } from './constants/footerData';

export function Footer() {

  return (
    <footer id="contact" className="py-20 px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-950/50 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-cyan-400 mr-3 animate-pulse" />
            <h3 className="text-5xl font-thin text-white bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Let's Vibe & Build
            </h3>
            <Sparkles className="w-6 h-6 text-cyan-400 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-white/70 mb-8 font-light">
            Ready to create something that absolutely <span className="text-cyan-400 font-medium">slaps</span>? 
            Hit me up and let's make magic happen! ✨
          </p>
          <div className="text-white/60 text-lg">
            No cap, I'm always down for cool projects 🚀
          </div>
        </div>

        {/* Fun facts section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {funFacts.map((fact, index) => (
            <div 
              key={index}
              className="group p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <fact.icon className={`w-6 h-6 ${fact.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`} />
              <p className="text-white/70 text-sm font-light">{fact.text}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
            <a
              key={label}
              href={href}
              className={`group p-5 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-500 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-110 hover:shadow-xl hover:shadow-white/10`}
              aria-label={label}
              target='_blank'
            >
              <Icon 
                size={28} 
                className={`text-white/80 group-hover:text-white transition-all duration-300 ${hoverColor}`}
              />
            </a>
          ))}
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 text-white/60">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
            <span>and probably too much caffeine</span>
          </div>
          
          <div className="pt-8 border-t border-white/20">
            <p className="text-white/50 font-light">
              © 2025 Vansh Malhotra. All rights reserved. 
              <span className="text-cyan-400/70"> No 🧢</span>
            </p>
            <div className="mt-2 text-white/40 text-sm">
              This website is lowkey fire 🔥 (I'm not biased at all)
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}