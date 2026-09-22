import { testimonials } from '@/data';
import { useScrollReveal } from '@/hooks';

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 sm:py-32 bg-cream-50">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-espresso-500 text-xs font-medium tracking-widest-2 uppercase mb-4">
            What People Say
          </p>
          <h2 className="font-serif text-espresso-900 text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-balance">
            Customer Impressions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <blockquote className="font-serif text-espresso-800 text-xl sm:text-2xl leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-espresso-500 text-sm font-medium tracking-wide uppercase">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
