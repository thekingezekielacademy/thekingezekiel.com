import React from 'react';

export default function WaSalesMachineFullPackagePage() {
  const courseItems = [
    {
      title: 'MARKETING 101: Understanding the WHO, WHAT, HOW & WHY!',
      subtitle: 'Must watch if you want to sell anything online today',
      href: 'https://www.youtube.com/playlist?list=PLYFx2PudBxIY',
    },
    {
      title: 'WHATSAPP AUTOMATION + PRO FACEBOOK ADS',
      subtitle: 'Automate your replies, messages, comments and customer interactions.',
      href: 'https://www.youtube.com/playlist?list=PLSQqShcvhT5Y',
    },
    {
      title: 'THE FIX PACKAGE by KING EZEKIEL',
      subtitle: 'Stop letting account problems block your income.',
      href: 'https://www.youtube.com/playlist?list=PLOqvco0nHFqw',
    },
  ];

  return (
    <main className="min-h-screen bg-portfolio-bg selection:bg-[#25D366] selection:text-black font-sans">
      <div className="mx-auto max-w-[1200px] border-x border-portfolio-border bg-portfolio-bg px-4 py-10 sm:px-6 md:px-10 lg:px-12">
        <header className="mb-10 text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#25D366] sm:text-xs">
            FULL ACCESS
          </p>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#25D366] sm:text-xs">
            WHATSAPP AUTOMATION + FACEBOOK ADS
          </p>
          <h1 className="text-3xl font-bold leading-none tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[4rem]">
            WA SALES MACHINE FULL PACKAGE
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-portfolio-muted sm:text-lg">
            Learn How to turn your WhatsApp into a sales machine?
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg font-semibold text-portfolio-fg sm:text-xl">
            Stop losing customers because you couldn&apos;t reply on time. Automate your WhatsApp to work 24/7 — while you rest, sleep, or focus on other things.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {courseItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[22px] border border-portfolio-border bg-portfolio-card p-5 sm:p-6"
            >
              <h2 className="text-lg font-semibold uppercase tracking-[0.12em] text-[#25D366] sm:text-xl">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-portfolio-muted sm:text-base">
                {item.subtitle}
              </p>

              <div className="mt-6">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-[#25D366] bg-[#25D366] px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-portfolio-bg"
                >
                  WATCH THIS COURSE
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
