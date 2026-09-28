"use client";

import { useState } from "react";

export const WHATSAPP_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.link/5mwqzs";

type CTAButtonProps = {
  label?: string;
  href?: string;
  className?: string;
};

function CTAButton({
  label = "BUY VIA WHATSAPP",
  href = WHATSAPP_URL,
  className = "",
}: CTAButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className={`inline-flex items-center justify-center rounded-xl border border-portfolio-gold bg-portfolio-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e7c75c] focus:outline-none focus:ring-2 focus:ring-portfolio-gold focus:ring-offset-2 focus:ring-offset-portfolio-bg active:translate-y-0 ${className}`}
    >
      {label}
    </a>
  );
}

function Hero() {
  return (
    <header className="pt-8 pb-8 sm:pt-10 md:pt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-portfolio-border bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_40%)] p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-portfolio-gold/90 sm:text-xs">
              PRACTICAL AI + AUTOMATION COURSE
            </p>
            <h1 className="text-4xl font-bold leading-none tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[5rem]">
              AI BUSINESS AUTOMATION &amp; MONETIZATION
            </h1>
            <p className="mt-6 text-lg font-semibold text-portfolio-fg sm:text-xl md:text-2xl">
              Build it. Automate it. Monetize it — all made super easy. No coding. No story. No stress.
            </p>
            <p className="mt-4 text-base leading-relaxed text-portfolio-muted sm:text-lg">
              Want to use AI to automate your business, save time, create faster, or even build a new source of income?
            </p>
            <p className="mt-4 text-base leading-relaxed text-portfolio-fg sm:text-lg">
              Learn practical AI and automation skills you can actually use — whether you&apos;re automating your own business or turning these skills into income.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton />
            </div>

            <div className="mt-10 grid gap-3 border-t border-portfolio-border pt-6 text-left sm:grid-cols-3">
              {[
                "BUILD",
                "AUTOMATE",
                "MONETIZE",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-portfolio-border bg-portfolio-card/70 p-4 text-center"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-portfolio-gold">
                    {item}
                  </div>
                  <div className="mt-2 text-sm text-portfolio-muted">
                    {item === "BUILD" && "Bots, websites and AI systems"}
                    {item === "AUTOMATE" && "Tasks, replies and business flows"}
                    {item === "MONETIZE" && "Skills that can become income"}
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
  return (
    <section aria-label="Course preview video" className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-portfolio-gold sm:text-xs">
            WATCH THIS FIRST
          </p>
          <p className="mt-3 text-base text-portfolio-muted sm:text-lg">
            See exactly what you&apos;ll learn, how the course works, and what you can build with AI.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-portfolio-border bg-portfolio-card shadow-2xl">
          <div className="relative aspect-video w-full bg-[linear-gradient(135deg,_rgba(212,175,55,0.12),_rgba(37,99,235,0.08),_rgba(17,17,17,1))]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03),_transparent_55%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-portfolio-gold bg-portfolio-gold/10 text-portfolio-gold shadow-[0_0_30px_rgba(212,175,55,0.28)]">
                  <span className="text-3xl">▶</span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-portfolio-gold">
                  VIDEO COMING SOON
                </p>
                <p className="mt-2 max-w-md px-6 text-sm text-portfolio-muted">
                  Replace this placeholder with your promo or course video when it is ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseModule({
  number,
  title,
  description,
  points,
  accent = false,
}: {
  number: string;
  title: string;
  description: string;
  points: string[];
  accent?: boolean;
}) {
  return (
    <article
      className={`rounded-[24px] border p-5 sm:p-6 ${
        accent
          ? "border-portfolio-gold/50 bg-[linear-gradient(180deg,_rgba(212,175,55,0.08),_rgba(17,17,17,0.9))]"
          : "border-portfolio-border bg-portfolio-card"
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-portfolio-gold bg-portfolio-gold/10 text-sm font-semibold text-portfolio-gold">
          {number}
        </div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-portfolio-gold">
          MODULE {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white sm:text-2xl">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-portfolio-muted">{description}</p>
      <ul className="mt-5 space-y-2 text-sm leading-relaxed text-portfolio-fg">
        {points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-portfolio-gold" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function AudienceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[22px] border border-portfolio-border bg-portfolio-card p-5 sm:p-6">
      <h3 className="text-lg font-semibold uppercase tracking-[0.14em] text-portfolio-gold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-portfolio-muted">{text}</p>
    </div>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need coding experience?",
      a: "No. This course is beginner-friendly and focuses heavily on practical AI tools and automation workflows. The vibe-coding section introduces real web development ideas in a practical, approachable way.",
    },
    {
      q: "Is this course only for business owners?",
      a: "No. It is also for creators, freelancers, marketers, entrepreneurs and anyone who wants to learn how to use AI and automation to build income streams.",
    },
    {
      q: "Do I need a laptop?",
      a: "The course works for both phone and laptop users. Some practical automation and development tasks are easier on a laptop, but the lessons are designed to stay useful across devices.",
    },
    {
      q: "Will I learn how to build AI bots?",
      a: "Yes. The course includes practical bot-building lessons, including Telegram bots and connecting them to AI to create more useful assistants.",
    },
    {
      q: "Will I learn WhatsApp automation?",
      a: "Yes. The course covers practical automation for WhatsApp, Facebook and Instagram, including customer replies, conversations and repeatable workflows.",
    },
    {
      q: "Will I learn how to build websites with AI?",
      a: "Yes. The vibe-coding section covers designing and building websites and applications with AI, including front-end, back-end, databases and APIs.",
    },
    {
      q: "Can I use these skills to make money?",
      a: "Yes. The course includes practical guidance on turning AI and automation skills into services, digital products and income opportunities.",
    },
    {
      q: "How do I access the course?",
      a: "The course is delivered through the access method already used by the business. Once you purchase, you will receive the course access details through the same process used for this offer.",
    },
    {
      q: "Do I get lifetime access?",
      a: "Yes. The course includes lifetime access and access to the support group.",
    },
    {
      q: "Can I learn at my own pace?",
      a: "Yes. The course is video-based and designed so you can learn at your own pace, on your own schedule.",
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
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-portfolio-border text-xl text-portfolio-gold transition-transform ${isOpen ? "rotate-45" : "rotate-0"}`}>
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
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
          <div className="text-base font-semibold text-white">AI Business Automation &amp; Monetization</div>
          <div className="mt-1">King Ezekiel</div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
          <span>© 2026</span>
          <a href="#" className="transition-colors hover:text-portfolio-gold">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-portfolio-gold">
            Terms &amp; Conditions
          </a>
          <a href="#" className="transition-colors hover:text-portfolio-gold">
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function CourseLandingPage() {
  const modules = [
    {
      number: "1",
      title: "Communicate With AI",
      description: "Learn how to communicate with AI to get better, more useful results.",
      points: [
        "Giving AI clear instructions",
        "Getting better responses",
        "Using AI for business, content and research",
        "Creating reusable AI instructions and workflows",
      ],
    },
    {
      number: "2",
      title: "Build AI-Powered Bots & Assistants",
      description: "Create bots that can communicate with customers and handle repetitive tasks.",
      points: [
        "Creating a Telegram bot",
        "Connecting bots to AI",
        "Giving your bot business knowledge",
        "Automating customer questions and responses",
        "Building simple AI assistants",
      ],
    },
    {
      number: "3",
      title: "Social Media Automation",
      description: "Automate customer interactions across WhatsApp, Facebook and Instagram.",
      points: [
        "Automated Instagram interactions",
        "Automated Facebook interactions",
        "Automated WhatsApp communication",
        "Automated replies and messages",
        "Automating customer conversations",
        "Using InstantDM where relevant",
      ],
    },
    {
      number: "4",
      title: "AI Video Clipping & Editing",
      description: "Use AI to turn long-form videos into engaging short-form content faster.",
      points: [
        "AI video clipping",
        "Automatic editing",
        "Creating short-form content",
        "Repurposing existing videos",
        "Saving time on video production",
      ],
    },
    {
      number: "5",
      title: "VIBE CODING WITH AI",
      description: "Use AI to design and build websites and applications without having to write everything manually from scratch.",
      points: [
        "Website design with AI",
        "Front-end development",
        "Back-end development",
        "Databases",
        "APIs and integrations",
        "Building complete web applications with AI",
      ],
    },
    {
      number: "6",
      title: "Business Automation & Monetization",
      description: "Use AI and automation to simplify business operations — or turn your skills into income.",
      points: [
        "Automating repetitive business tasks",
        "Automated customer replies",
        "Automated customer follow-ups",
        "Lead management",
        "Simple business workflows",
        "AI & automation services you can sell",
        "Turning automation skills into income",
      ],
      accent: true,
    },
  ];

  return (
    <main className="min-h-screen bg-portfolio-bg selection:bg-portfolio-gold selection:text-black">
      <div className="mx-auto max-w-[1400px] border-x border-portfolio-border bg-portfolio-bg p-0 shadow-[0_0_30px_rgba(0,0,0,0.35)]">
        <Hero />

        <VideoSection />

        <section className="py-6 sm:py-8">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <CTAButton className="w-full sm:w-auto" />
            <p className="mt-3 text-sm text-portfolio-muted">Get lifetime access + support group.</p>
          </div>
        </section>

        <section id="why" className="py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                Why I Created This Course
              </h2>
            </div>

            <div className="mx-auto max-w-4xl space-y-4 text-lg leading-relaxed text-portfolio-muted">
              <p>
                I created this course because so many business owners have been reaching out, asking how to automate their businesses, simplify repetitive tasks, and save time.
              </p>
              <p>
                And for those who want to turn AI &amp; automation skills into income, I created it for you too.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-portfolio-border bg-portfolio-card p-6">
                <h3 className="text-xl font-semibold uppercase tracking-[0.18em] text-portfolio-gold">
                  For Business Owners
                </h3>
                <p className="mt-3 text-base leading-relaxed text-portfolio-muted">
                  Automate repetitive work, customer communication and business processes.
                </p>
              </div>
              <div className="rounded-[24px] border border-portfolio-border bg-portfolio-card p-6">
                <h3 className="text-xl font-semibold uppercase tracking-[0.18em] text-portfolio-gold">
                  For AI &amp; Automation Learners
                </h3>
                <p className="mt-3 text-base leading-relaxed text-portfolio-muted">
                  Learn practical skills you can use to offer services and create new income opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="curriculum" className="py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                What You&apos;ll Learn
              </h2>
              <p className="mt-4 text-base text-portfolio-muted sm:text-lg">
                No unnecessary theory. You&apos;ll learn practical AI, automation and digital skills you can actually use.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {modules.map((module) => (
                <CourseModule key={module.number} {...module} />
              ))}
            </div>

            <div className="mt-12 rounded-[24px] border border-portfolio-border bg-[linear-gradient(90deg,_rgba(212,175,55,0.05),_rgba(37,99,235,0.05))] p-6 sm:p-8">
              <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["6-IN-1 PRACTICAL COURSE", ""],
                  ["45+ PRACTICAL VIDEOS", ""],
                  ["LIFETIME ACCESS", ""],
                  ["SUPPORT GROUP", ""],
                ].map(([title, value]) => (
                  <div key={title} className="rounded-2xl border border-portfolio-border bg-portfolio-card/70 p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-portfolio-gold">
                      {title}
                    </div>
                    {value && <div className="mt-2 text-sm text-portfolio-muted">{value}</div>}
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-2 text-center text-base text-portfolio-muted sm:text-lg">
                <p>Watch at your own pace — explanatory, practical, fun to watch and simple to understand.</p>
                <p>Works for both phone and laptop users.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
              Ready to Build, Automate &amp; Monetize With AI?
            </h3>
            <div className="mt-6 flex justify-center">
              <CTAButton />
            </div>
            <p className="mt-3 text-sm text-portfolio-muted">Get lifetime access and start learning at your own pace.</p>
          </div>
        </section>

        <section id="audience" className="py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                Who Is This Course For?
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <AudienceCard title="BUSINESS OWNERS" text="For business owners who want to automate repetitive tasks, customer replies, follow-ups and everyday processes." />
              <AudienceCard title="ENTREPRENEURS" text="For entrepreneurs who want to use AI to create faster, build digital systems and simplify their businesses." />
              <AudienceCard title="CONTENT CREATORS" text="For creators who want to use AI for video clipping, editing, content production and workflow automation." />
              <AudienceCard title="FREELANCERS &amp; DIGITAL MARKETERS" text="For people who want practical AI and automation skills they can offer as services." />
              <AudienceCard title="BEGINNERS" text="For people starting with AI who want practical, step-by-step projects rather than complicated technical theory." />
              <AudienceCard title="PEOPLE WHO WANT TO MAKE MONEY WITH AI" text="For anyone who wants to turn AI, automation and digital skills into sellable services." />
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[28px] border border-portfolio-border bg-portfolio-card p-6 sm:p-8">
              <h3 className="text-center text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
                You Don&apos;t Need To Know Everything About AI.
              </h3>
              <p className="mt-4 text-center text-base text-portfolio-muted sm:text-lg">
                You just need to know how to use the right tools to solve real problems.
              </p>
              <div className="mt-6 flex justify-center">
                <CTAButton />
              </div>
            </div>
          </div>
        </section>

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

        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              Build It. Automate It. Monetize It.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-portfolio-muted sm:text-lg">
              Learn practical AI and automation skills to simplify your business — or turn what you learn into a new income opportunity.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton />
            </div>
            <p className="mt-3 text-sm text-portfolio-muted">Lifetime Access + Support Group</p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
