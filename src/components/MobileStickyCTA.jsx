import { Phone, MessageCircle } from 'lucide-react';

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-px border-t border-charcoal/10 bg-ivory/95 backdrop-blur-md lg:hidden">
      <a
        href="#trial"
        className="flex flex-1 items-center justify-center gap-2 bg-lime py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-charcoal transition-colors duration-300 hover:bg-lime-dark"
      >
        BOOK FREE TRIAL
      </a>
      <a
        href="https://wa.me/919820012345"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-charcoal py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-ivory transition-colors duration-300"
      >
        <MessageCircle size={15} strokeWidth={1.5} /> WHATSAPP
      </a>
    </div>
  );
}
