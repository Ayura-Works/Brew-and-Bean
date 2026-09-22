import { coffees } from '@/data';
import { useScrollReveal } from '@/hooks';

export default function CoffeeSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="coffee" className="py-24 sm:py-32 bg-cream-100 border-y border-espresso-200/50">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="max-w-2xl mb-16">
          <p className="text-espresso-500 text-xs font-medium tracking-widest-2 uppercase mb-4">
            Roasted With Intention
          </p>
          <h2 className="font-serif text-espresso-900 text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            The Coffee
          </h2>
          <p className="mt-6 text-espresso-700 text-lg leading-relaxed max-w-xl">
            We work with small farms and specialty producers who treat coffee as a craft, not a commodity. Each origin is roasted in small batches and rested before it reaches your cup.
          </p>
        </div>

        <div className="border-t border-espresso-300/40">
          {coffees.map((coffee, i) => (
            <article
              key={coffee.name}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-espresso-300/40 transition-colors duration-300 hover:bg-cream-200/40 px-2 md:px-4 -mx-2 md:-mx-4"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="md:col-span-1 text-espresso-400 text-sm font-mono pt-1">
                0{i + 1}
              </div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-espresso-900 text-2xl sm:text-3xl leading-tight group-hover:text-espresso-700 transition-colors">
                  {coffee.name}
                </h3>
                <p className="mt-1 text-espresso-500 text-sm">{coffee.origin}</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-espresso-600 text-sm leading-relaxed">{coffee.notes}</p>
                <p className="mt-2 text-espresso-400 text-xs uppercase tracking-wide">{coffee.roast} roast</p>
              </div>
              <div className="md:col-span-2 md:text-right flex items-center md:justify-end">
                <span className="text-espresso-700 text-lg font-medium">{coffee.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
