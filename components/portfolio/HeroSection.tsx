import React from 'react';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex flex-col pt-8">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center px-6 md:px-12 text-[10px] md:text-xs tracking-[0.2em] text-portfolio-muted uppercase">
        <div>FOUNDER PORTFOLIO — 2026</div>
        <div>CONFIDENTIAL</div>
      </div>

      <div className="flex-1 w-full flex flex-col md:flex-row px-6 md:px-12 py-8 md:py-16 gap-12">
        {/* Left Side: Image */}
        <div className="w-full md:w-5/12 h-[60vh] md:h-auto relative overflow-hidden rounded-sm group">
          {/* Subtle gradient overlay at bottom of image like in PDF */}
          <div className="absolute inset-0 bg-gradient-to-t from-portfolio-bg via-transparent to-transparent z-10 pointer-events-none opacity-80" />
          <div className="absolute inset-0 bg-portfolio-card animate-pulse -z-10 flex items-center justify-center text-portfolio-muted text-sm">
            [Insert Image in public/images/hero.jpg]
          </div>
          {/* Using object-cover to match the PDF portrait crop */}
          <Image
            src="/images/hero.jpg"
            alt="King Ezekiel"
            fill
            className="object-cover object-center grayscale-[0.2] contrast-125 transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>

        {/* Right Side: Typography & Tags */}
        <div className="w-full md:w-7/12 flex flex-col justify-end pb-8">
          <div className="text-portfolio-gold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 font-semibold">
            FOUNDER · BUILDER · EDUCATOR
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] text-white tracking-tight mb-8">
            King<br />
            <span className="text-portfolio-gold italic font-medium">Ezekiel</span>
          </h1>
          
          <p className="text-portfolio-muted text-lg md:text-xl max-w-xl leading-relaxed mb-12 font-light">
            Digital entrepreneur, product builder, and technology-focused educator on a mission to build scalable, AI-powered systems for Africa and beyond.
          </p>
          
          {/* Tags Grid */}
          <div className="flex flex-wrap gap-3">
            {['AI PRODUCTS', 'EDTECH', 'DIGITAL MARKETING', 'FOUNDER', 'AD SYSTEMS', 'PRODUCT'].map((tag) => (
              <div 
                key={tag} 
                className="px-4 py-2 border border-portfolio-border text-portfolio-gold text-xs tracking-[0.1em] uppercase hover:bg-portfolio-gold hover:text-portfolio-bg transition-colors cursor-default"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
