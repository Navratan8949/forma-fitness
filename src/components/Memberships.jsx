import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { memberships } from '@/data/memberships';
import { Check } from 'lucide-react';

export default function Memberships() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="memberships" className="bg-ivory py-20 lg:py-32">
      <div className="container-edge">
        <div className="mb-14 flex flex-col items-center text-center">
          <RevealOnScroll as="p" className="label mb-4">
            03 / MEMBERSHIPS
          </RevealOnScroll>
          <RevealOnScroll as="h2" delay={80} className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-charcoal">
            CHOOSE YOUR LEVEL<span className="text-lime">.</span>
          </RevealOnScroll>
          <RevealOnScroll as="p" delay={160} className="mt-5 max-w-sm text-[15px] leading-relaxed text-charcoal/60">
            Simple memberships. Serious results.
          </RevealOnScroll>

          {/* toggle */}
          <RevealOnScroll as="div" delay={240} className="mt-8 flex items-center gap-4">
            <span className={`text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors ${!yearly ? 'text-charcoal' : 'text-charcoal/40'}`}>
              MONTHLY
            </span>
            <button
              onClick={() => setYearly((v) => !v)}
              className={`relative h-8 w-16 border border-charcoal/20 transition-colors duration-300 ${yearly ? 'bg-charcoal' : 'bg-transparent'}`}
              aria-label="Toggle billing period"
            >
              <span
                className={`absolute top-1 h-6 w-6 bg-lime transition-all duration-300 ${yearly ? 'left-9' : 'left-1'}`}
              />
            </button>
            <span className={`text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors ${yearly ? 'text-charcoal' : 'text-charcoal/40'}`}>
              YEARLY
            </span>
            <span className="bg-lime px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-charcoal">
              SAVE 20%
            </span>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {memberships.map((plan, i) => {
            const price = yearly ? plan.yearly : plan.monthly;
            const period = yearly ? '/ YEAR' : '/ MONTH';
            return (
              <RevealOnScroll
                key={plan.id}
                delay={i * 100}
                className={`relative flex flex-col border p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'border-charcoal bg-charcoal text-ivory'
                    : 'border-charcoal/15 bg-ivory text-charcoal hover:border-charcoal/40'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-8 bg-lime px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-charcoal">
                    MOST POPULAR
                  </span>
                )}

                <h3 className={`text-[15px] font-bold uppercase tracking-[0.2em] ${plan.popular ? 'text-lime' : 'text-charcoal'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-[13px] ${plan.popular ? 'text-ivory/60' : 'text-charcoal/50'}`}>
                  {plan.description}
                </p>

                <div className="mt-7 flex items-end gap-1">
                  <span className="text-[11px] font-semibold text-charcoal/40">₹</span>
                  <span className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-none tracking-[-0.03em]">
                    {price.toLocaleString('en-IN')}
                  </span>
                  <span className={`mb-1 text-[12px] font-semibold ${plan.popular ? 'text-ivory/50' : 'text-charcoal/40'}`}>
                    {period}
                  </span>
                </div>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-3 text-[14px] ${plan.popular ? 'text-ivory/85' : 'text-charcoal/75'}`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center ${
                          plan.popular ? 'bg-lime text-charcoal' : 'bg-charcoal text-ivory'
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#trial"
                  className={`mt-9 inline-flex items-center justify-center gap-2 px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 active:scale-[0.98] ${
                    plan.popular
                      ? 'btn-primary'
                      : 'border border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-ivory hover:gap-3'
                  }`}
                >
                  {plan.cta}
                  <span aria-hidden="true">→</span>
                </a>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
