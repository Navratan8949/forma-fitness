import RevealOnScroll from './RevealOnScroll';

export default function About() {
  return (
    <section id="about" className="bg-ivory py-20 lg:py-32">
      <div className="container-edge">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <RevealOnScroll as="p" className="label mb-6">
              01 / THE STUDIO
            </RevealOnScroll>
            <RevealOnScroll as="h2" delay={80} className="text-[clamp(2rem,4.5vw,3.75rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-charcoal">
              MORE THAN A GYM.
              <br />
              A PLACE TO BECOME
              <br />
              <span className="font-serif font-normal italic text-charcoal/90">better.</span>
            </RevealOnScroll>
            <RevealOnScroll as="p" delay={160} className="mt-7 max-w-md text-[16px] leading-relaxed text-charcoal/70">
              We combine expert coaching, premium equipment, intelligent programming and a
              supportive community to create a training environment built around real progress.
            </RevealOnScroll>
            <RevealOnScroll as="div" delay={240} className="mt-8">
              <a href="#why" className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-charcoal">
                DISCOVER OUR STORY
                <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">→</span>
              </a>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-6">
            <RevealOnScroll delay={200} className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden bg-beige">
                <img
                  src="https://images.pexels.com/photos/35215412/pexels-photo-35215412.jpeg?auto=compress&cs=tinysrgb&w=1260"
                  alt="Spacious modern gym interior with premium equipment"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden bg-charcoal px-6 py-4 sm:block">
                <span className="label-light">SINCE 2020</span>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
