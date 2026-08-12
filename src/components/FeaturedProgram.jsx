import RevealOnScroll from './RevealOnScroll';
import { Check } from 'lucide-react';

const benefits = [
  'Personalized training',
  'Weekly progress tracking',
  'Strength assessment',
  'Nutrition guidance',
  'Coach support',
];

export default function FeaturedProgram() {
  return (
    <section id="featured" className="bg-charcoal py-20 text-ivory lg:py-32">
      <div className="container-edge">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <RevealOnScroll as="p" className="label-light mb-6">
              OUR SIGNATURE PROGRAM
            </RevealOnScroll>
            <RevealOnScroll as="h2" delay={80} className="text-[clamp(2rem,5vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
              TRAIN HARD.
              <br />
              TRAIN <span className="font-serif font-normal italic text-lime">intelligent</span>.
            </RevealOnScroll>
            <RevealOnScroll as="p" delay={160} className="mt-7 max-w-md text-[16px] leading-relaxed text-ivory/70">
              A fully personalized 12-week program built around your body, your numbers and your
              goals. Every set, every rep, every meal — engineered for measurable progress.
            </RevealOnScroll>

            <RevealOnScroll as="ul" delay={240} className="mt-9 space-y-3.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px] text-ivory/85">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-lime text-charcoal">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </RevealOnScroll>

            <RevealOnScroll as="div" delay={320} className="mt-10 flex flex-wrap items-center gap-8">
              <a href="#trial" className="btn-primary">
                VIEW PROGRAM
                <span aria-hidden="true">→</span>
              </a>
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="label-light">DURATION</span>
                  <span className="mt-1 text-lg font-semibold text-ivory">12 WEEKS</span>
                </div>
                <div className="flex flex-col">
                  <span className="label-light">DIFFICULTY</span>
                  <span className="mt-1 text-lg font-semibold text-ivory">INTERMEDIATE+</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-6">
            <RevealOnScroll delay={200} className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden bg-ink">
                <img
                  src="https://images.pexels.com/photos/4720793/pexels-photo-4720793.jpeg?auto=compress&cs=tinysrgb&w=1260"
                  alt="Athlete performing a barbell training session"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="absolute right-0 top-0 bg-lime px-5 py-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal">
                  12 WEEK PERFORMANCE PROGRAM
                </span>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
