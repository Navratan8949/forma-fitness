import RevealOnScroll from './RevealOnScroll';
import { trainers } from '@/data/trainers';
import { Instagram, Youtube, Facebook } from 'lucide-react';

const socialIcons = {
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
};

export default function Trainers() {
  return (
    <section id="trainers" className="bg-beige py-20 lg:py-32">
      <div className="container-edge">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <RevealOnScroll as="p" className="label mb-4">
              04 / THE COACHES
            </RevealOnScroll>
            <RevealOnScroll as="h2" delay={80} className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-charcoal">
              MEET THE COACHES<span className="text-lime">.</span>
            </RevealOnScroll>
          </div>
          <RevealOnScroll as="p" delay={160} className="max-w-sm text-[15px] leading-relaxed text-charcoal/60">
            Experienced, certified, and invested in your progress.
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer, i) => (
            <RevealOnScroll key={trainer.name} delay={i * 90} className="group">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-ivory">
                <img
                  src={trainer.image}
                  alt={`${trainer.name} — ${trainer.specialty}`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* social links */}
                <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {Object.entries(trainer.socials).map(([key, href]) => {
                    const Icon = socialIcons[key];
                    return (
                      <a
                        key={key}
                        href={href}
                        aria-label={`${trainer.name} on ${key}`}
                        className="flex h-9 w-9 items-center justify-center bg-ivory text-charcoal transition-colors duration-300 hover:bg-lime"
                      >
                        <Icon size={15} strokeWidth={1.5} />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-bold tracking-[-0.01em] text-charcoal">{trainer.name}</h3>
                <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.12em] text-charcoal/55">
                  {trainer.specialty}
                </p>
                <p className="mt-1 text-[13px] text-charcoal/45">{trainer.experience}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
