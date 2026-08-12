import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

function getCategory(bmi) {
  if (bmi < 18.5) return { label: 'UNDERWEIGHT', color: 'text-amber-600' };
  if (bmi < 25) return { label: 'NORMAL RANGE', color: 'text-lime-dark' };
  if (bmi < 30) return { label: 'OVERWEIGHT', color: 'text-amber-600' };
  return { label: 'OBESE', color: 'text-red-600' };
}

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculate = (e) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w || h <= 0 || w <= 0) {
      setError('Please enter valid height and weight.');
      setResult(null);
      return;
    }
    setError('');
    const bmi = w / ((h / 100) * (h / 100));
    const cat = getCategory(bmi);
    setResult({ value: bmi.toFixed(1), label: cat.label, color: cat.color });
  };

  return (
    <section className="bg-charcoal py-20 text-ivory lg:py-28">
      <div className="container-edge">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <RevealOnScroll as="p" className="label-light mb-4">
              06 / ASSESSMENT
            </RevealOnScroll>
            <RevealOnScroll as="h2" delay={80} className="text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1] tracking-[-0.03em]">
              KNOW YOUR
              <br />
              <span className="font-serif font-normal italic text-lime">numbers</span>.
            </RevealOnScroll>
            <RevealOnScroll as="p" delay={160} className="mt-6 max-w-md text-[15px] leading-relaxed text-ivory/65">
              A quick body mass index check. It is a general indicator — not a full picture of your
              health. For a complete assessment, book a session with one of our coaches.
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={200}>
            <form onSubmit={calculate} className="border border-ivory/15 p-8 md:p-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <label htmlFor="bmi-height" className="label-light mb-2 block">HEIGHT (CM)</label>
                  <input
                    id="bmi-height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="175"
                    className="input-field-light"
                  />
                </div>
                <div>
                  <label htmlFor="bmi-weight" className="label-light mb-2 block">WEIGHT (KG)</label>
                  <input
                    id="bmi-weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="72"
                    className="input-field-light"
                  />
                </div>
                <div>
                  <label htmlFor="bmi-age" className="label-light mb-2 block">AGE</label>
                  <input
                    id="bmi-age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="28"
                    className="input-field-light"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary mt-8">
                CALCULATE BMI
                <span aria-hidden="true">→</span>
              </button>

              {error && <p className="mt-4 text-[13px] text-red-400">{error}</p>}

              {result && (
                <div className="mt-8 flex items-end gap-8 border-t border-ivory/15 pt-6 animate-fade-in">
                  <div>
                    <span className="label-light">BMI</span>
                    <p className="mt-1 text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-none tracking-[-0.03em] text-lime">
                      {result.value}
                    </p>
                  </div>
                  <div className="pb-1">
                    <span className="label-light">CATEGORY</span>
                    <p className={`mt-1 text-lg font-bold ${result.color}`}>{result.label}</p>
                  </div>
                </div>
              )}
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
