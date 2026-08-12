import RevealOnScroll from './RevealOnScroll';

export default function TrialCTA() {
  return (
    <section id="trial" className="relative overflow-hidden bg-ink py-24 text-ivory lg:py-36">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/9545909/pexels-photo-9545909.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Premium gym interior"
          className="h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/85" />
      </div>

      <div className="container-edge relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <RevealOnScroll as="p" className="label-light mb-6">
            FREE TRIAL SESSION
          </RevealOnScroll>
          <RevealOnScroll as="h2" delay={80} className="text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
            READY TO START<span className="text-lime">?</span>
          </RevealOnScroll>
          <RevealOnScroll as="p" delay={160} className="mt-6 max-w-md text-[16px] leading-relaxed text-ivory/70">
            Book your free trial session and experience the difference.
          </RevealOnScroll>
          <RevealOnScroll as="div" delay={240} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              BOOK FREE TRIAL
              <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn-ghost-light">
              CONTACT US
              <span aria-hidden="true">→</span>
            </a>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
