"use client";

import { useState } from "react";

export const WA_SALES_WHATSAPP_URL =
  process.env.NEXT_PUBLIC_WA_SALES_WHATSAPP_URL ?? "https://wa.link/by8sni";

type CTAButtonProps = {
  label?: string;
  href?: string;
  className?: string;
};

function PriceTag({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 ${className}`}>
      <div className="inline-flex items-center gap-1.5 rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400 sm:text-sm">
        <span className="text-red-300/80">Original Price:</span>
        <span className="line-through decoration-red-500 decoration-2 font-bold text-red-400">
          ₦5,000
        </span>
      </div>
      <div className="inline-flex items-center gap-1.5 rounded-full border border-[#25D366]/50 bg-[#25D366]/15 px-3.5 py-1 text-xs font-extrabold text-[#25D366] sm:text-sm shadow-[0_0_15px_rgba(37,211,102,0.25)]">
        <span className="text-emerald-300">Giveaway Price:</span>
        <span className="text-base sm:text-lg font-black text-[#25D366]">
          ₦1,000
        </span>
      </div>
    </div>
  );
}

function CTAButton({
  label = "BUY VIA WHATSAPP",
  href = WA_SALES_WHATSAPP_URL,
  className = "",
}: CTAButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className={`inline-flex items-center justify-center gap-3 rounded-xl border border-[#25D366] bg-[#25D366] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_25px_rgba(37,211,102,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-portfolio-bg active:translate-y-0 ${className}`}
    >
      <svg className="h-5 w-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}

function Hero() {
  return (
    <header className="pt-8 pb-8 sm:pt-10 md:pt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-portfolio-border bg-[radial-gradient(circle_at_top,_rgba(37,211,102,0.12),_transparent_40%)] p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#25D366] sm:text-xs">
              <span className="inline-block h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>WHATSAPP AUTOMATION + FACEBOOK ADS</span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[5rem]">
              WA SALES MACHINE
            </h1>

            <p className="mt-5 text-xl font-semibold text-portfolio-fg sm:text-2xl md:text-3xl">
              Do you know how to turn your WhatsApp into a sales machine?
            </p>

            <p className="mt-4 text-base leading-relaxed text-portfolio-muted sm:text-lg">
              Stop losing customers because you couldn&apos;t reply on time. Automate your WhatsApp to work 24/7 — while you rest, sleep, or focus on other things.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4">
              <PriceTag />
              <CTAButton />
            </div>

            <div className="mt-10 grid gap-3 border-t border-portfolio-border pt-6 text-left sm:grid-cols-3">
              {[
                ["AUTOMATE", "24/7 automated replies & voice notes"],
                ["FOLLOW-UP", "Auto follow-ups up to 1 week later"],
                ["NEVER MISS", "Zero missed leads, zero missed sales"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-portfolio-border bg-portfolio-card/70 p-4 text-center"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#25D366]">
                    {title}
                  </div>
                  <div className="mt-2 text-sm text-portfolio-muted">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function BenefitCard({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-start gap-4 rounded-[20px] border border-portfolio-border bg-portfolio-card p-5 sm:p-6">
      <span className="text-2xl leading-none shrink-0">{icon}</span>
      <p className="text-sm leading-relaxed text-portfolio-fg sm:text-base">{text}</p>
    </div>
  );
}

function AudienceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[22px] border border-portfolio-border bg-portfolio-card p-5 sm:p-6">
      <h3 className="text-lg font-semibold uppercase tracking-[0.14em] text-[#25D366]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-portfolio-muted">{text}</p>
    </div>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need any technical experience?",
      a: "No. This course is built for complete beginners. You will be guided step-by-step from zero — no coding, no complicated setups.",
    },
    {
      q: "Will this work on my phone?",
      a: "Yes. Everything taught in this course can be followed and implemented using a smartphone.",
    },
    {
      q: "What exactly does the WhatsApp automation do?",
      a: "It handles automatic replies, voice note automation, keyword-triggered responses, and follow-up messages — all without you being online.",
    },
    {
      q: "How long does the follow-up automation last?",
      a: "You can configure follow-up messages to go out from minutes after a lead messages, all the way to 24 hours and even up to 1 week later.",
    },
    {
      q: "Is the Facebook Ads part included?",
      a: "Yes. Pro Facebook Ads targeting and campaign strategy is taught alongside WhatsApp automation so you know how to bring in leads AND convert them automatically.",
    },
    {
      q: "What is 'The Fix Package' bonus?",
      a: "The Fix Package is a bonus module that covers how to fix common account issues including your Instagram dollar account, 'Can't Create Page' errors, and more Meta-related problems that stop people from running their business online.",
    },
    {
      q: "How much is the course?",
      a: "The course is currently on a special giveaway price of ₦1,000 (regular price ₦5,000). You get instant access to the complete 3-in-1 package including WhatsApp Automation, Facebook Ads, and The Fix Package bonus.",
    },
    {
      q: "How do I access the course after purchase?",
      a: "After purchasing via WhatsApp, you will receive your access details immediately through the same WhatsApp conversation.",
    },
    {
      q: "Do I get lifetime access?",
      a: "Yes. You get lifetime access to all course content and any future updates.",
    },
  ];

  return (
    <div className="space-y-3">
      {faqs.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div key={item.q} className="rounded-2xl border border-portfolio-border bg-portfolio-card">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-base font-medium text-white sm:text-lg">{item.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-portfolio-border text-xl text-[#25D366] transition-transform ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-portfolio-muted sm:px-6 sm:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-portfolio-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-portfolio-muted sm:px-6 md:flex-row md:text-left lg:px-8">
        <div>
          <div className="text-base font-semibold text-white">WA Sales Machine</div>
          <div className="mt-1">WhatsApp Automation + Facebook Ads — King Ezekiel</div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
          <span>© 2026</span>
          <a href="#" className="transition-colors hover:text-[#25D366]">Privacy Policy</a>
          <a href="#" className="transition-colors hover:text-[#25D366]">Terms &amp; Conditions</a>
          <a href="#" className="transition-colors hover:text-[#25D366]">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default function WaSalesMachineLandingPage() {
  const benefits = [
    {
      icon: "🤖",
      text: "24/7 Automated replies — whether you're online or completely offline, your WhatsApp keeps selling.",
    },
    {
      icon: "🎙️",
      text: "Automate voice notes and text messages — let customers hear directly from you, automatically.",
    },
    {
      icon: "⏰",
      text: "Automate follow-up messages even up to 24 hours after and 1 week after — so no lead goes cold.",
    },
    {
      icon: "💰",
      text: "Never miss a lead, never miss a sales opportunity — your WhatsApp closes deals even when you sleep.",
    },
  ];

  return (
    <main className="min-h-screen bg-portfolio-bg selection:bg-[#25D366] selection:text-black font-sans pb-16 sm:pb-0">
      <div className="mx-auto max-w-[1400px] border-x border-portfolio-border bg-portfolio-bg p-0 shadow-[0_0_30px_rgba(0,0,0,0.35)]">

        <Hero />

        {/* QUICK CTA */}
        <section className="py-6 sm:py-8">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mb-4">
              <PriceTag />
            </div>
            <CTAButton className="w-full sm:w-auto" />
            <p className="mt-3 text-sm text-portfolio-muted">
              Instant WhatsApp access + lifetime course access + support group.
            </p>
          </div>
        </section>

        {/* WHAT IT DOES */}
        <section id="benefits" className="py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#25D366] sm:text-xs">
                THE POWER OF WA SALES MACHINE
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                Your WhatsApp, Working 24/7
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-portfolio-muted sm:text-lg">
                Most businesses lose sales simply because no one replied in time. WA Sales Machine eliminates that problem completely.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((b) => (
                <BenefitCard key={b.text} icon={b.icon} text={b.text} />
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU'LL LEARN */}
        <section id="curriculum" className="py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                What You&apos;ll Learn
              </h2>
              <p className="mt-4 text-base text-portfolio-muted sm:text-lg">
                Three powerful sections — all built for people who want real results, not theory.
              </p>
            </div>

            <div className="space-y-6">

              {/* SECTION 1: WHATSAPP AUTOMATION */}
              <article className="rounded-[24px] border border-[#25D366]/40 bg-portfolio-card p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#25D366] bg-[#25D366]/15 text-xl font-extrabold text-[#25D366]">
                    1
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#25D366] sm:text-xs">SECTION 1</div>
                    <h3 className="text-xl font-extrabold uppercase tracking-tight text-white sm:text-2xl md:text-3xl">
                      WhatsApp Automation
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-portfolio-muted sm:text-base">
                  Your WhatsApp should be working even when you&apos;re not. This section shows you how to set up a complete automated sales system — from first contact to follow-up — without you being online.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: "🤖", text: "24/7 automatic text replies triggered by keywords" },
                    { icon: "🎙️", text: "Automate voice notes — let customers hear from you hands-free" },
                    { icon: "⏰", text: "Follow-up messages 24 hours & 1 week after a lead contacts you" },
                    { icon: "💬", text: "Auto-handle FAQs, product enquiries and payment info" },
                    { icon: "📥", text: "Capture leads and manage conversations without being online" },
                    { icon: "🔁", text: "Automated re-engagement for cold leads who didn't buy" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3 rounded-xl border border-portfolio-border bg-black/30 p-3.5">
                      <span className="text-lg leading-none shrink-0">{item.icon}</span>
                      <span className="text-xs leading-relaxed text-portfolio-fg sm:text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 2: PRO FACEBOOK ADS SIMPLIFIED */}
              <article className="rounded-[24px] border border-blue-500/30 bg-portfolio-card p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-blue-500 bg-blue-500/15 text-xl font-extrabold text-blue-400">
                    2
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-400 sm:text-xs">SECTION 2</div>
                    <h3 className="text-xl font-extrabold uppercase tracking-tight text-white sm:text-2xl md:text-3xl">
                      Pro Facebook Ads Simplified
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-portfolio-muted sm:text-base">
                  Don&apos;t just boost posts and pray. Learn how to run targeted Facebook Ads that bring in real buyers — and feed them straight into your WhatsApp automation machine.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: "🎯", text: "Audience targeting — reach people who are ready to buy, not just scroll" },
                    { icon: "🖼️", text: "Create high-converting ad creatives that stop the scroll" },
                    { icon: "🔗", text: "Connect Facebook Ads directly to your WhatsApp funnel" },
                    { icon: "📊", text: "Read your ad metrics and know what's working" },
                    { icon: "📈", text: "Scale campaigns that are converting without wasting budget" },
                    { icon: "🔄", text: "Retarget warm audiences who've seen your offer but haven't bought" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3 rounded-xl border border-portfolio-border bg-black/30 p-3.5">
                      <span className="text-lg leading-none shrink-0">{item.icon}</span>
                      <span className="text-xs leading-relaxed text-portfolio-fg sm:text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 3: THE FIX PACKAGE — PAGE CREATION & MORE */}
              <article className="rounded-[24px] border-2 border-portfolio-gold/60 bg-gradient-to-b from-portfolio-gold/10 to-portfolio-card p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-portfolio-gold bg-portfolio-gold/15 text-xl font-extrabold text-portfolio-gold">
                    🎁
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-portfolio-gold sm:text-xs">BONUS SECTION — THE FIX PACKAGE</div>
                    <h3 className="text-xl font-extrabold uppercase tracking-tight text-white sm:text-2xl md:text-3xl">
                      Fix Page Creation Issues &amp; Others
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-portfolio-muted sm:text-base">
                  Meta account problems are one of the biggest hidden obstacles for Nigerian business owners online. This bonus section resolves the most common ones — step by step.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {[
                    { icon: "💵", title: "Fix Instagram Dollar Account", desc: "Unlock dollar billing and run global ad campaigns without payment blocks." },
                    { icon: "📄", title: "Fix 'Can't Create Page' Error", desc: "Step-by-step resolution for the most frustrating Meta page creation block." },
                    { icon: "🔒", title: "Fix Ad Account Restrictions", desc: "Understand why accounts get restricted and how to recover them fast." },
                    { icon: "✅", title: "Fix Business Manager Setup", desc: "Set up Meta Business Manager the right way to avoid future problems." },
                    { icon: "🔧", title: "Fix Verification Issues", desc: "Resolve identity and page verification problems holding your account back." },
                    { icon: "📲", title: "More Account Fixes", desc: "Additional common Meta & IG issues resolved with clear, tested instructions." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-xl border border-portfolio-gold/25 bg-portfolio-card/80 p-4">
                      <div className="mb-1.5 text-xl">{item.icon}</div>
                      <div className="text-sm font-bold text-white">{item.title}</div>
                      <div className="mt-1 text-xs leading-relaxed text-portfolio-muted">{item.desc}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-center text-xs font-semibold text-portfolio-gold sm:text-sm">
                  ✓ This Fix Package is included at no extra charge — comes with the full course.
                </p>
              </article>
            </div>

            {/* STATS ROW */}
            <div className="mt-10 rounded-[24px] border border-portfolio-border bg-[linear-gradient(90deg,_rgba(37,211,102,0.05),_rgba(212,175,55,0.05))] p-6 sm:p-8">
              <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "3-IN-1 POWER PACKAGE",
                  "LIFETIME ACCESS",
                  "BEGINNER FRIENDLY",
                  "SUPPORT GROUP",
                ].map((label) => (
                  <div key={label} className="rounded-2xl border border-portfolio-border bg-portfolio-card/70 p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#25D366]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center text-base text-portfolio-muted sm:text-lg">
                <p>Works for both phone and laptop users. Practical. No theory. No fluff.</p>
              </div>
            </div>
          </div>
        </section>

        {/* MID CTA */}
        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold tracking-[-0.04em] text-white sm:text-3xl md:text-4xl">
              Ready to Automate Your WhatsApp &amp; Run Profitable Facebook Ads?
            </h3>
            <div className="mt-6 mb-4">
              <PriceTag />
            </div>
            <div className="flex justify-center">
              <CTAButton />
            </div>
            <p className="mt-3 text-sm text-portfolio-muted">Instant access after purchase via WhatsApp.</p>
          </div>
        </section>



        {/* WHO IS THIS FOR */}
        <section id="audience" className="py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                Who Is This For?
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <AudienceCard
                title="ONLINE BUSINESS OWNERS"
                text="Anyone selling products or services through WhatsApp who wants to stop missing leads and automate their sales process."
              />
              <AudienceCard
                title="FREELANCERS & CONSULTANTS"
                text="People who receive client enquiries on WhatsApp and want a professional, automated way to handle them 24/7."
              />
              <AudienceCard
                title="DIGITAL MARKETERS"
                text="Marketers who want to add WhatsApp automation + Facebook Ads as a high-demand service to offer clients."
              />
              <AudienceCard
                title="E-COMMERCE SELLERS"
                text="Those selling physical or digital products who lose customers because they don't reply fast enough."
              />
              <AudienceCard
                title="BEGINNERS WITH ZERO EXPERIENCE"
                text="You don't need to know anything technical. This is built step-by-step for people who are starting from scratch."
              />
              <AudienceCard
                title="ANYONE SPENDING ON ADS"
                text="If you're running Facebook Ads and losing leads before converting them, this course closes that gap completely."
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-14 sm:py-18">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              Turn Your WhatsApp Into a Sales Machine.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-portfolio-muted sm:text-lg">
              Automate your replies, voice notes, and follow-ups. Run profitable Facebook Ads. Never miss a lead again.
            </p>
            <div className="mt-8 mb-4">
              <PriceTag />
            </div>
            <div className="flex justify-center">
              <CTAButton />
            </div>
            <p className="mt-3 text-sm text-portfolio-muted">
              Lifetime Access + The Fix Package Bonus + Support Group
            </p>
            <p className="mt-4 text-xs text-portfolio-muted/60">
              This site is independent of Facebook. It is not endorsed, sponsored, or connected to Facebook or Meta, Inc.
            </p>
          </div>
        </section>

        <Footer />
      </div>

      {/* STICKY MOBILE CONVERSION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-3 border-t border-[#25D366]/30 bg-black/95 px-4 py-3 backdrop-blur-md shadow-[0_-10px_25px_rgba(0,0,0,0.8)] sm:hidden">
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-semibold text-red-400 line-through decoration-red-500">₦5,000</span>
            <span className="text-sm font-black text-[#25D366]">₦1,000</span>
          </div>
          <span className="text-[10px] font-medium text-white/90">WA Sales Machine</span>
        </div>
        <CTAButton className="px-4 py-2.5 text-[11px]" />
      </div>
    </main>
  );
}
