import { useRef, useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

const transformations = [
  {
    name: 'Rahul',
    goal: 'Strength + Fat Loss',
    period: '12 Weeks',
    testimonial: 'I walked in wanting to lose a few kilos. I walked out stronger than I have ever been.',
    before: 'https://images.pexels.com/photos/5714276/pexels-photo-5714276.jpeg?auto=compress&cs=tinysrgb&w=900',
    after: 'https://images.pexels.com/photos/30545765/pexels-photo-30545765.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Sneha',
    goal: 'Muscle Building',
    period: '16 Weeks',
    testimonial: 'The programming was precise. I finally built the strength and shape I had been chasing for years.',
    before: 'https://images.pexels.com/photos/14055666/pexels-photo-14055666.jpeg?auto=compress&cs=tinysrgb&w=900',
    after: 'https://images.pexels.com/photos/15549976/pexels-photo-15549976.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Arjun',
    goal: 'Performance Training',
    period: '20 Weeks',
    testimonial: 'My lifts went up, my recovery got faster, and I feel like an athlete again.',
    before: 'https://images.pexels.com/photos/17944268/pexels-photo-17944268.jpeg?auto=compress&cs=tinysrgb&w=900',
    after: 'https://images.pexels.com/photos/18060117/pexels-photo-18060117.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

function BeforeAfter({ item }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const handleMove = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full cursor-ew-resize overflow-hidden bg-ink select-none"
      onMouseDown={(e) => { dragging.current = true; handleMove(e.clientX); }}
      onMouseMove={(e) => dragging.current && handleMove(e.clientX)}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchStart={(e) => handleMove(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* after (full) */}
      <img src={item.after} alt={`${item.name} after`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" draggable={false} />
      <span className="absolute bottom-3 right-3 bg-ivory px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-charcoal">AFTER</span>

      {/* before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={item.before}
          alt={`${item.name} before`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${100 / (pos / 100)}%`, maxWidth: 'none' }}
          draggable={false}
        />
        <span className="absolute bottom-3 left-3 bg-charcoal px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ivory">BEFORE</span>
      </div>

      {/* handle */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-ivory" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory text-charcoal">
          <span className="text-xs font-bold">↔</span>
        </div>
      </div>
    </div>
  );
}

export default function Transformations() {
  return (
    <section className="bg-ivory py-20 lg:py-32">
      <div className="container-edge">
        <div className="mb-14 flex flex-col items-start">
          <RevealOnScroll as="p" className="label mb-4">
            REAL PEOPLE / REAL PROGRESS
          </RevealOnScroll>
          <RevealOnScroll as="h2" delay={80} className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-charcoal">
            RESULTS YOU CAN SEE<span className="text-lime">.</span>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {transformations.map((item, i) => (
            <RevealOnScroll key={item.name} delay={i * 100} className="flex flex-col">
              <BeforeAfter item={item} />
              <div className="mt-5">
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-charcoal">{item.name}</span>
                  <span className="text-charcoal/30">/</span>
                  <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-charcoal/55">{item.period}</span>
                </div>
                <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.12em] text-lime-dark">{item.goal}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-charcoal/65">
                  "{item.testimonial}"
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
