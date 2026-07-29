import React from 'react';

export const VisionFooter = () => {
  return (
    <footer className="w-full">
      {/* Vision Section */}
      <section className="px-6 md:px-12 py-24 bg-[#050505] border-t border-portfolio-border">
        <div className="text-portfolio-gold tracking-[0.2em] text-xs uppercase mb-12 font-semibold">
          LONG-TERM DIRECTION
        </div>
        
        <div className="mb-20 max-w-4xl">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-white font-medium">
            To build technology and<br />
            education systems that<br />
            make the next generation of<br />
            <span className="text-portfolio-gold italic">African founders</span> globally<br />
            competitive.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-portfolio-border border border-portfolio-border rounded-sm overflow-hidden mb-16">
          <div className="bg-portfolio-bg p-8 flex flex-col items-center text-center">
            <div className="text-portfolio-gold mb-6">
              <i className="fa-solid fa-diamond"></i>
            </div>
            <h3 className="text-white font-bold mb-4">AI-Powered Education</h3>
            <p className="text-portfolio-muted text-sm font-light">
              Building intelligent, adaptive learning systems that deliver world-class education at African scale and African cost.
            </p>
          </div>
          <div className="bg-portfolio-bg p-8 flex flex-col items-center text-center">
            <div className="text-portfolio-gold mb-6">
              <i className="fa-solid fa-diamond"></i>
            </div>
            <h3 className="text-white font-bold mb-4">African Tech Innovation</h3>
            <p className="text-portfolio-muted text-sm font-light">
              Creating technology products designed by Africans, for Africa, with the ambition to export them globally.
            </p>
          </div>
          <div className="bg-portfolio-bg p-8 flex flex-col items-center text-center">
            <div className="text-portfolio-gold mb-6">
              <i className="fa-solid fa-diamond"></i>
            </div>
            <h3 className="text-white font-bold mb-4">Founder Ecosystems</h3>
            <p className="text-portfolio-muted text-sm font-light">
              Building infrastructure — academies, platforms, communities — that produce more builders, not just more consumers of technology.
            </p>
          </div>
        </div>

        <div className="border-l-4 border-portfolio-gold pl-8 md:pl-12 py-4 max-w-4xl">
          <p className="font-serif text-2xl md:text-3xl text-portfolio-muted italic leading-relaxed">
            "I do not want to be a founder who builds one thing and stops. I want to build an ecosystem — a network of products, platforms, and people that changes what is possible for the next generation of African entrepreneurs. That work has already begun. The products we build today are the next layer of the foundation."
          </p>
        </div>
      </section>

      {/* Contact & Links */}
      <section className="px-6 md:px-12 py-32 flex flex-col items-center justify-center border-t border-portfolio-border relative overflow-hidden">
        
        <div className="text-portfolio-gold tracking-[0.2em] text-[10px] uppercase mb-8 font-semibold">
          Thank You For Your Consideration
        </div>

        <h2 className="font-serif text-6xl md:text-8xl font-bold text-white mb-6 text-center">
          King <span className="text-portfolio-gold">Ezekiel</span>
        </h2>
        
        <p className="font-serif text-xl md:text-2xl text-portfolio-muted italic mb-16 text-center">
          Founder · Builder · Educator · Technology Entrepreneur
        </p>

        <div className="w-16 h-[1px] bg-portfolio-gold/50 mb-16"></div>

        <div className="flex flex-wrap justify-center gap-4 mb-24 max-w-4xl">
          {[
            { label: 'thekingezekiel.com', icon: 'fa-solid fa-globe', href: 'https://thekingezekiel.com' },
            { label: 'Academy', icon: 'fa-solid fa-graduation-cap', href: 'https://app.thekingezekielacademy.com' },
            { label: 'YouTube', icon: 'fa-brands fa-youtube', href: 'http://YouTube.com/thekingezekiel' },
            { label: 'Instagram', icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/itskingezekiel' },
            { label: 'Facebook', icon: 'fa-brands fa-facebook', href: 'https://www.facebook.com/itskingezekiel' },
            { label: 'Telegram Channel', icon: 'fa-brands fa-telegram', href: 'https://t.me/kingezekielfreetraining' },
            { label: 'Telegram Community', icon: 'fa-brands fa-telegram', href: 'https://t.me/KEFREETraining' },
            { label: 'LinkedIn', icon: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/king-ezekiel-a685661b7' },
            { label: 'Google Profile', icon: 'fa-brands fa-google', href: 'https://g.co/kgs/8m8P7FY' },
          ].map((link) => (
            <a 
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-portfolio-border hover:border-portfolio-gold text-portfolio-muted hover:text-portfolio-gold transition-colors text-xs font-mono flex items-center gap-3"
            >
              <i className={`${link.icon} text-portfolio-gold`}></i>
              {link.label}
            </a>
          ))}
        </div>

        <div className="max-w-2xl text-center">
          <p className="font-serif text-2xl md:text-3xl text-portfolio-muted italic leading-relaxed">
            "The work is already in progress. Building scalable businesses is the next chapter — and this portfolio is the evidence of that journey."
          </p>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="w-full px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs tracking-[0.2em] uppercase border-t border-portfolio-border">
        <div className="text-portfolio-muted mb-4 md:mb-0">
          OLUGBODE OLUWASEYI EZEKIEL · PORTFOLIO 2026 · CONFIDENTIAL
        </div>
        <div className="text-portfolio-gold font-serif italic capitalize tracking-normal text-lg">
          King Ezekiel
        </div>
      </div>
    </footer>
  );
};
