import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { gallery } from '@/data/gallery';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isOpen = lightboxIndex !== null;

  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(() => setLightboxIndex((i) => (i + 1) % gallery.length), []);
  const prev = useCallback(() => setLightboxIndex((i) => (i - 1 + gallery.length) % gallery.length), []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close, next, prev]);

  const spanClass = (span) => {
    if (span === 'tall') return 'row-span-2';
    if (span === 'wide') return 'sm:col-span-2';
    return '';
  };

  return (
    <section className="bg-beige py-20 lg:py-32">
      <div className="container-edge">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="label mb-4">07 / GALLERY</p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-charcoal">
              THE SPACE<span className="text-lime">.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-charcoal/60">
            A look inside the studio. Click any image to view full screen.
          </p>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[240px] lg:grid-cols-4 lg:gap-4">
          {gallery.map((item, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className={`group relative overflow-hidden bg-ivory ${spanClass(item.span)}`}
              aria-label={`View ${item.caption} full screen`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/30" />
              <span className="absolute bottom-3 left-3 bg-ivory/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-charcoal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 animate-fade-in">
          <button
            onClick={close}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center text-ivory/80 transition-colors hover:text-ivory"
            aria-label="Close lightbox"
          >
            <X size={26} strokeWidth={1.5} />
          </button>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-ivory/80 transition-colors hover:text-ivory md:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-ivory/80 transition-colors hover:text-ivory md:right-8"
            aria-label="Next image"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>

          <div className="flex max-h-[85vh] max-w-4xl flex-col items-center px-16">
            <img
              src={gallery[lightboxIndex].src.replace('w=1260', 'w=1600')}
              alt={gallery[lightboxIndex].alt}
              className="max-h-[78vh] w-auto object-contain animate-scale-in"
            />
            <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-ivory/60">
              {gallery[lightboxIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
