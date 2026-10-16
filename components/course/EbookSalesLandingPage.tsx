import {
  ActionButton,
  YouTubePlayer,
} from "../renderer/DynamicComponents";
import { AdBuildVideoPlayer } from "./AdBuildCommunityLandingPage";

const WHATSAPP_BUY_URL = "https://wa.link/jz5ber";

type EbookSalesLandingPageProps = {
  title: string;
};

function BuyViaWhatsAppButton() {
  return <ActionButton text="Buy Via WhatsApp" url={WHATSAPP_BUY_URL} />;
}

function OfferCard() {
  return (
    <section className="mx-auto my-12 w-full max-w-3xl rounded-[24px] border-2 border-portfolio-gold bg-[linear-gradient(145deg,_rgba(212,175,55,0.14),_rgba(17,17,17,0.95)_55%)] p-6 text-center shadow-[0_0_32px_rgba(212,175,55,0.12)] sm:p-9">
      <p className="text-xl font-bold text-white sm:text-2xl">You can secure your spot</p>
      <p className="mt-3 text-base font-semibold text-white sm:text-lg">Limited Slots Available</p>
      <p className="mt-2 text-4xl font-extrabold text-portfolio-gold sm:text-5xl">JUST ₦2,000</p>
      <BuyViaWhatsAppButton />
    </section>
  );
}

export default function EbookSalesLandingPage({ title }: EbookSalesLandingPageProps) {
  return (
    <main className="min-h-screen bg-portfolio-bg selection:bg-portfolio-gold selection:text-black">
      <div className="mx-auto max-w-[1400px] border-x border-portfolio-border bg-portfolio-bg p-0 shadow-[0_0_30px_rgba(0,0,0,0.35)]">
        <section aria-label="Training video" className="px-4 pt-6 sm:px-6 md:px-10">
          <div className="mx-auto max-w-5xl">
            <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-portfolio-gold sm:text-base">
              Watch the video
            </p>
            <AdBuildVideoPlayer
              videoId="kaTuylWUBlc"
              videoTitle="Ebook sales advert"
              videoLabel="VIDEO AD"
              videoTagline="EBOOK SALES TRAINING"
              videoDescription="Watch the ebook sales advert."
              startTime={0}
              endTime={null}
            />
          </div>
        </section>

        <header className="px-4 pt-8 pb-2 sm:px-6 sm:pt-12 md:px-10">
          <div className="mx-auto max-w-5xl rounded-[28px] border border-portfolio-border bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_48%)] px-5 py-8 text-center sm:px-10 sm:py-12">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-portfolio-gold sm:text-sm">
              {title}
            </p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">
              PASSIVE INCOME STARTS WITH THE RIGHT DIGITAL SKILL
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-lg font-semibold leading-relaxed text-white sm:text-xl md:text-2xl">
              Learn how to create and sell digital products online, even if you&apos;re a complete beginner with no technical skills.
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-white sm:text-lg">
              Inside this training, you&apos;ll discover how to turn useful knowledge into digital products people can buy and download.
            </p>
          </div>
        </header>

        <section aria-label="Buy via WhatsApp" className="px-4 pt-2 sm:px-6 md:px-10">
          <div className="mx-auto max-w-5xl flex justify-center">
            <BuyViaWhatsAppButton />
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 md:px-10 md:py-12">
          <div className="mx-auto max-w-5xl">
            <div className="mb-7 rounded-2xl border border-portfolio-gold/70 bg-portfolio-card px-5 py-5 text-center sm:px-8">
              <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                WHAT YOU&apos;LL LEARN
              </h2>
              <p className="mt-2 text-base font-medium text-white sm:text-lg">
                Simple steps for creating and selling PDFs and e-books.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Identify profitable PDF and e-book ideas.",
                "Discover the types of PDFs people are willing to pay for.",
                "Understand why some PDFs don't sell and how to improve them.",
                "Create valuable digital products that solve real problems.",
                "Market and sell your PDFs and e-books online.",
                "Build a digital income stream around your knowledge.",
              ].map((item, index) => (
                <article
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-portfolio-border bg-portfolio-card p-5 sm:p-6"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-portfolio-gold text-sm font-extrabold text-portfolio-gold">
                    {index + 1}
                  </span>
                  <p className="text-base font-medium leading-relaxed text-white sm:text-lg">
                    {item}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border-2 border-portfolio-gold/70 bg-[linear-gradient(120deg,_rgba(212,175,55,0.08),_rgba(17,17,17,0.95))] p-5 sm:p-7">
              <p className="text-base font-medium leading-relaxed text-white sm:text-lg">
                Whether you&apos;re a university student, corps member, 9-to-5 worker or unemployed, this training will help you understand the business behind selling digital products.
              </p>
            </div>

            <section aria-labelledby="niches-heading" className="mt-14">
              <h2
                id="niches-heading"
                className="text-center text-2xl font-extrabold leading-tight text-white sm:text-3xl"
              >
                TOP 10 NICHES THAT SELL LIKE CRAZY
              </h2>
              <YouTubePlayer url="https://youtu.be/e7ZXDpy3SS0" />
            </section>

            <section aria-labelledby="audience-heading" className="mt-14">
              <h2
                id="audience-heading"
                className="mb-6 text-center text-2xl font-extrabold text-white sm:text-3xl"
              >
                WHO&apos;S THIS FOR
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["University students", "Learn a practical way to turn useful knowledge into digital products."],
                  ["Corps members", "Explore a digital skill you can build alongside your service year."],
                  ["9-to-5 workers", "Learn how digital products can create an income stream outside your job."],
                  ["Anyone starting out", "Understand the basics, even if you have no technical skills or prior experience."],
                ].map(([title, description]) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-portfolio-border bg-portfolio-card p-5 sm:p-6"
                  >
                    <h3 className="text-lg font-bold text-portfolio-gold sm:text-xl">{title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-white sm:text-lg">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <OfferCard />

            <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-white sm:text-base">
              This site is independent of Facebook. It is not endorsed, sponsored, or connected to Facebook or Facebook, Inc.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
