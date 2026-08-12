import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/nav';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-charcoal/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container-edge flex items-center justify-between">
          <a
            href="#home"
            className={`font-sans text-xl font-extrabold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-charcoal' : 'text-charcoal'
            }`}
          >
            FORMA<span className="text-lime">.</span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[12px] font-semibold uppercase tracking-[0.18em] text-charcoal/70 transition-colors duration-300 hover:text-charcoal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="#trial"
              className="btn-primary"
            >
              JOIN NOW
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="flex items-center justify-center p-2 text-charcoal lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/40 animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-ivory animate-slide-down flex flex-col">
            <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-5">
              <span className="font-sans text-xl font-extrabold tracking-tight text-charcoal">
                FORMA<span className="text-lime">.</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center p-2 text-charcoal"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <ul className="flex flex-col px-6 py-4">
              {navLinks.map((link, i) => (
                <li key={link.href} style={{ animationDelay: `${i * 50}ms` }}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block border-b border-charcoal/10 py-5 text-lg font-semibold uppercase tracking-[0.15em] text-charcoal transition-colors duration-300 hover:text-lime-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto p-6">
              <a
                href="#trial"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center"
              >
                JOIN NOW
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
