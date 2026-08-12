import RevealOnScroll from './RevealOnScroll';
import { programs } from '@/data/programs';

export default function Programs() {
  return (
    <section id="programs" className="bg-ivory py-20 lg:py-32">
      <div className="container-edge">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <RevealOnScroll as="p" className="label mb-4">
              02 / TRAINING PROGRAMS
            </RevealOnScroll>
            <RevealOnScroll as="h2" delay={80} className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-charcoal">
              TRAIN WITH PURPOSE<span className="text-lime">.</span>
            </RevealOnScroll>
          </div>
          <RevealOnScroll as="p" delay={160} className="max-w-sm text-[15px] leading-relaxed text-charcoal/60">
            Structured programs designed around your goals.
          </RevealOnScroll>
        </div>

        <div className="border-t border-charcoal/15">
          {programs.map((program, i) => (
            <RevealOnScroll
              key={program.number}
              delay={i * 50}
              className="group relative overflow-hidden border-b border-charcoal/15"
            >
              <a href="#featured" className="block">
                {/* hover image */}
                <div className="pointer-events-none absolute right-6 top-1/2 z-0 hidden h-32 w-48 -translate-y-1/2 overflow-hidden opacity-0 transition-all duration-500 group-hover:opacity-100 lg:block">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="relative z-10 flex items-center gap-6 py-8 transition-colors duration-500 group-hover:bg-charcoal lg:py-10">
                  <span className="w-12 shrink-0 font-sans text-sm font-semibold text-charcoal/40 transition-colors duration-500 group-hover:text-lime lg:w-16 lg:text-base">
                    {program.number}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-tight tracking-[-0.02em] text-charcoal transition-colors duration-500 group-hover:text-ivory">
                      {program.name}
                    </h3>
                    <p className="mt-2 max-w-md text-[14px] leading-relaxed text-charcoal/55 transition-colors duration-500 group-hover:text-ivory/60">
                      {program.description}
                    </p>
                  </div>

                  <span className="ml-auto shrink-0 text-2xl text-charcoal/40 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-lime">
                    →
                  </span>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
