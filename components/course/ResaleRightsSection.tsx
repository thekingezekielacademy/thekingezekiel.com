export function ResaleRightsSection() {
  return (
    <section
      aria-labelledby="resale-rights-heading"
      className="mx-auto my-8 w-full max-w-5xl rounded-[28px] border-2 border-portfolio-gold bg-[linear-gradient(135deg,_rgba(212,175,55,0.16),_rgba(17,17,17,0.96)_60%)] px-6 py-8 text-center shadow-[0_0_32px_rgba(212,175,55,0.14)] sm:my-10 sm:px-10 sm:py-10"
    >
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-portfolio-gold sm:text-sm">
        INCLUDED WITH YOUR PURCHASE
      </p>
      <h2
        id="resale-rights-heading"
        className="text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl md:text-4xl"
      >
        Resale Rights Included
      </h2>
      <p className="mx-auto mt-5 max-w-3xl text-base font-semibold leading-relaxed text-white sm:text-lg">
        Buy the course to learn and use it yourself, or buy it and resell it.
      </p>
      <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-portfolio-muted sm:text-base">
        Please don&apos;t share the course or give access away for free. Each
        person who wants to take the course should get access through a
        purchase.
      </p>
    </section>
  );
}
