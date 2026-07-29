import React from 'react';

export const LessonsGrid = () => {
  const lessons = [
    {
      num: "01",
      title: "Capital Discipline Under Pressure",
      text: "Deploying ₦19M+ across multiple ventures taught me to distinguish between strategic investment and reactive spending. I learned to budget for iteration, not perfection."
    },
    {
      num: "02",
      title: "Market Feedback as a Product Tool",
      text: "Products that didn't achieve initial traction revealed precise gaps in positioning, messaging, and market timing. I learned to treat market rejection as directional data."
    },
    {
      num: "03",
      title: "Audience as Infrastructure",
      text: "Building a 10,000+ Telegram community and 12,000+ YouTube audience before aggressive monetisation taught me that distribution is the product — and that audience trust is a compounding asset."
    },
    {
      num: "04",
      title: "Advertising as a Science",
      text: "Managing ₦15M+ in ad spend across campaigns transformed my approach from intuitive to systematic. I now think in conversion rates, CAC, LTV, and funnel architecture."
    },
    {
      num: "05",
      title: "Resilience as a Competitive Advantage",
      text: "Building through the aftermath of a pandemic, the closure of a family business, and the failure of startup experiments hardened my capacity for sustained execution under uncertainty."
    },
    {
      num: "06",
      title: "Structured Learning Compounds Returns",
      text: "The periods of formal education — Aptech, internship, self-study — produced frameworks that made my entrepreneurial decisions faster and more principled. Theory and practice multiply each other."
    }
  ];

  return (
    <section className="w-full px-6 md:px-12 py-24 border-t border-portfolio-border">
      
      <div className="w-full flex justify-between items-center text-portfolio-gold tracking-[0.2em] text-xs uppercase mb-12 font-semibold">
        <div>EARNED WISDOM</div>
      </div>

      <div className="mb-16 max-w-3xl">
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-white font-medium">
          The experiments that<br />
          <span className="text-portfolio-gold italic">didn't scale</span> taught me<br />
          more than those that<br />
          did.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {lessons.map((lesson) => (
          <div key={lesson.num} className="border border-portfolio-border bg-portfolio-bg p-8 md:p-12 hover:border-portfolio-gold/50 transition-colors duration-500">
            <div className="font-serif text-5xl md:text-6xl text-portfolio-gold font-bold mb-6 opacity-80">
              {lesson.num}
            </div>
            <h3 className="text-white text-xl font-medium mb-4">{lesson.title}</h3>
            <p className="text-portfolio-muted font-light leading-relaxed">
              {lesson.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 w-full border-t border-portfolio-border pt-16 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-portfolio-border bg-portfolio-gold-muted border-b">
        <div className="flex-1 p-12 flex items-center justify-center">
          <div className="font-serif text-5xl md:text-6xl text-portfolio-gold font-bold tracking-tighter">₦19M+</div>
        </div>
        <div className="flex-1 p-12 flex items-center justify-center">
          <div className="font-serif text-5xl md:text-6xl text-portfolio-gold font-bold tracking-tighter">4+</div>
        </div>
        <div className="flex-1 p-12 flex items-center justify-center">
          <div className="font-serif text-5xl md:text-6xl text-portfolio-gold font-bold tracking-tighter">5 Yrs</div>
        </div>
      </div>
      
      {/* Footer labels for the banner */}
      <div className="w-full flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-portfolio-border bg-portfolio-bg border-b border-portfolio-border">
        <div className="flex-1 p-4 flex items-center justify-center">
          <div className="text-portfolio-muted text-[10px] tracking-widest uppercase">TOTAL CAPITAL DEPLOYED</div>
        </div>
        <div className="flex-1 p-4 flex items-center justify-center">
          <div className="text-portfolio-muted text-[10px] tracking-widest uppercase">VENTURES BUILT</div>
        </div>
        <div className="flex-1 p-4 flex items-center justify-center">
          <div className="text-portfolio-muted text-[10px] tracking-widest uppercase">FOUNDER EXPERIENCE</div>
        </div>
      </div>

    </section>
  );
};
