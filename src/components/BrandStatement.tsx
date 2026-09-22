import { useScrollReveal } from '@/hooks';

export default function BrandStatement() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-cream-50">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <p className="text-espresso-500 text-xs font-medium tracking-widest-2 uppercase mb-4">
              A Neighborhood Ritual
            </p>
            <div className="w-12 h-px bg-espresso-300" />
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-serif text-espresso-900 text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-balance">
              Good coffee is not something to rush.
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl">
              <p className="text-espresso-700 text-base sm:text-lg leading-relaxed">
                Brew &amp; Bean started with a simple idea: that a great cup of coffee is worth a few quiet minutes. We source beans from small farms that care, roast in batches small enough to taste the difference, and brew each cup with the attention it deserves.
              </p>
              <p className="text-espresso-600 text-base leading-relaxed">
                More than that, we wanted to build a place — warm, unhurried, and genuinely human. A spot for morning routines, slow conversations, and the occasional excuse to stay a little longer than planned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
