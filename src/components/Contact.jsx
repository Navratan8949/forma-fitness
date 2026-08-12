import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { Phone, MessageCircle, MapPin, Mail, Clock, Check } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'ADDRESS', value: '214 Wellness Avenue, Bandra West, Mumbai 400050' },
  { icon: Phone, label: 'PHONE', value: '+91 98200 12345' },
  { icon: Mail, label: 'EMAIL', value: 'hello@formastudio.in' },
  { icon: Clock, label: 'OPENING HOURS', value: 'Mon–Sat 5:30 AM – 11:00 PM\nSun 7:00 AM – 8:00 PM' },
];

const interests = ['General Membership', 'Personal Training', 'Group Classes', 'Nutrition Coaching', 'Free Trial'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!form.email.trim()) errs.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.phone.trim()) errs.phone = 'Please enter your phone number';
    if (!form.message.trim()) errs.message = 'Please enter a message';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <section id="contact" className="bg-ivory py-20 lg:py-32">
      <div className="container-edge">
        <div className="mb-14">
          <RevealOnScroll as="p" className="label mb-4">
            12 / CONTACT
          </RevealOnScroll>
          <RevealOnScroll as="h2" delay={80} className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-charcoal">
            LET'S GET YOU <span className="font-serif font-normal italic text-charcoal/90">moving</span>.
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* contact info */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((info, i) => (
                <RevealOnScroll key={info.label} delay={i * 60} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-charcoal text-ivory">
                    <info.icon size={16} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="label mb-1.5">{info.label}</p>
                    <p className="whitespace-pre-line text-[14px] leading-relaxed text-charcoal/75">{info.value}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll as="div" delay={300} className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+919820012345"
                className="inline-flex items-center gap-2 border border-charcoal/20 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-charcoal transition-colors duration-300 hover:bg-charcoal hover:text-ivory"
              >
                <Phone size={14} strokeWidth={1.5} /> CALL NOW
              </a>
              <a
                href="https://wa.me/919820012345"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-charcoal/20 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-charcoal transition-colors duration-300 hover:bg-charcoal hover:text-ivory"
              >
                <MessageCircle size={14} strokeWidth={1.5} /> WHATSAPP
              </a>
              <a
                href="https://maps.google.com/?q=Bandra+West+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-charcoal/20 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-charcoal transition-colors duration-300 hover:bg-charcoal hover:text-ivory"
              >
                <MapPin size={14} strokeWidth={1.5} /> GOOGLE MAPS
              </a>
            </RevealOnScroll>
          </div>

          {/* form */}
          <div className="lg:col-span-7">
            <RevealOnScroll delay={120}>
              {submitted ? (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center border border-charcoal/15 bg-beige/40 p-10 text-center">
                  <span className="flex h-14 w-14 items-center justify-center bg-lime text-charcoal">
                    <Check size={28} strokeWidth={2.5} />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-charcoal">MESSAGE SENT</h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-charcoal/60">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', interest: '', message: '' }); }}
                    className="btn-secondary mt-8"
                  >
                    SEND ANOTHER
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="border border-charcoal/15 p-8 md:p-10">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="c-name" className="label mb-2 block">NAME</label>
                      <input id="c-name" type="text" value={form.name} onChange={update('name')} className="input-field" placeholder="Your name" />
                      {errors.name && <p className="mt-1 text-[12px] text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="c-email" className="label mb-2 block">EMAIL</label>
                      <input id="c-email" type="email" value={form.email} onChange={update('email')} className="input-field" placeholder="you@email.com" />
                      {errors.email && <p className="mt-1 text-[12px] text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="c-phone" className="label mb-2 block">PHONE</label>
                      <input id="c-phone" type="tel" value={form.phone} onChange={update('phone')} className="input-field" placeholder="+91 ..." />
                      {errors.phone && <p className="mt-1 text-[12px] text-red-600">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="c-interest" className="label mb-2 block">INTERESTED IN</label>
                      <select id="c-interest" value={form.interest} onChange={update('interest')} className="input-field cursor-pointer">
                        <option value="">Select an option</option>
                        {interests.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="c-message" className="label mb-2 block">MESSAGE</label>
                    <textarea id="c-message" rows={4} value={form.message} onChange={update('message')} className="input-field resize-none" placeholder="Tell us about your goals..." />
                    {errors.message && <p className="mt-1 text-[12px] text-red-600">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-primary mt-8">
                    SEND ENQUIRY
                    <span aria-hidden="true">→</span>
                  </button>
                </form>
              )}
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
