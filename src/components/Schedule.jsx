import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import BookingModal from './BookingModal';
import { days, schedule } from '@/data/schedule';

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('MON');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleBook = (cls) => {
    setSelectedClass({ ...cls, day: activeDay });
    setModalOpen(true);
  };

  return (
    <section id="schedule" className="bg-ivory py-20 lg:py-32">
      <div className="container-edge">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <RevealOnScroll as="p" className="label mb-4">
              05 / WEEKLY SCHEDULE
            </RevealOnScroll>
            <RevealOnScroll as="h2" delay={80} className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-charcoal">
              FIND YOUR CLASS<span className="text-lime">.</span>
            </RevealOnScroll>
          </div>
          <RevealOnScroll as="p" delay={160} className="max-w-sm text-[15px] leading-relaxed text-charcoal/60">
            A full week of structured training. Pick your day and reserve your spot.
          </RevealOnScroll>
        </div>

        {/* day tabs */}
        <RevealOnScroll as="div" delay={120} className="no-scrollbar -mx-6 mb-8 overflow-x-auto px-6 lg:mx-0 lg:px-0">
          <div className="flex min-w-min gap-2 border-b border-charcoal/15">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`shrink-0 border-b-2 px-5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                  activeDay === day
                    ? 'border-charcoal text-charcoal'
                    : 'border-transparent text-charcoal/40 hover:text-charcoal/70'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* class list */}
        <div className="divide-y divide-charcoal/10 border-y border-charcoal/15">
          {schedule[activeDay].map((cls, i) => (
            <RevealOnScroll
              key={`${activeDay}-${i}`}
              delay={i * 50}
              className="group grid grid-cols-2 items-center gap-4 py-6 transition-colors duration-300 hover:bg-beige/50 md:grid-cols-12 md:gap-6"
            >
              <div className="md:col-span-2">
                <span className="text-base font-bold tracking-tight text-charcoal">{cls.time}</span>
              </div>
              <div className="md:col-span-3">
                <span className="text-[15px] font-semibold text-charcoal">{cls.name}</span>
              </div>
              <div className="hidden md:col-span-3 md:block">
                <span className="text-[14px] text-charcoal/60">{cls.trainer}</span>
              </div>
              <div className="hidden md:col-span-2 md:block">
                <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-charcoal/50">{cls.duration}</span>
              </div>
              <div className="hidden md:col-span-1 md:block">
                <span className="text-[13px] text-charcoal/50">{cls.spots} SPOTS</span>
              </div>
              <div className="col-span-2 md:col-span-1 md:justify-self-end">
                <button
                  onClick={() => handleBook(cls)}
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.15em] text-charcoal transition-all duration-300 hover:gap-2.5 hover:text-lime-dark"
                >
                  BOOK
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <BookingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedClass={selectedClass}
      />
    </section>
  );
}
