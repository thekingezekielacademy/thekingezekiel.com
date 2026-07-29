import React from 'react';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full px-6 md:px-12 py-24 border-t border-portfolio-border bg-[#050505]">
      
      <div className="w-full flex justify-between items-center text-portfolio-gold tracking-[0.2em] text-xs uppercase mb-12 font-semibold">
        <div>WHAT I'VE BUILT</div>
      </div>

      <div className="max-w-4xl mb-16">
        <p className="text-portfolio-muted text-xl font-light leading-relaxed">
          Each product in this section represents a deliberate investment of time, capital, and intellectual energy. Some reached scale; some served primarily as market education. All of them produced compounding knowledge that informs the ventures I operate today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* KE Academy */}
        <div className="md:col-span-2 border border-portfolio-border bg-portfolio-bg p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-8 right-8 border border-portfolio-gold/40 text-portfolio-gold text-[10px] tracking-widest px-3 py-1 uppercase rounded-sm">
            CURRENT
          </div>
          
          <div className="w-16 h-16 border border-portfolio-gold flex items-center justify-center mb-8">
            <span className="font-serif text-2xl text-portfolio-gold font-bold">KE</span>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl text-white font-medium mb-2">The King Ezekiel Academy</h3>
          <div className="text-portfolio-gold tracking-widest text-[10px] uppercase mb-6">2024 — PRESENT · FOUNDER</div>

          <p className="text-portfolio-muted font-light leading-relaxed mb-8 max-w-4xl">
            A full-scale digital education platform delivering courses, training programmes, and entrepreneurial mentorship to thousands of students across Nigeria and the wider African digital economy. The Academy has distributed over 70,000+ course copies and operates as a structured EdTech business with funnels, paid traffic, community management, and course infrastructure.
          </p>

          <div className="flex flex-wrap gap-3">
            {['EdTech', 'Digital Courses', 'Funnel Design', 'Paid Advertising', 'Community Building', 'Product Management'].map(tag => (
              <span key={tag} className="px-3 py-1 border border-portfolio-border text-portfolio-muted text-xs tracking-wider rounded-sm hover:border-portfolio-gold transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* AdParlay */}
        <div className="border border-portfolio-border bg-portfolio-bg p-8 md:p-12 relative overflow-hidden group">
          <div className="w-16 h-16 border border-portfolio-gold flex items-center justify-center mb-8">
            <span className="font-serif text-2xl text-portfolio-gold font-bold">AP</span>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl text-white font-medium mb-2">AdParlay</h3>
          <div className="text-portfolio-gold tracking-widest text-[10px] uppercase mb-6">2026 — PRESENT · CO-FOUNDER</div>

          <p className="text-portfolio-muted font-light leading-relaxed mb-8">
            A modern technology and advertising venture building scalable digital systems for advertising innovation, audience growth, and business development. Designed to be a commercially relevant solution in the growing Nigerian and Pan-African digital advertising market.
          </p>

          <div className="flex flex-wrap gap-3 mt-auto">
            {['Ad Tech', 'Digital Systems', 'B2B', 'Growth'].map(tag => (
              <span key={tag} className="px-3 py-1 border border-portfolio-border text-portfolio-muted text-xs tracking-wider rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ZENDA AI */}
        <div className="border border-portfolio-border bg-portfolio-bg p-8 md:p-12 relative overflow-hidden group">
          <div className="w-16 h-16 border border-portfolio-gold flex items-center justify-center mb-8">
            <span className="font-serif text-2xl text-portfolio-gold font-bold">Z</span>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl text-white font-medium mb-2">ZENDA AI</h3>
          <div className="text-portfolio-gold tracking-widest text-[10px] uppercase mb-6">2026 — IN DEVELOPMENT</div>

          <p className="text-portfolio-muted font-light leading-relaxed mb-8">
            An AI personal assistant exploring intelligent productivity, user interaction design, and smart automation. ZENDA represents the convergence of my technical education, entrepreneurial experience, and growing AI expertise.
          </p>

          <div className="flex flex-wrap gap-3 mt-auto">
            {['Artificial Intelligence', 'Product Design', 'UX', 'Automation'].map(tag => (
              <span key={tag} className="px-3 py-1 border border-portfolio-border text-portfolio-muted text-xs tracking-wider rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Mimic Network */}
        <div className="md:col-span-2 border border-portfolio-border bg-portfolio-bg p-8 md:p-12 relative overflow-hidden group mt-4">
          <div className="w-16 h-16 border border-portfolio-gold flex items-center justify-center mb-8">
            <span className="font-serif text-2xl text-portfolio-gold font-bold">MN</span>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl text-white font-medium mb-2">Mimic Network</h3>
          <div className="text-portfolio-gold tracking-widest text-[10px] uppercase mb-6">2024 — 2025 · ITERATION</div>

          <p className="text-portfolio-muted font-light leading-relaxed mb-8 max-w-4xl">
            A large-scale social and technology platform experiment exploring connection, digital community, monetisation architecture, and platform thinking. Produced valuable product development and market testing experience.
          </p>

          <div className="flex flex-wrap gap-3">
            {['Platform Architecture', 'Community Design', 'Market Testing'].map(tag => (
              <span key={tag} className="px-3 py-1 border border-portfolio-border text-portfolio-muted text-xs tracking-wider rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
