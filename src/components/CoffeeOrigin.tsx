import { images } from '@/data';
import { useScrollReveal } from '@/hooks';

export default function CoffeeOrigin() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 bg-espresso-950 overflow-hidden">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="image-reveal relative aspect-[4/5] overflow-hidden">
              <img
                src={images.coffeeBeans}
                alt="Close-up of hands holding fresh brown coffee beans against a dark background"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-caramel-500/40 hidden sm:block" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-caramel-400 text-xs font-medium tracking-widest-2 uppercase mb-6">
              From Farm to Cup
            </p>
            <h2 className="font-serif text-cream-50 text-4xl sm:text-5xl leading-[1.1] tracking-tight">
              Every cup starts
              <br />
              with a decision.
            </h2>
            <p className="mt-6 text-cream-200/80 text-lg leading-relaxed max-w-md">
              Where the bean comes from, how it's roasted, and how it's brewed — each step changes what ends up in your cup. We pay attention to all three.
            </p>

            <div className="mt-12 space-y-6">
              {[
                { num: '01', label: 'Sourcing', text: 'Small farms, direct relationships, fair prices.' },
                { num: '02', label: 'Roasting', text: 'Small batches, rested, never rushed.' },
                { num: '03', label: 'Brewing', text: 'Measured, timed, and tasted daily.' },
              ].map((step) => (
                <div key={step.num} className="flex gap-6 items-start border-t border-cream-200/15 pt-5">
                  <span className="text-caramel-400 font-mono text-sm pt-1">{step.num}</span>
                  <div>
                    <h3 className="text-cream-50 font-medium text-lg">{step.label}</h3>
                    <p className="text-cream-200/60 text-sm mt-1">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
