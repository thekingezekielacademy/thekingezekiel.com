"use client";

import React, { useState } from 'react';

export default function WaSalesMachineFullPackagePage() {
  const [accessState, setAccessState] = useState<'idle' | 'granting' | 'granted'>('idle');
  const [targetUrl, setTargetUrl] = useState<string | null>(null);

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

  function handleWatch(url: string) {
    setTargetUrl(url);
    setAccessState('granting');
    
    setTimeout(() => {
      setAccessState('granted');
      
      setTimeout(() => {
        window.open(url, '_blank', 'noreferrer,noopener');
        setTimeout(() => {
          setAccessState('idle');
          setTargetUrl(null);
        }, 1000);
      }, 800);
      
    }, 2500);
  }

  return (
    <main className="min-h-screen bg-portfolio-bg selection:bg-[#25D366] selection:text-black font-sans relative">
      
      {/* ACCESS MODAL */}
      {accessState !== 'idle' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300">
          <div className="flex flex-col items-center justify-center text-center p-8 rounded-3xl border border-[#25D366]/30 bg-[#25D366]/5 shadow-[0_0_50px_rgba(37,211,102,0.15)] max-w-sm w-full mx-4">
            
            {accessState === 'granting' ? (
              <>
                <div className="relative flex h-16 w-16 items-center justify-center mb-6">
                  <div className="absolute inset-0 rounded-full border-t-2 border-[#25D366] animate-spin"></div>
                  <div className="absolute inset-2 rounded-full border-r-2 border-[#25D366]/60 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                  <span className="text-xl">🔐</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">GRANTING ACCESS...</h3>
                <p className="text-sm text-[#25D366] animate-pulse">King Ezekiel is granting access...</p>
              </>
            ) : (
              <>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/20 mb-6 border border-[#25D366]">
                  <svg className="w-8 h-8 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#25D366] mb-2 tracking-wide shadow-sm">ACCESS GRANTED!</h3>
                <p className="text-sm text-portfolio-muted">Opening your course...</p>
              </>
            )}

          </div>
        </div>
      )}

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
                <button
                  onClick={() => handleWatch(item.href)}
                  className="inline-flex w-full items-center justify-center rounded-xl border border-[#25D366] bg-[#25D366] px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-portfolio-bg"
                >
                  WATCH THIS COURSE
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
