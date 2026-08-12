import RevealOnScroll from './RevealOnScroll';

const stats = [
  { value: '500+', label: 'ACTIVE MEMBERS' },
  { value: '20+', label: 'EXPERT TRAINERS' },
  { value: '15+', label: 'WEEKLY CLASSES' },
  { value: '5+', label: 'YEARS OF EXCELLENCE' },
];

export default function Stats() {
  return (
    <section className="border-y border-charcoal/10 bg-ivory">
      <div className="container-edge">
        <div className="grid grid-cols-2 divide-x divide-y divide-charcoal/10 border-charcoal/10 lg:grid-cols-4 lg:divide-y-0">
          {stats.map((stat, i) => (
            <RevealOnScroll
              key={stat.label}
              delay={i * 80}
              className="flex flex-col items-start gap-2 px-6 py-10 lg:px-10 lg:py-14"
            >
              <span className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-none tracking-[-0.03em] text-charcoal">
                {stat.value}
              </span>
              <span className="label">{stat.label}</span>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
