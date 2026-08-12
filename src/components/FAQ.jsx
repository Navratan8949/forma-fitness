import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { faqs } from '@/data/faqs';
import { Plus } from 'lucide-react';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-beige py-20 lg:py-32">
      <div className="container-narrow">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <RevealOnScroll as="p" className="label mb-4">
              11 / FAQ
            </RevealOnScroll>
            <RevealOnScroll as="h2" delay={80} className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-charcoal">
              QUESTIONS<span className="text-lime">.</span>
            </RevealOnScroll>
          </div>
          <RevealOnScroll as="p" delay={160} className="max-w-xs text-[14px] leading-relaxed text-charcoal/55">
            Everything you need to know before you train with us.
          </RevealOnScroll>
        </div>

        <div className="border-t border-charcoal/15">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <RevealOnScroll key={i} delay={i * 40} className="border-b border-charcoal/15">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`text-[clamp(1rem,2vw,1.25rem)] font-semibold tracking-[-0.01em] transition-colors duration-300 ${isOpen ? 'text-charcoal' : 'text-charcoal/80'}`}>
                    {faq.question}
                  </span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-45 bg-lime text-charcoal' : 'border border-charcoal/20 text-charcoal'}`}>
                    <Plus size={16} strokeWidth={1.5} />
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-12 text-[15px] leading-relaxed text-charcoal/60">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
