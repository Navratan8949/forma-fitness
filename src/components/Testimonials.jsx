import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { testimonials } from '@/data/testimonials';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="bg-ivory py-20 lg:py-32">
      <div className="container-narrow">
        <RevealOnScroll as="p" className="label mb-8 text-center">
          10 / TESTIMONIALS
        </RevealOnScroll>

        <div className="flex flex-col items-center text-center">
          <RevealOnScroll as="blockquote" delay={80} className="max-w-3xl">
            <p className="font-serif text-[clamp(1.75rem,4vw,3rem)] font-normal italic leading-[1.25] text-charcoal">
              "{current.quote}"
            </p>
          </RevealOnScroll>

          <RevealOnScroll as="div" delay={160} className="mt-8 flex flex-col items-center gap-1">
            <span className="text-[14px] font-bold uppercase tracking-[0.18em] text-charcoal">
              — {current.name}
            </span>
            <span className="text-[12px] uppercase tracking-[0.15em] text-charcoal/45">
              {current.role}
            </span>
          </RevealOnScroll>
        </div>

        {/* controls */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <button
            onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)}
            className="flex h-11 w-11 items-center justify-center border border-charcoal/20 text-charcoal transition-colors duration-300 hover:bg-charcoal hover:text-ivory"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={18} strokeWidth={1.5} />
          </button>

          <div className="flex gap-2 px-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 transition-all duration-300 ${
                  i === active ? 'w-8 bg-charcoal' : 'w-2 bg-charcoal/25 hover:bg-charcoal/50'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setActive((a) => (a + 1) % testimonials.length)}
            className="flex h-11 w-11 items-center justify-center border border-charcoal/20 text-charcoal transition-colors duration-300 hover:bg-charcoal hover:text-ivory"
            aria-label="Next testimonial"
          >
            <ArrowRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
