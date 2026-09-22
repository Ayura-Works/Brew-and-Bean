import { useState } from 'react';
import { Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks';

export default function Newsletter() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="py-24 sm:py-32 bg-cream-200/50 border-y border-espresso-200/50">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl px-5 sm:px-8 text-center animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        <p className="text-espresso-500 text-xs font-medium tracking-widest-2 uppercase mb-4">
          Newsletter
        </p>
        <h2 className="font-serif text-espresso-900 text-4xl sm:text-5xl leading-[1.1] tracking-tight">
          Stay in the Loop.
        </h2>
        <p className="mt-6 text-espresso-700 text-lg leading-relaxed">
          New coffees, seasonal drinks, weekend specials, and the occasional excuse to visit.
        </p>

        {submitted ? (
          <div className="mt-10 inline-flex items-center gap-3 text-espresso-700 text-lg">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sage-500 text-cream-50">
              <Check size={18} strokeWidth={2} />
            </span>
            You're on the list. We'll be in touch.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto" noValidate>
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Your email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 bg-cream-50 border border-espresso-300/60 text-espresso-900 placeholder:text-espresso-400 text-sm focus:border-espresso-700 transition-colors"
                aria-invalid={!!error}
                aria-describedby={error ? 'newsletter-error' : undefined}
              />
              <button
                type="submit"
                className="px-7 py-3.5 bg-espresso-900 text-cream-50 text-sm font-medium tracking-wide hover:bg-espresso-800 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            {error && (
              <p id="newsletter-error" className="mt-3 text-terracotta-500 text-sm text-left">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
