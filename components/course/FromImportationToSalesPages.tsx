const WHATSAPP_BUY_URL = "https://wa.link/y3feal";
const COURSE_PAGE_URL = "/full-course-from-importation-to-sales";
const PDF_GUIDE_URL =
  "https://drive.google.com/drive/folders/16DmdFRBhjcuM0J-l1roRWSxN_xweDGb3?usp=sharing";

const courseItems = [
  {
    title: "MARKETING 101: UNDERSTANDING THE WHO, WHAT, HOW & WHY!",
    subtitle:
      "Understand the people you serve, what to offer, how to reach buyers, and why a clear message matters.",
    href: "https://www.youtube.com/playlist?list=PLYFx2PudBxIY",
  },
  {
    title: "MINI IMPORTATION BY KING EZEKIEL",
    subtitle:
      "Follow the practical mini importation lessons and learn the key steps to get started.",
    href: "https://www.youtube.com/playlist?list=PLE2bHuQAwGjU",
  },
  {
    title: "WHATSAPP AUTOMATION + PRO FACEBOOK ADS",
    subtitle:
      "Learn ways to use WhatsApp automation and Facebook Ads to support your marketing and sales.",
    href: "https://www.youtube.com/playlist?list=PLSQqShcvhT5Y",
  },
  {
    title: "TIKTOK ADS MASTERY: MASTER TIKTOK ADS FROM ZERO TO LIVE",
    subtitle:
      "Learn how to set up your full TikTok Ad Account, run TikTok Ads, target audiences, and more.",
    href: "https://www.youtube.com/playlist?list=PLJgVUrDMslzVH1Pgm22DHDpxHqW_ITltT",
  },
  {
    title: "100X SALES MASTERY",
    subtitle:
      "Understand sales and sales closing, from beginner level to professional.",
    href: "https://www.youtube.com/playlist?list=PLYMPbkF2C5CY",
  },
];

const adCourseTopics = [
  {
    title: "Marketing 101",
    description:
      "Learn marketing from scratch, test the market, understand who you are selling to, and choose the right words for your offer.",
  },
  {
    title: "Mini Importation",
    description:
      "Learn how to import products from different sites in China, including more than just iPhones.",
  },
  {
    title: "WhatsApp Automation + Pro Facebook Ads",
    description:
      "Reach potential customers with Facebook Ads and use WhatsApp automation to manage conversations and follow up.",
  },
  {
    title: "TikTok Ads Mastery",
    description:
      "Learn how to use TikTok Ads to introduce products to people who may want to buy them.",
  },
  {
    title: "100X Sales Mastery",
    description:
      "Learn how to handle sales conversations, answer questions, and close sales with confidence.",
  },
];

function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_BUY_URL}
      target="_blank"
      rel="noreferrer noopener"
      className={`inline-flex items-center justify-center gap-3 rounded-xl border border-[#25D366] bg-[#25D366] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_25px_rgba(37,211,102,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-portfolio-bg ${className}`}
    >
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
      BUY VIA WHATSAPP
    </a>
  );
}

export function FromImportationToSalesAdPage() {
  return (
    <main className="min-h-screen bg-portfolio-bg selection:bg-portfolio-gold selection:text-black font-sans">
      <div className="mx-auto max-w-[1200px] border-x border-portfolio-border bg-portfolio-bg px-4 py-10 sm:px-6 md:px-10 lg:px-12">
        <header className="mb-10 rounded-[28px] border border-portfolio-border bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_48%)] px-5 py-10 text-center sm:px-10 sm:py-14">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-portfolio-gold sm:text-xs">
            PRACTICAL VIDEOS + PDF GUIDE
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[4rem]">
            FROM IMPORTATION TO SALES
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-portfolio-fg sm:text-xl md:text-2xl">
            You won’t just learn mini importation; you’ll also learn marketing and sales.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-portfolio-muted sm:text-lg">
            Get practical video lessons and a detailed PDF guide with contacts and steps to help you move from learning the process to reaching potential customers.
          </p>
          <p className="mt-6 text-lg font-bold text-portfolio-gold sm:text-xl">
            Complete course access — just ₦2,000
          </p>
          <WhatsAppButton className="mt-8" />
        </header>

        <section className="mb-8 rounded-[22px] border border-portfolio-border bg-portfolio-card p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-portfolio-gold">
            YOUR LEARNING PATH
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Learn the process, then learn how to sell
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-portfolio-muted sm:text-base">
            Start with the fundamentals of marketing, learn mini importation, then explore automation and Facebook advertising to support your sales journey.
          </p>
          <a
            href={COURSE_PAGE_URL}
            className="mt-6 inline-flex items-center justify-center rounded-xl border border-portfolio-gold/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-portfolio-gold transition-colors hover:bg-portfolio-gold hover:text-black"
          >
            Preview the course lessons
          </a>
        </section>

        <section className="mb-8 rounded-[22px] border border-portfolio-border bg-portfolio-card p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            What you&apos;ll learn
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {adCourseTopics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-2xl border border-portfolio-border bg-portfolio-bg p-5"
              >
                <h3 className="font-bold text-portfolio-gold">{topic.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white sm:text-base">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[22px] border border-portfolio-border bg-portfolio-card p-6 text-center sm:p-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-3 mb-6 max-w-2xl text-sm leading-relaxed text-portfolio-muted sm:text-base">
            Message us on WhatsApp to ask questions and get access information.
          </p>
          <WhatsAppButton />
        </section>
      </div>
    </main>
  );
}

export function FromImportationToSalesCoursePage() {
  return (
    <main className="min-h-screen bg-portfolio-bg selection:bg-portfolio-gold selection:text-black font-sans">
      <div className="mx-auto max-w-[1200px] border-x border-portfolio-border bg-portfolio-bg px-4 py-10 sm:px-6 md:px-10 lg:px-12">
        <header className="mb-10 text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-portfolio-gold sm:text-xs">
            FULL COURSE ACCESS
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[4rem]">
            FROM IMPORTATION TO SALES
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-portfolio-fg sm:text-xl md:text-2xl">
            You won’t just learn mini importation; you’ll also learn marketing and sales.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-portfolio-muted sm:text-lg">
            Practical videos + PDF guide (contacts &amp; steps). Work through each course at your pace.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton />
          </div>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {courseItems.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[22px] border border-portfolio-border bg-portfolio-card p-5 sm:p-6"
            >
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-portfolio-gold">
                COURSE {index + 1}
              </p>
              <h2 className="text-lg font-semibold uppercase tracking-[0.08em] text-portfolio-gold sm:text-xl">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-portfolio-muted sm:text-base">
                {item.subtitle}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-portfolio-gold bg-portfolio-gold px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e7c75c] focus:outline-none focus:ring-2 focus:ring-portfolio-gold focus:ring-offset-2 focus:ring-offset-portfolio-bg"
              >
                Watch this course
              </a>
            </article>
          ))}

          <article className="rounded-[22px] border border-portfolio-gold/60 bg-[linear-gradient(145deg,_rgba(212,175,55,0.10),_#111111_55%)] p-5 sm:col-span-2 sm:p-7">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-portfolio-gold">
              DOWNLOADABLE RESOURCE
            </p>
            <h2 className="text-lg font-semibold uppercase tracking-[0.08em] text-portfolio-gold sm:text-xl">
              Detailed PDF Guide on Mini Importation
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-portfolio-muted sm:text-base">
              Open the shared guide folder for the detailed PDF, including contacts and practical steps.
            </p>
            <a
              href={PDF_GUIDE_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-portfolio-gold bg-portfolio-gold px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e7c75c] focus:outline-none focus:ring-2 focus:ring-portfolio-gold focus:ring-offset-2 focus:ring-offset-portfolio-bg sm:w-auto sm:px-8"
            >
              Download the PDF guide
            </a>
          </article>
        </div>

        <div className="mt-8 flex justify-center">
          <WhatsAppButton />
        </div>
      </div>
    </main>
  );
}
