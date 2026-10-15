const courseItems = [
  {
    title: "EARN 500K SIDE INCOME SELLING EBOOKS - WHATSAPP",
    subtitle: "How to sell Ebooks like crazy via WhatsApp — My personal favourite",
    href: "https://youtube.com/playlist?list=PLOwkTUE2CSXU&si=cTwBG1UgXLQqZwNQ",
  },
  {
    title: "EARN 500K SIDE INCOME SELLING EBOOKS - SELAR",
    subtitle: "How to sell Ebooks like crazy via Selar — An alternative that works for some people",
    href: "https://www.youtube.com/playlist?list=PLJgVUrDMslzUEFGCw9yVE5btHHkUuNXFs",
  },
  {
    title: "BONUS: MARKETING 101: Understanding the WHO, WHAT, HOW & WHY!",
    href: "https://www.youtube.com/playlist?list=PLYFx2PudBxIY",
    bonus: true,
  },
];

export default function EbooksSellLikeCrazyFullCoursePage() {
  return (
    <main className="min-h-screen bg-portfolio-bg selection:bg-portfolio-gold selection:text-black font-sans">
      <div className="mx-auto max-w-[1200px] border-x border-portfolio-border bg-portfolio-bg px-4 py-10 sm:px-6 md:px-10 lg:px-12">
        <header className="mb-10 text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-portfolio-gold sm:text-xs">
            FULL ACCESS
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[4rem]">
            SELLING KNOWLEDGE: EBOOKS
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-portfolio-muted sm:text-lg">
            Create once, package cleanly, and earn continuous passive income online
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {courseItems.map((item) => (
            <article
              key={item.title}
              className={`rounded-[22px] border bg-portfolio-card p-5 sm:p-6 ${
                item.bonus
                  ? "border-portfolio-gold/60 md:col-span-2"
                  : "border-portfolio-border"
              }`}
            >
              <h2 className="text-lg font-semibold uppercase tracking-[0.12em] text-portfolio-gold sm:text-xl">
                {item.title}
              </h2>
              {item.subtitle && (
                <p className="mt-3 text-sm leading-relaxed text-portfolio-muted sm:text-base">
                  {item.subtitle}
                </p>
              )}
              <div className="mt-6">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-portfolio-gold bg-portfolio-gold px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e7c75c] focus:outline-none focus:ring-2 focus:ring-portfolio-gold focus:ring-offset-2 focus:ring-offset-portfolio-bg"
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
