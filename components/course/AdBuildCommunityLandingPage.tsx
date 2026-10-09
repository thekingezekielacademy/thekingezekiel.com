"use client";

import { useState } from "react";
import { YouTubePlayer, ImageCarousel } from "../renderer/DynamicComponents";

export const BUILD_COMMUNITY_WHATSAPP_URL =
  process.env.NEXT_PUBLIC_BUILD_COMMUNITY_WHATSAPP_URL ?? "https://wa.link/k4m8ft";

type CTAButtonProps = {
  label?: string;
  href?: string;
  className?: string;
};

function CTAButton({
  label = "BUY VIA WHATSAPP",
  href = BUILD_COMMUNITY_WHATSAPP_URL,
  className = "",
}: CTAButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className={`inline-flex items-center justify-center gap-3 rounded-xl border border-[#25D366] bg-[#25D366] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-portfolio-bg active:translate-y-0 shadow-[0_0_25px_rgba(37,211,102,0.35)] ${className}`}
    >
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
      {label}
    </a>
  );
}

function Hero() {
  return (
    <header className="pt-8 pb-8 sm:pt-10 md:pt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-portfolio-border bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_45%)] p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-portfolio-gold/40 bg-portfolio-gold/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-portfolio-gold sm:text-xs">
              <span>B.U.I.L.D COMMUNITY</span>
              <span>•</span>
              <span>MONETIZATION MASTERCLASS</span>
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[4.2rem]">
              5 WAYS NIGERIANS MONETIZE THEIR SKILLS TO EARN ₦1M TO ₦3M MONTHLY
            </h1>

            {/* Price Badge */}
            <div className="mt-6 inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-portfolio-gold bg-portfolio-gold/20 px-6 py-3 text-xl font-black uppercase tracking-[0.14em] text-portfolio-gold shadow-[0_0_30px_rgba(212,175,55,0.3)] sm:text-2xl">
              <span>PRICE:</span>
              <span className="text-white">₦3,500</span>
            </div>

            <p className="mt-6 text-lg font-semibold text-portfolio-fg sm:text-xl md:text-2xl">
              B.U.I.L.D — Building Income With Long-Term Direction
            </p>

            {/* NOTE Box */}
            <div className="mt-6 rounded-2xl border border-portfolio-gold/40 bg-portfolio-gold/10 p-4 sm:p-5 text-left md:text-center">
              <p className="text-sm font-semibold leading-relaxed text-portfolio-gold sm:text-base">
                💡 <span className="font-extrabold text-white">NOTE:</span> Even if you do not have skill, you would be taught one! That’s how stubborn we are to see you win!
              </p>
            </div>

            {/* ADVICE Box */}
            <div className="mt-4 rounded-2xl border border-amber-500/40 bg-amber-950/30 p-4 sm:p-5 text-left md:text-center">
              <p className="text-sm font-semibold leading-relaxed text-amber-200 sm:text-base">
                ⚠️ <span className="font-extrabold text-amber-400">ADVICE:</span> Do not do all 5, there is a video King Ezekiel explained which monetisation path best suits you!
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton />
            </div>

            <div className="mt-10 grid gap-3 border-t border-portfolio-border pt-6 text-left sm:grid-cols-3">
              {[
                ["LEARN & BUILD", "Practical income streams"],
                ["GET A SKILL", "Taught for free inside"],
                ["GROW TOGETHER", "Community of high earners"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-portfolio-border bg-portfolio-card/70 p-4 text-center"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-portfolio-gold">
                    {title}
                  </div>
                  <div className="mt-2 text-sm text-portfolio-muted">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function VideoSection() {
  const [isMuted, setIsMuted] = useState(true);

  function toggleMute() {
    const player = document.getElementById("build-preview-video") as HTMLIFrameElement | null;

    player?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: isMuted ? "unMute" : "mute",
        args: [],
      }),
      "https://www.youtube-nocookie.com",
    );
    setIsMuted(!isMuted);
  }

  return (
    <section aria-label="Course preview video" className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-portfolio-gold sm:text-xs">
            WATCH THIS FIRST
          </p>
          <p className="mt-3 text-base text-portfolio-muted sm:text-lg">
            Watch King Ezekiel explain which monetization path best suits you!
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-portfolio-border bg-portfolio-card shadow-2xl">
          <div className="relative aspect-video w-full bg-black">
            <iframe
              id="build-preview-video"
              className="pointer-events-none absolute inset-0 h-full w-full"
              tabIndex={-1}
              src="https://www.youtube-nocookie.com/embed/TniI1hTLD3I?start=60&end=3120&autoplay=1&mute=1&playsinline=1&controls=0&disablekb=1&enablejsapi=1&rel=0&loop=1&playlist=TniI1hTLD3I"
              title="5 Ways Nigerians Monetize Their Skills video preview"
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute course preview video" : "Mute course preview video"}
                className="rounded-full border-2 border-portfolio-gold bg-portfolio-gold px-8 py-5 text-sm font-bold uppercase tracking-[0.16em] text-black shadow-[0_0_36px_rgba(212,175,55,0.55)] transition-all duration-200 hover:scale-105 hover:bg-[#e7c75c] focus:outline-none focus:ring-4 focus:ring-white/70"
              >
                {isMuted ? "Unmute video" : "Mute video"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WayCard({
  number,
  title,
  subtitle,
  points,
  accent = false,
}: {
  number: string;
  title: string;
  subtitle: string;
  points: string[];
  accent?: boolean;
}) {
  return (
    <article
      className={`rounded-[24px] border p-6 sm:p-8 ${
        accent
          ? "border-portfolio-gold/60 bg-[linear-gradient(180deg,_rgba(212,175,55,0.12),_rgba(17,17,17,0.95))]"
          : "border-portfolio-border bg-portfolio-card"
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-portfolio-gold bg-portfolio-gold/10 text-sm font-bold text-portfolio-gold">
          {number}
        </div>
        <div className="text-xs font-bold uppercase tracking-[0.22em] text-portfolio-gold">
          MONETIZATION PATH {number}
        </div>
      </div>
      <h3 className="text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-portfolio-muted">{subtitle}</p>

      <ul className="mt-6 space-y-3 text-sm leading-relaxed text-portfolio-fg sm:text-base">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-portfolio-gold" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function AudienceTargetCard({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4 rounded-[22px] border border-portfolio-border bg-portfolio-card p-5 sm:p-6">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-portfolio-gold/50 bg-portfolio-gold/10 text-portfolio-gold">
        ✓
      </div>
      <p className="text-base leading-relaxed text-portfolio-fg">{text}</p>
    </div>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How much does it cost to join the B.U.I.L.D Community?",
      a: "The registration fee is ₦3,500. This gives you instant access to the monetization training, skill classes, and community support.",
    },
    {
      q: "What if I don't have any digital skill right now?",
      a: "No problem at all! Even if you don't have any skill, you will be taught high-demand skills (such as Facebook Ads, Vibe Coding, Ghostwriting, Google Ads, Branding) for free inside the community.",
    },
    {
      q: "Should I execute all 5 monetization paths?",
      a: "No! As King Ezekiel advises in the training video, do NOT attempt all 5 at once. Watch the orientation video where King Ezekiel breaks down which specific path aligns best with your situation and focus on that single path.",
    },
    {
      q: "Can I do this using my smartphone?",
      a: "Yes. All training videos, community guidance, and monetization methods can be followed using a smartphone or laptop.",
    },
    {
      q: "How do I pay and get access?",
      a: "Click the 'BUY VIA WHATSAPP' button on this page. You'll be connected directly to WhatsApp where you will receive immediate payment details and instant community access.",
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
              <span className="text-base font-semibold text-white sm:text-lg">{item.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-portfolio-border text-xl text-portfolio-gold transition-transform ${
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
          <div className="text-base font-semibold text-white">B.U.I.L.D Community</div>
          <div className="mt-1">King Ezekiel • 5 Ways Nigerians Monetize Skills</div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
          <span>© 2026</span>
          <a href="#" className="transition-colors hover:text-portfolio-gold">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-portfolio-gold">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function AdBuildCommunityLandingPage() {
  const ways = [
    {
      number: "1",
      title: "SELLING KNOWLEDGE: COURSES & EBOOKS",
      subtitle: "Create once, package cleanly, and earn continuous passive income online.",
      points: [
        "Create, Package, Sell and Earn selling courses online",
        "Create, Package, Sell and Earn selling PDFs Online",
      ],
    },
    {
      number: "2",
      title: "CLASSES: WEBINARS",
      subtitle: "Organize impactful online sessions and get paid for providing direct value.",
      points: [
        "Promote & Organise successful webinars",
      ],
    },
    {
      number: "3",
      title: "CONSULTATION",
      subtitle: "Stop giving advice for free—position yourself and get paid for your expertise.",
      points: [
        "Offer professional advice and earn from it",
      ],
    },
    {
      number: "4",
      title: "E-COMMERCE",
      subtitle: "Build physical product revenue streams with simple, proven systems.",
      points: [
        "Dropshipping",
        "Arbitrage",
        "Importation",
      ],
    },
    {
      number: "5",
      title: "SERVICES: FREELANCING",
      subtitle: "Offer high-demand services to international and local high-paying clients.",
      points: [
        "Upwork",
        "Untapped Markets: X, LinkedIn, Facebook, Instagram & Google",
        "Proposal drafting like A Professional",
        "Choose A Skill: Professional Advertising or Vibe Coding: Full-Stack Web Development With AI Course",
      ],
      accent: true,
    },
  ];

  const bonusSkills = [
    "1. Professional Meta (Facebook) Advertising — HIGH DEMAND",
    "2. Ghostwriting Playbook — HIGH DEMAND",
    "3. Full-Stack Web Development With AI (Vibe Coding) — HIGH DEMAND",
    "4. Branding & Graphic Design With AI — HIGH DEMAND",
    "5. Professional Google Advertising — HIGH DEMAND",
  ];

  const studentProofImages = [
    "/wp-content/uploads/2026/01/photo_2026-01-05-6.26.48-PM.jpeg",
    "/wp-content/uploads/2026/01/photo_2026-01-05-6.26.42-PM.jpeg",
    "/wp-content/uploads/2026/01/photo_2026-01-05-6.26.46-PM-1.jpeg",
    "/wp-content/uploads/2026/01/photo_2026-01-05-6.26.49-PM-1.jpeg",
  ];

  return (
    <main className="min-h-screen bg-portfolio-bg selection:bg-portfolio-gold selection:text-black font-sans">
      <div className="mx-auto max-w-[1400px] border-x border-portfolio-border bg-portfolio-bg p-0 shadow-[0_0_30px_rgba(0,0,0,0.35)]">
        <Hero />

        <VideoSection />

        {/* PRICE & CALL TO ACTION BANNER */}
        <section className="py-6 sm:py-8">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <CTAButton className="w-full sm:w-auto text-base py-5 px-8" />
            <p className="mt-3 text-sm text-portfolio-muted">
              Price: <span className="font-bold text-white">₦3,500</span> • Instant WhatsApp Access + Support Community
            </p>
          </div>
        </section>

        {/* THIS TRAINING IS FOR YOU IF */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-portfolio-gold">
                TARGET AUDIENCE
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                THIS TRAINING IS FOR YOU IF:
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <AudienceTargetCard text="You're tired of low-paying jobs and want a real, high-income skill." />
              <AudienceTargetCard text="You need a side hustle or passive income that doesn't feel like a struggle." />
              <AudienceTargetCard text="You are a Freelancer stuck at low rates and want to transition to high-ticket Consultation." />
              <AudienceTargetCard text="You want to learn the 5 specific ways Nigerians are quietly dominating the global market." />
              <AudienceTargetCard text="You believe wealth on the internet is vast and you are finally ready to unlock your portion." />
              <AudienceTargetCard text="You want a proven structure, feedback, and real examples to guide your growth." />
            </div>
          </div>
        </section>

        {/* THE 5 MONETIZATION WAYS */}
        <section id="ways" className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-portfolio-gold">
                CURRICULUM &amp; BLUEPRINT
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                5 WAYS NIGERIANS MONETIZE THEIR SKILLS TO EARN ₦1M TO ₦3M MONTHLY
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-portfolio-muted sm:text-lg">
                The 5 Ways to Monetize Your Skill — With Structure, Feedback, and Real Examples
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {ways.map((way) => (
                <WayCard key={way.number} {...way} />
              ))}
            </div>
          </div>
        </section>

        {/* BONUS SECTION: YOU HAVE NO SKILL? FEAR NOT */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[28px] border-2 border-portfolio-gold bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.18),_rgba(17,17,17,0.95))] p-6 sm:p-10 md:p-12 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-portfolio-gold">
                SPECIAL COMMUNITY BONUS
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                YOU HAVE NO SKILL?? FEAR NOT!
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg font-semibold leading-relaxed text-portfolio-fg sm:text-xl">
                Even if you do not have skill, you would be taught one! That’s how stubborn we are to see you win!
              </p>
              <p className="mt-2 text-base text-portfolio-muted">
                No theory. No hype. Just a skill you can actually monetize.
              </p>

              <div className="mt-8 grid gap-3 text-left sm:grid-cols-2 md:grid-cols-3">
                {bonusSkills.map((skill) => (
                  <div key={skill} className="rounded-2xl border border-portfolio-gold/30 bg-portfolio-card/80 p-4 text-sm font-medium text-white">
                    {skill}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <CTAButton />
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS & PROOF SECTION */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-portfolio-gold">
                REAL STUDENT PROOF
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                What My Students Are Saying
              </h2>
              <p className="mt-2 text-sm text-portfolio-muted">
                Results vary based on commitment, effort, skill, and execution.
              </p>
            </div>

            {/* Video Testimonials */}
            <div className="mb-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-[24px] border border-portfolio-border bg-portfolio-card p-5">
                <h3 className="mb-3 text-center text-base font-semibold text-white">
                  Grossed over ₦2 Million reselling my courses
                </h3>
                <YouTubePlayer url="https://youtu.be/nZ9qfAJnCCQ" playbackGroup="build-testimonials" />
              </div>
              <div className="rounded-[24px] border border-portfolio-border bg-portfolio-card p-5">
                <h3 className="mb-3 text-center text-base font-semibold text-white">
                  Grossed more than ₦500k in a month reselling my courses
                </h3>
                <YouTubePlayer url="https://youtu.be/wsobW917ib4" playbackGroup="build-testimonials" />
              </div>
            </div>

            {/* Screenshots Carousel */}
            <div className="mt-8">
              <ImageCarousel images={studentProofImages} />
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-12 sm:py-16">
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
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              Ready to Monetize Your Skills &amp; Earn Monthly?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-portfolio-muted sm:text-lg">
              Join the B.U.I.L.D Community today for just <span className="font-bold text-portfolio-gold">₦3,500</span> and get full access to the monetization blueprint and free skill classes.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton />
            </div>
            <p className="mt-3 text-xs text-portfolio-muted">
              This site is independent of Facebook. It is not endorsed, sponsored, or connected to Facebook or Meta, Inc.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
