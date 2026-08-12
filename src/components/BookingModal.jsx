import { useEffect, useState } from 'react';
import { X, Check } from 'lucide-react';

export default function BookingModal({ open, onClose, selectedClass }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', date: '' });
      setErrors({});
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!form.email.trim()) errs.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.phone.trim()) errs.phone = 'Please enter your phone number';
    if (!form.date) errs.date = 'Please select a date';
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
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-charcoal/50 animate-fade-in" onClick={onClose} />

      <div className="relative z-10 w-full max-w-lg animate-scale-in bg-ivory p-8 md:p-10">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center text-charcoal/60 transition-colors hover:text-charcoal"
          aria-label="Close booking modal"
        >
          <X size={22} strokeWidth={1.5} />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center py-8 text-center">
            <span className="flex h-14 w-14 items-center justify-center bg-lime text-charcoal">
              <Check size={28} strokeWidth={2.5} />
            </span>
            <h3 className="mt-6 text-2xl font-bold tracking-tight text-charcoal">BOOKING CONFIRMED</h3>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-charcoal/60">
              Your spot is reserved. We have sent a confirmation to your email. See you on the
              training floor.
            </p>
            <button onClick={onClose} className="btn-secondary mt-8">
              CLOSE
            </button>
          </div>
        ) : (
          <>
            <span className="label">BOOK A CLASS</span>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-charcoal">RESERVE YOUR SPOT</h3>

            {selectedClass && (
              <div className="mt-5 flex flex-wrap items-center gap-3 border border-charcoal/15 bg-beige/50 px-4 py-3">
                <span className="text-[13px] font-semibold text-charcoal">{selectedClass.name}</span>
                <span className="text-charcoal/30">·</span>
                <span className="text-[13px] text-charcoal/60">{selectedClass.time}</span>
                <span className="text-charcoal/30">·</span>
                <span className="text-[13px] text-charcoal/60">{selectedClass.day}</span>
                <span className="text-charcoal/30">·</span>
                <span className="text-[13px] text-charcoal/60">{selectedClass.trainer}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="bk-name" className="sr-only">Name</label>
                <input
                  id="bk-name"
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={update('name')}
                  className="input-field"
                />
                {errors.name && <p className="mt-1 text-[12px] text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="bk-email" className="sr-only">Email</label>
                <input
                  id="bk-email"
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={update('email')}
                  className="input-field"
                />
                {errors.email && <p className="mt-1 text-[12px] text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="bk-phone" className="sr-only">Phone</label>
                <input
                  id="bk-phone"
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={update('phone')}
                  className="input-field"
                />
                {errors.phone && <p className="mt-1 text-[12px] text-red-600">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="bk-date" className="sr-only">Date</label>
                <input
                  id="bk-date"
                  type="date"
                  value={form.date}
                  onChange={update('date')}
                  className="input-field"
                />
                {errors.date && <p className="mt-1 text-[12px] text-red-600">{errors.date}</p>}
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                CONFIRM BOOKING
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
