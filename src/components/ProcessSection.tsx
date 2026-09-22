import { processSteps } from '@/data';
import { useScrollReveal } from '@/hooks';

export default function ProcessSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 sm:py-32 bg-cream-100 border-y border-espresso-200/50">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="max-w-2xl mb-16">
          <p className="text-espresso-500 text-xs font-medium tracking-widest-2 uppercase mb-4">
            How We Work
          </p>
          <h2 className="font-serif text-espresso-900 text-4xl sm:text-5xl leading-[1.1] tracking-tight">
            Three Steps, Done Right.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className="relative pt-8 border-t border-espresso-300/50"
              style={{
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <span className="absolute -top-px left-0 text-espresso-300 font-serif text-5xl font-bold leading-none -translate-y-1/2 bg-cream-100 pr-3">
                {step.number}
              </span>
              <h3 className="mt-4 font-serif text-espresso-900 text-2xl sm:text-3xl">
                {step.title}
              </h3>
              <p className="mt-3 text-espresso-600 text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
