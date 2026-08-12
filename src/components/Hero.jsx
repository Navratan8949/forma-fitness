import RevealOnScroll from './RevealOnScroll';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-ivory pt-24 lg:pt-0"
    >
      <div className="container-edge grid min-h-screen grid-cols-1 items-center gap-8 py-10 lg:grid-cols-12 lg:gap-12 lg:py-0">
        {/* Left — text */}
        <div className="lg:col-span-6 lg:pr-8 xl:pr-12">
          <RevealOnScroll as="p" className="label mb-6">
            Premium Fitness &amp; Performance Studio
          </RevealOnScroll>

          <RevealOnScroll as="h1" delay={80} className="text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-charcoal">
            BUILD YOUR
            <br />
            STRONGEST
            <br />
            <span className="relative inline-block">
              SELF<span className="text-lime">.</span>
            </span>
          </RevealOnScroll>

          <RevealOnScroll as="p" delay={160} className="mt-7 max-w-md text-[17px] leading-relaxed text-charcoal/70">
            Train smarter. Move stronger. Become the best version of yourself.
          </RevealOnScroll>

          <RevealOnScroll as="div" delay={240} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#trial" className="btn-primary">
              START YOUR JOURNEY
              <span aria-hidden="true">→</span>
            </a>
            <a href="#memberships" className="btn-secondary">
              EXPLORE MEMBERSHIPS
              <span aria-hidden="true">→</span>
            </a>
          </RevealOnScroll>
        </div>

        {/* Right — image */}
        <div className="lg:col-span-6">
          <RevealOnScroll delay={200} className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-beige sm:aspect-[5/5] lg:aspect-[4/5]">
              <img
                src="https://images.pexels.com/photos/13106575/pexels-photo-13106575.jpeg?auto=compress&cs=tinysrgb&w=1260"
                alt="Athlete training in a modern fitness studio"
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-3 left-0 flex items-center gap-3">
              <span className="label">EST. 2020</span>
              <span className="h-px w-12 bg-charcoal/30" />
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Bottom-right scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 right-6 hidden items-center gap-2 lg:flex">
        <span className="label">SCROLL TO EXPLORE</span>
        <span className="text-charcoal/50">↓</span>
      </div>
    </section>
  );
}
