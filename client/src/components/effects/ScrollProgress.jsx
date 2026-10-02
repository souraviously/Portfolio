import React, { useState } from "react";
import { useLenis } from 'lenis/react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const lenis = useLenis(({ scroll, limit }) => {
    const progress = (scroll / limit) * 100;
    setScrollProgress(progress);
  });

  const scrollToTop = () => {
    lenis?.scrollTo(0, { duration: 1.5 });
  };

  return (
    <div 
      onClick={scrollToTop} 
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-center group animate-float cursor-pointer"
    >
      <div className="relative w-14 h-20 md:w-16 md:h-24 rounded-xl md:rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl transition-transform active:scale-95">
        
        {/* Fill Layer: REMOVED duration-700 for instant response */}
        <div
          className="absolute bottom-0 left-0 w-full bg-[#BF4A1A] shadow-[0_-5px_20px_#BF4A1A]"
          style={{ height: `${scrollProgress}%` }}
        />

        {/* Icons & Text: REMOVED duration-500 so colors swap immediately */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center gap-1 md:gap-2">
          <svg
            className={`w-5 h-5 md:w-6 md:h-6 duration-300 ${scrollProgress > 75 ? 'text-white' : 'text-[#BF4A1A]'}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
          </svg>

          <span className={`text-[10px] md:text-xs font-black duration-300 ${scrollProgress > 35 ? 'text-white' : 'text-[#BF4A1A]'}`}>
            {Math.round(scrollProgress) || 0}%
          </span>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        @media (max-width: 640px) { .animate-float { animation: none; } }
      `}</style>
    </div>
  );
};

export default ScrollProgress;