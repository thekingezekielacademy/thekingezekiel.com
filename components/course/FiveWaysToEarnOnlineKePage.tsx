"use client";

import { useState, useEffect } from "react";

const CHOSEN_SKILL_STORAGE_KEY = "chosen_skill_5ways_ke";

type SkillOption = {
  id: string;
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  links: { label: string; href: string }[];
};

const SKILL_OPTIONS: SkillOption[] = [
  {
    id: "vibecoding",
    name: "1. VIBECODING - FULL-STACK WEB DEVELOPMENT WITH AI",
    description:
      "Build full-stack web applications, landing pages, and interactive software tools using AI coding agents without starting from scratch.",
    pros: [
      "High project payout ($500 – $3,000+ per web application)",
      "Massive global & remote client demand",
      "Complete creative freedom leveraging modern AI coders",
    ],
    cons: [
      "Requires structured thinking and clear prompt instructions",
      "Slightly higher initial setup learning curve",
    ],
    links: [
      {
        label: "WATCH VIBECODING COURSE",
        href: "https://www.youtube.com/playlist?list=PLJgVUrDMslzVRr_hfwyxpvqUpt22yzojT",
      },
    ],
  },
  {
    id: "google-ads",
    name: "2. GOOGLE ADS SIMPLIFIED!",
    description:
      "Master search engine advertising to capture high-intent customers actively searching for products and services on Google.",
    pros: [
      "High-budget retainer clients",
      "Lower competition compared to Meta ads in local markets",
      "Targets buyers with immediate purchase intent",
    ],
    cons: [
      "Requires client budget for ad spend",
      "Strict Google advertising policy compliance required",
    ],
    links: [
      {
        label: "WATCH GOOGLE ADS COURSE",
        href: "https://www.youtube.com/playlist?list=PLJgVUrDMslzVPYaMQgA8dh5bSjkq_x4rZ",
      },
    ],
  },
  {
    id: "ghostwriting",
    name: "3. GHOSTWRITING LIKE A PRO WITH AI",
    description:
      "Write high-converting articles, ebooks, newsletter issues, and executive posts for foreign clients and founders using AI assistance.",
    pros: [
      "Zero ad spend or inventory investment required",
      "High foreign client pay rates on Upwork, LinkedIn & X",
      "Work flexibly from anywhere using a laptop or smartphone",
    ],
    cons: [
      "Requires keen editing to polish AI outputs",
      "Requires strong English communication skills",
    ],
    links: [
      {
        label: "WATCH GHOSTWRITING COURSE",
        href: "https://www.youtube.com/playlist?list=PLKH0H5m_LXIc",
      },
    ],
  },
  {
    id: "automation",
    name: "4. AUTOMATION (WHATSAPP, FACEBOOK, INSTAGRAM & AI AGENTS)",
    description:
      "Build automated sales funnels, instant reply bots, and custom AI agents for businesses to handle leads and customer service.",
    pros: [
      "Recurring monthly subscription retainer income from business clients",
      "Solves critical business bottleneck (slow customer response time)",
      "High demand across e-commerce, real estate, and service providers",
    ],
    cons: [
      "Requires mapping out logical flowcharts before setup",
      "Multi-platform setup (Meta, WhatsApp, AI APIs)",
    ],
    links: [
      {
        label: "WHATSAPP AUTOMATION + PRO FACEBOOK ADS",
        href: "https://www.youtube.com/playlist?list=PLSQqShcvhT5Y",
      },
      {
        label: "INSTAGRAM AUTOMATION",
        href: "https://www.youtube.com/playlist?list=PLe69uTmcMbyA",
      },
      {
        label: "AI AGENT & ASSISTANT",
        href: "https://www.youtube.com/playlist?list=PLNwPfqrAot40",
      },
    ],
  },
  {
    id: "graphics-ai",
    name: "5. CREATE PREMIUM GRAPHICS DESIGN WITH AI & MONETIZE",
    description:
      "Design professional branding, flyers, visual ads, and social media content rapidly using AI-assisted design suites.",
    pros: [
      "Fast turnarounds (earn daily or per deliverable)",
      "Visual proof makes acquiring clients straightforward",
      "Huge market across small businesses, brands, and creators",
    ],
    cons: [
      "High competition unless bundled with ad management or copywriting",
    ],
    links: [
      {
        label: "WATCH GRAPHICS DESIGN WITH AI COURSE",
        href: "https://www.youtube.com/playlist?list=PLJgVUrDMslzVp3HfmD4aaCsD0wifz8fOp",
      },
    ],
  },
  {
    id: "facebook-ads",
    name: "6. MASTERING FACEBOOK ADS & AUDIENCE TARGETING",
    description:
      "Run profitable Facebook & Instagram ad campaigns, target buying audiences, and generate steady revenue for client businesses.",
    pros: [
      "Most demanded service by online vendors and business owners",
      "Fast feedback loop to measure return on ad spend (ROAS)",
      "Easily scalable earnings per active client",
    ],
    cons: [
      "Ad account restriction workarounds needed",
      "Requires ongoing creative testing",
    ],
    links: [
      {
        label: "WATCH FACEBOOK ADS COURSE",
        href: "https://www.youtube.com/playlist?list=PLJgVUrDMslzU6nhSYlUN6IbkFUgUyOvrV",
      },
    ],
  },
];

export default function FiveWaysToEarnOnlineKePage() {
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);
  const [pendingSkill, setPendingSkill] = useState<SkillOption | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CHOSEN_SKILL_STORAGE_KEY);
      if (stored) {
        setSelectedSkillId(stored);
      }
    } catch {
      // localStorage may fail in restricted privacy modes
    } finally {
      setIsLoaded(true);
    }
  }, []);

  function handleSelectSkill(skill: SkillOption) {
    if (selectedSkillId) return;
    setPendingSkill(skill);
  }

  function confirmSelection() {
    if (!pendingSkill) return;
    try {
      localStorage.setItem(CHOSEN_SKILL_STORAGE_KEY, pendingSkill.id);
    } catch {}
    setSelectedSkillId(pendingSkill.id);
    setPendingSkill(null);
  }

  const selectedSkill = SKILL_OPTIONS.find((s) => s.id === selectedSkillId);

  return (
    <main className="min-h-screen bg-portfolio-bg selection:bg-portfolio-gold selection:text-black font-sans pb-16 sm:pb-12">
      <div className="mx-auto max-w-[1200px] border-x border-portfolio-border bg-portfolio-bg px-4 py-8 sm:px-6 md:px-10 lg:px-12">
        {/* HERO HEADER */}
        <header className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-portfolio-gold/40 bg-portfolio-gold/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-portfolio-gold sm:text-xs">
            <span>MASTERCLASS &amp; BLUEPRINT</span>
            <span>•</span>
            <span>KING EZEKIEL</span>
          </div>

          <h1 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[4rem]">
            5 WAYS TO EARN ONLINE
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-portfolio-muted sm:text-lg">
            Complete training package on Information Marketing, Ebooks, Freelancing, YouTube Monetization, AI Animation, Importation, and Specialized Skills.
          </p>
        </header>

        {/* SECTION 1: MUST WATCH */}
        <section className="mb-10">
          <div className="rounded-[24px] border-2 border-amber-500/60 bg-gradient-to-br from-amber-950/40 via-portfolio-card to-portfolio-card p-6 sm:p-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-500/20 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-amber-300 sm:text-xs animate-pulse">
              ⚠️ MUST WATCH BEFORE SELLING ANYTHING ONLINE!
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
              MARKETING 101: Understanding the WHO, WHAT, HOW &amp; WHY!
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-portfolio-muted sm:text-base">
              The fundamental framework you must master before attempting to market or sell any product, service, course, or ebook online.
            </p>
            <div className="mt-6">
              <a
                href="https://www.youtube.com/playlist?list=PLYFx2PudBxIY"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full items-center justify-center rounded-xl border border-amber-400 bg-amber-400 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-portfolio-bg sm:w-auto"
              >
                ▶ WATCH MARKETING 101 COURSE
              </a>
            </div>
          </div>
        </section>

        {/* CORE COURSES GRID */}
        <section className="mb-14 grid gap-6 md:grid-cols-2">
          {/* INFORMATION MARKETING */}
          <article className="flex flex-col justify-between rounded-[22px] border border-portfolio-border bg-portfolio-card p-6 sm:p-7">
            <div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-portfolio-gold">
                STRATEGY #1
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                INFORMATION MARKETING: THE GOLDEN KNOWLEDGE TO CASHFLOW STRATEGY
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-portfolio-muted sm:text-sm">
                Package your knowledge or high-value insights into digital products and cashflow streams.
              </p>

              <ul className="mt-5 space-y-3 text-xs leading-relaxed text-portfolio-fg sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-portfolio-gold" />
                  <span>
                    <strong className="text-white">SELLING KNOWLEDGE: COURSES &amp; EBOOKS</strong> — How to create, package, sell and earn selling courses &amp; PDFs online.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-portfolio-gold" />
                  <span>
                    <strong className="text-white">CLASSES: WEBINARS</strong> — Promote &amp; organize successful high-converting webinars.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-portfolio-gold" />
                  <span>
                    <strong className="text-white">CONSULTATION</strong> — Offer professional advice and earn from your expertise.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <a
                href="https://www.youtube.com/playlist?list=PLJgVUrDMslzUbCrJbURyGZDzB33Khw5bL"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full items-center justify-center rounded-xl border border-portfolio-gold bg-portfolio-gold px-4 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e7c75c] focus:outline-none focus:ring-2 focus:ring-portfolio-gold focus:ring-offset-2 focus:ring-offset-portfolio-bg"
              >
                WATCH INFORMATION MARKETING COURSE
              </a>
            </div>
          </article>

          {/* EARN 500K SIDE INCOME SELLING EBOOKS */}
          <article className="flex flex-col justify-between rounded-[22px] border border-portfolio-border bg-portfolio-card p-6 sm:p-7">
            <div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-portfolio-gold">
                STRATEGY #2
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                EARN 500K SIDE INCOME SELLING EBOOKS
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-portfolio-muted sm:text-sm">
                Blueprint on researching, compiling, writing, pricing, and automated delivery of high-selling ebooks to earn consistent monthly side income.
              </p>

              <ul className="mt-5 space-y-2.5 text-xs leading-relaxed text-portfolio-fg sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-portfolio-gold" />
                  <span>Simple PDF product creation without complex tech</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-portfolio-gold" />
                  <span>Automated WhatsApp &amp; payment link integration</span>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <a
                href="https://www.youtube.com/playlist?list=PLJgVUrDMslzUEFGCw9yVE5btHHkUuNXFs"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full items-center justify-center rounded-xl border border-portfolio-gold bg-portfolio-gold px-4 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e7c75c] focus:outline-none focus:ring-2 focus:ring-portfolio-gold focus:ring-offset-2 focus:ring-offset-portfolio-bg"
              >
                WATCH EBOOK MONETIZATION COURSE
              </a>
            </div>
          </article>

          {/* FREELANCING */}
          <article className="flex flex-col justify-between rounded-[22px] border border-portfolio-border bg-portfolio-card p-6 sm:p-7">
            <div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-portfolio-gold">
                STRATEGY #3
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                FREELANCING - THE $50M UNTAPPED MARKET
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-portfolio-muted sm:text-sm">
                Tap into international and direct client markets to sell high-value digital services for top dollar.
              </p>

              <ul className="mt-5 space-y-3 text-xs leading-relaxed text-portfolio-fg sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-portfolio-gold" />
                  <span>
                    <strong className="text-white">Untapped Markets:</strong> X, LinkedIn, Facebook, Instagram &amp; Google client outreach strategies.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-portfolio-gold" />
                  <span>
                    <strong className="text-white">Professional Proposal Drafting:</strong> Land clients over higher bidders with structured proposals.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <a
                href="https://www.youtube.com/playlist?list=PLJgVUrDMslzWwEOvif3DALhmY2oqnf48P"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full items-center justify-center rounded-xl border border-portfolio-gold bg-portfolio-gold px-4 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e7c75c] focus:outline-none focus:ring-2 focus:ring-portfolio-gold focus:ring-offset-2 focus:ring-offset-portfolio-bg"
              >
                WATCH FREELANCING COURSE
              </a>
            </div>
          </article>

          {/* YOUTUBE MONETIZATION */}
          <article className="flex flex-col justify-between rounded-[22px] border border-portfolio-border bg-portfolio-card p-6 sm:p-7">
            <div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-portfolio-gold">
                STRATEGY #4
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                YOUTUBE MONETIZATION
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-portfolio-muted sm:text-sm">
                Build long-term digital real estate. Monetize YouTube content through Google AdSense, sponsorships, affiliate marketing, and memberships.
              </p>

              <ul className="mt-5 space-y-2.5 text-xs leading-relaxed text-portfolio-fg sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-portfolio-gold" />
                  <span>Channel topic selection &amp; high CPM audience targeting</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-portfolio-gold" />
                  <span>Organic growth tactics &amp; video optimization</span>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <a
                href="https://www.youtube.com/playlist?list=PLJgVUrDMslzW5Xjqypw8e8i1ZskW8g0YO"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full items-center justify-center rounded-xl border border-portfolio-gold bg-portfolio-gold px-4 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e7c75c] focus:outline-none focus:ring-2 focus:ring-portfolio-gold focus:ring-offset-2 focus:ring-offset-portfolio-bg"
              >
                WATCH YOUTUBE MONETIZATION COURSE
              </a>
            </div>
          </article>

          {/* AI ANIMATION MASTERCLASS */}
          <article className="flex flex-col justify-between rounded-[22px] border border-portfolio-border bg-portfolio-card p-6 sm:p-7">
            <div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-portfolio-gold">
                STRATEGY #5
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                AI ANIMATION MASTERCLASS
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-portfolio-muted sm:text-sm">
                Create engaging, high-retention AI animation videos for viral social media content, brand stories, and client video ads.
              </p>

              <ul className="mt-5 space-y-2.5 text-xs leading-relaxed text-portfolio-fg sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-portfolio-gold" />
                  <span>AI text-to-animation and voice synthesis tools</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-portfolio-gold" />
                  <span>Monetizing animated content on TikTok, YouTube &amp; Instagram</span>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <a
                href="https://www.youtube.com/playlist?list=PLJgVUrDMslzW7CXafcjF_icH7OTX2NPGi"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full items-center justify-center rounded-xl border border-portfolio-gold bg-portfolio-gold px-4 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e7c75c] focus:outline-none focus:ring-2 focus:ring-portfolio-gold focus:ring-offset-2 focus:ring-offset-portfolio-bg"
              >
                WATCH AI ANIMATION COURSE
              </a>
            </div>
          </article>

          {/* IMPORTATION PLAYBOOK - PDF */}
          <article className="flex flex-col justify-between rounded-[22px] border border-portfolio-gold/60 bg-gradient-to-b from-portfolio-gold/15 to-portfolio-card p-6 sm:p-7">
            <div>
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-portfolio-gold/40 bg-portfolio-gold/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-portfolio-gold">
                <span>📁 PDF RESOURCE PLAYBOOK</span>
              </div>
              <h2 className="mt-1 text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                IMPORTATION PLAYBOOK - PDF
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-portfolio-muted sm:text-sm">
                Comprehensive PDF resource guide detailing how smart Nigerians import products (iPhones, fashion items, electronics) directly from China suppliers for high profits.
              </p>

              <ul className="mt-5 space-y-2.5 text-xs leading-relaxed text-portfolio-fg sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-portfolio-gold" />
                  <span>Direct Google Drive access to PDFs and sourcing guides</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-portfolio-gold" />
                  <span>Verified supplier contacts, shipping logistics &amp; clearing tips</span>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <a
                href="https://drive.google.com/drive/folders/16DmdFRBhjcuM0J-l1roRWSxN_xweDGb3?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-portfolio-gold bg-portfolio-gold px-4 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e7c75c] focus:outline-none focus:ring-2 focus:ring-portfolio-gold focus:ring-offset-2 focus:ring-offset-portfolio-bg"
              >
                <span>📂 OPEN IMPORTATION PLAYBOOK (PDF)</span>
              </a>
            </div>
          </article>
        </section>

        {/* CHOOSE A SKILL SECTION */}
        <section id="choose-a-skill" className="pt-4 pb-10">
          <div className="rounded-[28px] border-2 border-portfolio-gold/70 bg-portfolio-card p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-portfolio-gold bg-portfolio-gold/20 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.24em] text-portfolio-gold sm:text-xs">
                <span>🎯 SPECIALIZATION</span>
                <span>•</span>
                <span>SINGLE SKILL LOCK</span>
              </div>

              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
                CHOOSE A SKILL
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-portfolio-muted sm:text-base">
                To guarantee focus and prevent distraction, <strong className="text-white">you can ONLY select ONE specialized skill</strong> path.
              </p>

              {/* RULE NOTICE BOX */}
              <div className="mt-5 rounded-2xl border border-portfolio-gold/40 bg-portfolio-gold/10 p-4 text-left sm:p-5 md:text-center">
                <p className="text-xs font-semibold leading-relaxed text-portfolio-gold sm:text-sm">
                  🔒 <span className="font-extrabold text-white">SYSTEM RULE:</span> Once you choose a skill, it will unlock permanently on your device. The remaining skills will be locked to force you to stay 100% focused on mastering your chosen skill.
                </p>
              </div>

              {selectedSkill && isLoaded && (
                <div className="mt-6 rounded-2xl border-2 border-[#25D366] bg-[#25D366]/10 p-4 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#25D366] sm:text-sm">
                    ✓ YOUR SELECTED SKILL HAS BEEN UNLOCKED!
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {selectedSkill.name}
                  </p>
                </div>
              )}
            </div>

            {/* SKILLS CARDS GRID */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {SKILL_OPTIONS.map((skill) => {
                const isThisSelected = selectedSkillId === skill.id;
                const isLocked = Boolean(selectedSkillId && !isThisSelected);

                return (
                  <article
                    key={skill.id}
                    className={`relative flex flex-col justify-between rounded-[22px] border p-6 transition-all duration-300 ${
                      isThisSelected
                        ? "border-2 border-portfolio-gold bg-gradient-to-b from-portfolio-gold/20 via-portfolio-card to-portfolio-card shadow-[0_0_30px_rgba(212,175,55,0.25)]"
                        : isLocked
                        ? "border-portfolio-border/40 bg-portfolio-card/40 opacity-60"
                        : "border-portfolio-border bg-portfolio-card hover:border-portfolio-gold/50"
                    }`}
                  >
                    <div>
                      {/* BADGES */}
                      <div className="mb-3 flex items-center justify-between">
                        {isThisSelected ? (
                          <span className="rounded-full border border-portfolio-gold bg-portfolio-gold px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-black">
                            ✓ UNLOCKED &amp; CHOSEN
                          </span>
                        ) : isLocked ? (
                          <span className="rounded-full border border-red-500/40 bg-red-950/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-red-300">
                            🔒 LOCKED
                          </span>
                        ) : (
                          <span className="rounded-full border border-portfolio-gold/40 bg-portfolio-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-portfolio-gold">
                            AVAILABLE TO CHOOSE
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold uppercase tracking-tight text-white sm:text-xl">
                        {skill.name}
                      </h3>

                      <p className="mt-3 text-xs leading-relaxed text-portfolio-muted sm:text-sm">
                        {skill.description}
                      </p>

                      {/* PROS & CONS */}
                      <div className="mt-5 space-y-4 rounded-xl border border-portfolio-border/60 bg-black/40 p-4">
                        <div>
                          <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400">
                            ✅ PROS
                          </div>
                          <ul className="mt-2 space-y-1.5 text-xs text-portfolio-fg">
                            {skill.pros.map((pro) => (
                              <li key={pro} className="flex items-start gap-2">
                                <span className="text-emerald-400 font-bold">•</span>
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="border-t border-portfolio-border/50 pt-3">
                          <div className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                            ⚠️ CONS
                          </div>
                          <ul className="mt-2 space-y-1.5 text-xs text-portfolio-fg">
                            {skill.cons.map((con) => (
                              <li key={con} className="flex items-start gap-2">
                                <span className="text-amber-400 font-bold">•</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* ACTION BUTTON */}
                    <div className="mt-6">
                      {isThisSelected ? (
                        <div className="space-y-2.5">
                          {skill.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-portfolio-gold bg-portfolio-gold px-4 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e7c75c]"
                            >
                              ▶ {link.label}
                            </a>
                          ))}
                        </div>
                      ) : isLocked ? (
                        <button
                          type="button"
                          disabled
                          className="w-full cursor-not-allowed rounded-xl border border-portfolio-border bg-portfolio-border/20 px-4 py-3 text-xs font-bold uppercase tracking-wider text-portfolio-muted"
                        >
                          🔒 LOCKED (YOU ALREADY CHOSE A SKILL)
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleSelectSkill(skill)}
                          className="inline-flex w-full items-center justify-center rounded-xl border border-portfolio-gold/80 bg-portfolio-gold/10 px-4 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-portfolio-gold transition-all duration-200 hover:bg-portfolio-gold hover:text-black focus:outline-none focus:ring-2 focus:ring-portfolio-gold"
                        >
                          SELECT THIS SKILL
                        </button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONFIRMATION MODAL */}
        {pendingSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
            <div className="max-w-md rounded-[24px] border-2 border-portfolio-gold bg-portfolio-bg p-6 text-center shadow-2xl">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-portfolio-gold bg-portfolio-gold/20 text-2xl text-portfolio-gold">
                ⚠️
              </div>
              <h3 className="text-xl font-extrabold text-white">
                CONFIRM YOUR SKILL SELECTION
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-portfolio-muted">
                Are you sure you want to select <strong className="text-white">{pendingSkill.name}</strong>?
              </p>
              <div className="mt-4 rounded-xl border border-amber-500/40 bg-amber-950/40 p-3 text-left">
                <p className="text-xs font-semibold text-amber-200">
                  🔒 Note: Once confirmed, you CANNOT change your skill or select another skill on this device.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setPendingSkill(null)}
                  className="w-full rounded-xl border border-portfolio-border bg-portfolio-card px-4 py-3 text-xs font-bold uppercase tracking-wider text-portfolio-muted transition-colors hover:text-white"
                >
                  CANCEL
                </button>
                <button
                  type="button"
                  onClick={confirmSelection}
                  className="w-full rounded-xl border border-portfolio-gold bg-portfolio-gold px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-black transition-all hover:bg-[#e7c75c]"
                >
                  YES, UNLOCK THIS SKILL
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
