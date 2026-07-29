import React from 'react';

export const TimelineSection = () => {
  return (
    <section className="w-full px-6 md:px-12 py-24 border-t border-portfolio-border bg-[#050505]">
      
      {/* Education Header */}
      <div className="w-full flex justify-between items-center text-portfolio-gold tracking-[0.2em] text-xs uppercase mb-16 font-semibold">
        <div>ACADEMIC BACKGROUND</div>
      </div>

      <div className="max-w-4xl">
        <p className="text-portfolio-muted text-xl font-light leading-relaxed mb-16">
          My academic journey reflects a deliberate combination of formal technical education and self-directed learning. I have pursued knowledge through structured institutions while simultaneously applying it in real-world commercial environments — a parallel path that has produced both depth and versatility.
        </p>

        {/* Education Timeline */}
        <div className="relative border-l border-portfolio-border pl-8 md:pl-12 space-y-16 ml-2 md:ml-4 mb-32">
          
          <div className="relative">
            <div className="absolute -left-[37px] md:-left-[53px] top-1 w-[10px] h-[10px] rounded-full bg-portfolio-gold ring-4 ring-portfolio-bg" />
            <div className="text-portfolio-gold font-mono text-sm mb-2">2018 — 2020</div>
            <h3 className="font-serif text-3xl font-medium text-white mb-2">Aptech Computer Education</h3>
            <div className="text-portfolio-muted text-lg mb-6">Advanced Diploma in Software Engineering</div>
            <p className="text-portfolio-muted font-light leading-relaxed mb-6">
              Completed a rigorous technical programme under the Middlesex University accreditation pathway, building foundational expertise in software engineering, systems architecture, and programming principles. This qualification provided the core technical foundation for my transition into technology entrepreneurship.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Software Engineering', 'Programming', 'Systems Design', 'Product Thinking', 'Middlesex University Pathway'].map(tag => (
                <span key={tag} className="px-3 py-1 border border-portfolio-border text-portfolio-muted text-xs tracking-wider rounded-sm">{tag}</span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[37px] md:-left-[53px] top-1 w-[10px] h-[10px] rounded-full bg-portfolio-gold ring-4 ring-portfolio-bg" />
            <div className="text-portfolio-gold font-mono text-sm mb-2">2017 — 2019</div>
            <h3 className="font-serif text-3xl font-medium text-white mb-2">Heartlife Nursery & Primary School</h3>
            <div className="text-portfolio-muted text-lg mb-6">Teaching & Educational Leadership</div>
            <p className="text-portfolio-muted font-light leading-relaxed mb-6">
              Served as a teacher and operational contributor at a family-run educational institution, gaining early professional exposure to communication systems, leadership responsibilities, student management, and educational programme delivery. This experience planted the seeds of an educational philosophy that would later manifest in digital form.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Educational Leadership', 'Communication', 'Curriculum Delivery', 'Organisational Operations'].map(tag => (
                <span key={tag} className="px-3 py-1 border border-portfolio-border text-portfolio-muted text-xs tracking-wider rounded-sm">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Entrepreneurial Header */}
        <div className="w-full flex justify-between items-center text-portfolio-gold tracking-[0.2em] text-xs uppercase mb-16 font-semibold pt-16 border-t border-portfolio-border">
          <div>ENTREPRENEURIAL TIMELINE</div>
        </div>

        {/* Entrepreneurial Timeline */}
        <div className="relative border-l border-portfolio-border pl-8 md:pl-12 space-y-20 ml-2 md:ml-4">
          
          <div className="relative">
            <div className="absolute -left-[37px] md:-left-[53px] top-1 w-[10px] h-[10px] rounded-full bg-portfolio-gold ring-4 ring-portfolio-bg" />
            <div className="text-portfolio-gold font-mono text-sm mb-2 uppercase tracking-widest">2022 — Transition Year</div>
            <h3 className="font-serif text-3xl font-medium text-white mb-4">Independence & First Ventures</h3>
            <p className="text-portfolio-muted font-light leading-relaxed mb-6">
              Following the completion of my internship and technical training, I made the deliberate decision to transition into full-time digital entrepreneurship. I launched Ad-Promoter, an advertising-focused startup experiment centred on promotional systems and digital reach. I began investing in digital marketing tools, building early audience assets, and developing the commercial instincts that would define the following years.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 border border-portfolio-gold/30 text-portfolio-gold text-xs tracking-wider rounded-sm bg-portfolio-gold-muted">Ad-Promoter · Market Entry · Advertising Experiments</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[37px] md:-left-[53px] top-1 w-[10px] h-[10px] rounded-full bg-portfolio-gold ring-4 ring-portfolio-bg" />
            <div className="text-portfolio-gold font-mono text-sm mb-2 uppercase tracking-widest">2023 — Growth Phase</div>
            <h3 className="font-serif text-3xl font-medium text-white mb-4">Community Building & Digital Expansion</h3>
            <p className="text-portfolio-muted font-light leading-relaxed mb-6">
              Focused aggressively on audience development, community architecture, and scalable digital distribution. Grew a Telegram community toward 10,000 members, expanded YouTube presence, and deepened expertise in paid advertising psychology, funnel design, and educational content strategy. This phase transformed me from an experimenter into an operator.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 border border-portfolio-gold/30 text-portfolio-gold text-xs tracking-wider rounded-sm bg-portfolio-gold-muted">10,000+ Telegram · YouTube Growth · Ad Spend Scale-Up</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[37px] md:-left-[53px] top-1 w-[10px] h-[10px] rounded-full bg-portfolio-gold ring-4 ring-portfolio-bg" />
            <div className="text-portfolio-gold font-mono text-sm mb-2 uppercase tracking-widest">2024 — Infrastructure Phase</div>
            <h3 className="font-serif text-3xl font-medium text-white mb-4">Building The King Ezekiel Academy & Platform Ventures</h3>
            <p className="text-portfolio-muted font-light leading-relaxed mb-6">
              Established The King Ezekiel Academy — a structured digital education platform providing courses, mentorship, and entrepreneurial training. Simultaneously developed Mimic Network, a large-scale social and technology platform experiment exploring community monetisation, digital connection, and platform architecture. This phase deepened experience in product design, system thinking, and startup management.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 border border-portfolio-gold/30 text-portfolio-gold text-xs tracking-wider rounded-sm bg-portfolio-gold-muted">Academy Launch · Mimic Network · Product Architecture</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[37px] md:-left-[53px] top-1 w-[10px] h-[10px] rounded-full bg-portfolio-gold ring-4 ring-portfolio-bg" />
            <div className="text-portfolio-gold font-mono text-sm mb-2 uppercase tracking-widest">2025 — Scale Phase</div>
            <h3 className="font-serif text-3xl font-medium text-white mb-4">Commercial Maturity & Major Metrics</h3>
            <p className="text-portfolio-muted font-light leading-relaxed mb-6">
              Reached the most commercially significant period of my career to date. Sold over 70,000+ digital course copies. Managed advertising campaigns exceeding ₦15 million in spend. Built YouTube to 12,000+ subscribers and Telegram to 10,000+ members. Total startup investment across ventures exceeded ₦19 million. This phase produced genuine founder maturity — forged through scale, risk, and execution.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 border border-portfolio-gold/30 text-portfolio-gold text-xs tracking-wider rounded-sm bg-portfolio-gold-muted">70K+ Courses · ₦15M+ Ad Spend · ₦19M+ Investment</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[37px] md:-left-[53px] top-1 w-[10px] h-[10px] rounded-full bg-portfolio-gold ring-4 ring-portfolio-bg shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
            <div className="text-portfolio-gold font-mono text-sm mb-2 uppercase tracking-widest">2026 — Current</div>
            <h3 className="font-serif text-3xl font-medium text-white mb-4">AI Products, AdParlay & The Next Chapter</h3>
            <p className="text-portfolio-muted font-light leading-relaxed mb-6">
              Currently developing ZENDA, an AI personal assistant product exploring productivity and intelligent user interaction. Co-founding AdParlay — a modern advertising and technology venture building scalable digital systems for business growth. Simultaneously expanding operations and building scalable digital infrastructure for the African market.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 border border-portfolio-gold/30 text-portfolio-gold text-xs tracking-wider rounded-sm bg-portfolio-gold-muted">ZENDA AI · AdParlay · Scaling Operations</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
