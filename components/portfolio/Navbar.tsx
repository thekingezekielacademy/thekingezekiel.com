import React from 'react';

export const Navbar = () => {
  return (
    <header className="w-full px-6 md:px-12 py-8 border-b border-portfolio-border flex justify-between items-center bg-portfolio-bg/90 backdrop-blur-md sticky top-0 z-50">
      <a href="/" className="font-serif text-xl md:text-2xl font-bold text-white tracking-tighter">
        King<span className="text-portfolio-gold italic">Ezekiel</span>
      </a>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 text-[10px] tracking-[0.2em] uppercase font-semibold text-portfolio-muted">
        <a href="/#about" className="hover:text-portfolio-gold transition-colors">About</a>
        <a href="/#services" className="hover:text-portfolio-gold transition-colors">Services</a>
        <a href="/#projects" className="hover:text-portfolio-gold transition-colors">Projects</a>
        <a href="/#impact" className="hover:text-portfolio-gold transition-colors">Impact</a>
      </nav>

      <a href="/" className="md:hidden text-portfolio-muted text-[10px] tracking-[0.2em] uppercase hover:text-portfolio-gold transition-colors font-semibold">
        Return Home
      </a>
    </header>
  );
};
