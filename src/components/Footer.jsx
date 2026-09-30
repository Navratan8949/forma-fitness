import { navLinks } from '@/data/nav';
import { Instagram, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="container-edge py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* brand */}
          <div className="md:col-span-4">
            <a href="#home" className="font-sans text-2xl font-extrabold tracking-tight text-ivory">
              FORMA<span className="text-lime">.</span>
            </a>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-ivory/55">
              Premium fitness & performance studio. Train smarter. Move stronger. Become the best
              version of yourself.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center border border-ivory/20 transition-colors duration-300 hover:bg-lime hover:text-charcoal hover:border-lime">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center border border-ivory/20 transition-colors duration-300 hover:bg-lime hover:text-charcoal hover:border-lime">
                <Youtube size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center border border-ivory/20 transition-colors duration-300 hover:bg-lime hover:text-charcoal hover:border-lime">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* nav */}
          <div className="md:col-span-3">
            <p className="label-light mb-5">NAVIGATION</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[14px] text-ivory/60 transition-colors duration-300 hover:text-ivory">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="md:col-span-5">
            <p className="label-light mb-5">CONTACT</p>
            <ul className="space-y-3 text-[14px] text-ivory/60">
              <li>hello@formastudio.in</li>
              <li>+91 98200 12345</li>
              <li>214 Wellness Avenue, Bandra West,<br />Mumbai 400050</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/15 pt-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[12px] uppercase tracking-[0.15em] text-ivory/40">
              © 2026 FORMA. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[12px] uppercase tracking-[0.15em] text-ivory/40 mt-1">
              Designed by <a href="https://codepecharcha.com" target="_blank" rel="noopener noreferrer" className="hover:text-ivory transition-colors duration-300">Code pe Charcha</a>
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-[12px] uppercase tracking-[0.15em] text-ivory/40 transition-colors duration-300 hover:text-ivory">PRIVACY</a>
            <a href="#" className="text-[12px] uppercase tracking-[0.15em] text-ivory/40 transition-colors duration-300 hover:text-ivory">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
