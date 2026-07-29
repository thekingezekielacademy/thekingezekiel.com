import React from 'react';

export const ServicesSection = () => {
  const services = [
    {
      title: "Advertising",
      description: "Data-driven paid media campaigns designed for measurable conversion, leveraging deep psychology and rigorous funnel math.",
      icon: "fa-solid fa-bullhorn"
    },
    {
      title: "Sales Funnel Generation",
      description: "Architecting high-converting digital pathways that turn cold traffic into deeply engaged buyers.",
      icon: "fa-solid fa-filter"
    },
    {
      title: "Web Development",
      description: "Building fast, premium, and highly scalable digital real estate that perfectly aligns with brand positioning.",
      icon: "fa-solid fa-code"
    },
    {
      title: "Automation",
      description: "Implementing intelligent workflows and AI systems that remove friction and massively scale operational capacity.",
      icon: "fa-solid fa-robot"
    },
    {
      title: "Digital Systems Building",
      description: "Creating the underlying architecture that connects marketing, sales, product delivery, and customer retention into one cohesive machine.",
      icon: "fa-solid fa-network-wired"
    }
  ];

  return (
    <section id="services" className="w-full px-6 md:px-12 py-24 border-t border-portfolio-border bg-[#050505]">
      
      <div className="w-full flex justify-between items-center text-portfolio-gold tracking-[0.2em] text-xs uppercase mb-12 font-semibold">
        <div>CORE COMPETENCIES</div>
      </div>

      <div className="max-w-4xl mb-16">
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-white font-medium mb-8">
          Systems designed to<br />
          <span className="text-portfolio-gold italic">scale</span> revenue and<br />
          operations.
        </h2>
        <p className="text-portfolio-muted text-xl font-light leading-relaxed">
          I do not just offer advice; I build the infrastructure. From the first ad impression to the final backend automation, these are the disciplines I deploy to generate measurable commercial outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-portfolio-border border border-portfolio-border rounded-sm overflow-hidden">
        {services.map((service, index) => (
          <div key={index} className="bg-portfolio-bg p-8 md:p-12 hover:bg-[#0a0a0a] transition-colors duration-500 group">
            <div className="text-portfolio-gold text-2xl mb-8 opacity-80 group-hover:scale-110 transition-transform origin-left">
              <i className={service.icon}></i>
            </div>
            <h3 className="font-serif text-2xl text-white font-medium mb-4">{service.title}</h3>
            <p className="text-portfolio-muted font-light leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
        {/* Placeholder for symmetry if needed, or an intro block */}
        <div className="bg-portfolio-card p-8 md:p-12 flex flex-col justify-center items-center text-center border-t md:border-t-0 border-portfolio-gold/20">
            <div className="font-serif text-4xl text-portfolio-gold italic mb-4">Let's Build.</div>
            <p className="text-portfolio-muted text-xs tracking-widest uppercase">READY TO DEPLOY</p>
        </div>
      </div>

    </section>
  );
};
