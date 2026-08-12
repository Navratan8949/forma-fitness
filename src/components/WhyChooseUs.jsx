import RevealOnScroll from './RevealOnScroll';

const features = [
  { number: '01', title: 'EXPERT COACHING', desc: 'Certified coaches who program with intent and correct with precision.' },
  { number: '02', title: 'PREMIUM EQUIPMENT', desc: 'Curated, commercial-grade gear maintained to a faultless standard.' },
  { number: '03', title: 'PERSONALIZED PROGRAMS', desc: 'Training built around your body, your numbers and your schedule.' },
  { number: '04', title: 'RESULT-DRIVEN TRAINING', desc: 'Every program is measured. Progress is tracked, not assumed.' },
  { number: '05', title: 'SUPPORTIVE COMMUNITY', desc: 'A room full of people who are serious about getting better.' },
  { number: '06', title: 'CLEAN PREMIUM FACILITY', desc: 'A studio-grade environment that feels as good as it performs.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-ivory py-20 lg:py-32">
      <div className="container-edge">
        <div className="mb-14">
          <RevealOnScroll as="p" className="label mb-4">
            08 / WHY US
          </RevealOnScroll>
          <RevealOnScroll as="h2" delay={80} className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-charcoal">
            WHY PEOPLE TRAIN WITH US<span className="text-lime">.</span>
          </RevealOnScroll>
        </div>

        <div className="border-t border-charcoal/15">
          {features.map((f, i) => (
            <RevealOnScroll
              key={f.number}
              delay={i * 50}
              className="group grid grid-cols-12 items-center gap-4 border-b border-charcoal/15 py-7 transition-colors duration-300 hover:bg-beige/40 lg:py-9"
            >
              <span className="col-span-2 text-sm font-semibold text-charcoal/40 lg:col-span-1 lg:text-base">
                {f.number}
              </span>
              <h3 className="col-span-10 text-[clamp(1.25rem,3vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-charcoal lg:col-span-4">
                {f.title}
              </h3>
              <p className="col-span-12 text-[14px] leading-relaxed text-charcoal/55 lg:col-span-6 lg:col-start-7">
                {f.desc}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
