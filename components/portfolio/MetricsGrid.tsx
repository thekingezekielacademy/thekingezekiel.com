import React from 'react';

export const MetricsGrid = () => {
  return (
    <section id="impact" className="w-full px-6 md:px-12 py-24 border-t border-portfolio-border">
      <div className="text-portfolio-gold tracking-[0.2em] text-xs uppercase mb-12 font-semibold">
        MEASURED IMPACT
      </div>
      
      <div className="flex flex-col lg:flex-row gap-16 md:gap-24 mb-16">
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-white font-medium lg:w-1/2">
          Numbers that tell a<br />
          story of <span className="text-portfolio-gold italic">real</span><br />
          commercial operation.
        </h2>
        
        <div className="lg:w-1/2 flex items-center">
          <p className="text-portfolio-muted text-xl font-light leading-relaxed">
            These figures are not projections or theoretical targets. They represent real advertising spend, real community members, real products sold, and real capital deployed in the pursuit of building something meaningful.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-portfolio-border border border-portfolio-border rounded-sm overflow-hidden mb-8">
        
        {/* Metric 1 */}
        <div className="bg-portfolio-bg p-8 md:p-12 flex flex-col justify-between">
          <div>
            <span className="text-portfolio-muted text-[10px] tracking-[0.15em] uppercase font-semibold block mb-4">DIGITAL COURSE COPIES SOLD</span>
            <div className="font-serif text-7xl md:text-8xl text-white font-bold tracking-tighter flex items-end">
              70<span className="text-portfolio-gold text-5xl md:text-6xl pb-2 md:pb-4 ml-1">K+</span>
            </div>
          </div>
          <p className="text-portfolio-muted font-light mt-8">
            Educational digital products distributed via The King Ezekiel Academy and associated platforms, across multiple digital learning formats.
          </p>
        </div>

        {/* Metric 2 */}
        <div className="bg-portfolio-bg p-8 md:p-12 flex flex-col justify-between">
          <div>
            <span className="text-portfolio-muted text-[10px] tracking-[0.15em] uppercase font-semibold block mb-4">TOTAL ADVERTISING SPEND</span>
            <div className="font-serif text-7xl md:text-8xl text-white font-bold tracking-tighter flex items-end relative">
              <span className="absolute -left-2 top-0 opacity-10 text-9xl">₦</span>
              ₦15<span className="text-portfolio-gold text-5xl md:text-6xl pb-2 md:pb-4 ml-1">M+</span>
            </div>
          </div>
          <p className="text-portfolio-muted font-light mt-8">
            Paid advertising campaigns managed across multiple platforms — including Meta, Google, and local digital channels. Full budget responsibility, strategy, and optimisation.
          </p>
        </div>

        {/* Metric 3 */}
        <div className="bg-portfolio-bg p-8 md:p-12 flex flex-col justify-between">
          <div>
            <span className="text-portfolio-muted text-[10px] tracking-[0.15em] uppercase font-semibold block mb-4">YOUTUBE SUBSCRIBERS</span>
            <div className="font-serif text-7xl md:text-8xl text-white font-bold tracking-tighter flex items-end">
              12<span className="text-portfolio-gold text-5xl md:text-6xl pb-2 md:pb-4 ml-1">K+</span>
            </div>
          </div>
          <p className="text-portfolio-muted font-light mt-8">
            Organic and paid audience built across educational content, entrepreneurship training, and digital marketing topics on YouTube.
          </p>
        </div>

        {/* Metric 4 */}
        <div className="bg-portfolio-bg p-8 md:p-12 flex flex-col justify-between">
          <div>
            <span className="text-portfolio-muted text-[10px] tracking-[0.15em] uppercase font-semibold block mb-4">TELEGRAM COMMUNITY MEMBERS</span>
            <div className="font-serif text-7xl md:text-8xl text-white font-bold tracking-tighter flex items-end">
              10<span className="text-portfolio-gold text-5xl md:text-6xl pb-2 md:pb-4 ml-1">K+</span>
            </div>
          </div>
          <p className="text-portfolio-muted font-light mt-8">
            Active digital community built around digital entrepreneurship, education, and business development — with consistent engagement and content output.
          </p>
        </div>

      </div>

      {/* Hero Metric Banner */}
      <div className="w-full border border-portfolio-gold/30 bg-portfolio-card flex flex-col md:flex-row items-center p-8 md:p-12 gap-8 relative overflow-hidden rounded-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-portfolio-gold/10 to-transparent pointer-events-none" />
        <div className="text-6xl md:text-8xl text-portfolio-gold font-serif opacity-80 z-10">₦</div>
        <div className="z-10">
          <h3 className="text-portfolio-gold text-xl md:text-2xl font-serif font-medium mb-2">₦19 Million+ Deployed Across Startup Ventures</h3>
          <p className="text-portfolio-muted font-light leading-relaxed">
            Total personal capital invested across multiple technology experiments, product development cycles, advertising systems, and startup infrastructure — representing a level of commercial commitment and financial risk that goes well beyond academic participation.
          </p>
        </div>
      </div>

    </section>
  );
};
