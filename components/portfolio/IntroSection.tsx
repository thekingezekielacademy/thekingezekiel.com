import React from 'react';

export const IntroSection = () => {
  return (
    <section id="about" className="w-full px-6 md:px-12 py-24 border-t border-portfolio-border">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Left Side: Quote */}
        <div className="w-full md:w-5/12">
          <div className="text-portfolio-gold tracking-[0.2em] text-xs uppercase mb-12 font-semibold">
            WHO I AM
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-white font-medium">
            A builder who<br />
            learned to <span className="text-portfolio-gold italic">execute</span><br />
            before he learned to<br />
            theorise.
          </h2>
        </div>

        {/* Right Side: Bio & Grid */}
        <div className="w-full md:w-7/12 flex flex-col justify-end">
          <div className="space-y-6 text-portfolio-muted text-lg font-light leading-relaxed mb-20 max-w-2xl">
            <p>
              My name is Olugbode Oluwaseyi Ezekiel — known professionally as King Ezekiel. I am a Nigerian-born digital entrepreneur, product builder, and technology-focused educator whose career has been defined not by certificates or classrooms, but by the weight of real decisions made under real pressure.
            </p>
            <p>
              I began my professional journey as a teacher, transitioned into formal technical training, completed an industry internship, and then — at a point where most people wait for permission — I built. I launched products, ran advertising campaigns, built communities, sold digital education at scale, and invested in startup ideas that tested my conviction and sharpened my judgment.
            </p>
            <p>
              Today, I lead The King Ezekiel Academy, co-found AdParlay, and am developing ZENDA — an AI personal assistant designed to change how people interact with productivity tools. My focus is on building scalable businesses and empowering the next generation of African founders to compete on a global stage.
            </p>
          </div>

          {/* Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-portfolio-border border border-portfolio-border rounded-sm overflow-hidden">
            <div className="bg-portfolio-bg p-8 flex flex-col gap-2">
              <span className="text-portfolio-gold text-[10px] tracking-[0.15em] uppercase font-semibold">FULL LEGAL NAME</span>
              <span className="text-white text-lg">Olugbode Oluwaseyi Ezekiel</span>
            </div>
            <div className="bg-portfolio-bg p-8 flex flex-col gap-2">
              <span className="text-portfolio-gold text-[10px] tracking-[0.15em] uppercase font-semibold">PROFESSIONAL NAME</span>
              <span className="text-white text-lg">King Ezekiel</span>
            </div>
            <div className="bg-portfolio-bg p-8 flex flex-col gap-2">
              <span className="text-portfolio-gold text-[10px] tracking-[0.15em] uppercase font-semibold">PRIMARY ROLES</span>
              <span className="text-white text-lg">Founder · Co-Founder · Educator</span>
            </div>
            <div className="bg-portfolio-bg p-8 flex flex-col gap-2">
              <span className="text-portfolio-gold text-[10px] tracking-[0.15em] uppercase font-semibold">CORE DOMAINS</span>
              <span className="text-white text-lg">AI · EdTech · Marketing · Product</span>
            </div>
            <div className="bg-portfolio-bg p-8 flex flex-col gap-2">
              <span className="text-portfolio-gold text-[10px] tracking-[0.15em] uppercase font-semibold">BASE OF OPERATIONS</span>
              <span className="text-white text-lg">Nigeria (Pan-African focus)</span>
            </div>
            <div className="bg-portfolio-bg p-8 flex flex-col gap-2">
              <span className="text-portfolio-gold text-[10px] tracking-[0.15em] uppercase font-semibold">VISION</span>
              <span className="text-white text-lg">Empowering African Founders Globally</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
