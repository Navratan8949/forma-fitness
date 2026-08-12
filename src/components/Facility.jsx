import RevealOnScroll from './RevealOnScroll';

const zones = [
  { name: 'STRENGTH ZONE', desc: 'Racks, plates and free weights built for serious lifting.' },
  { name: 'FUNCTIONAL ZONE', desc: 'Open floor, rigs, sleds and space for real-world movement.' },
  { name: 'CARDIO AREA', desc: 'Treadmills, rowers and bikes with a view and airflow.' },
  { name: 'PERSONAL TRAINING', desc: 'Private bays for focused one-on-one coaching sessions.' },
  { name: 'RECOVERY ZONE', desc: 'Stretching, mobility and calm — built into every session.' },
];

export default function Facility() {
  return (
    <section className="bg-charcoal py-20 text-ivory lg:py-32">
      <div className="container-edge">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <RevealOnScroll as="p" className="label-light mb-4">
              09 / THE FACILITY
            </RevealOnScroll>
            <RevealOnScroll as="h2" delay={80} className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
              BUILT FOR
              <br />
              BETTER <span className="font-serif font-normal italic text-lime">training</span>.
            </RevealOnScroll>
            <RevealOnScroll as="p" delay={160} className="mt-6 max-w-md text-[15px] leading-relaxed text-ivory/65">
              Every square meter is designed with intention. Five distinct zones, one seamless
              training experience.
            </RevealOnScroll>

            <div className="mt-10 divide-y divide-ivory/15 border-y border-ivory/15">
              {zones.map((zone, i) => (
                <RevealOnScroll
                  key={zone.name}
                  delay={i * 60}
                  className="group flex items-baseline justify-between gap-4 py-5 transition-colors duration-300 hover:text-lime"
                >
                  <div>
                    <h3 className="text-[15px] font-bold uppercase tracking-[0.15em]">{zone.name}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-ivory/55">{zone.desc}</p>
                  </div>
                  <span className="shrink-0 text-charcoal/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-lime">→</span>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll as="div" delay={400} className="mt-9">
              <a href="#gallery" className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-ivory">
                EXPLORE THE FACILITY
                <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">→</span>
              </a>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-6">
            <RevealOnScroll delay={200} className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden bg-ink">
                <img
                  src="https://images.pexels.com/photos/4716814/pexels-photo-4716814.jpeg?auto=compress&cs=tinysrgb&w=1260"
                  alt="Spacious gym interior with treadmills and fitness machines"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
