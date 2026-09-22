import { ArrowRight } from 'lucide-react';
import { images } from '@/data';
import { useScrollReveal } from '@/hooks';

export default function SeasonalFeature() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center">
        <img
          src={images.latteArt}
          alt="Close-up of hands pouring frothy milk into a coffee cup creating latte art"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-espresso-950/70" />

        <div
          ref={ref}
          className={`relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-xl">
            <p className="text-caramel-400 text-xs font-medium tracking-widest-2 uppercase mb-6">
              Autumn / 2026
            </p>
            <h2 className="font-serif text-cream-50 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Maple Cinnamon Latte
            </h2>
            <p className="mt-6 text-cream-200/80 text-lg leading-relaxed">
              Espresso, steamed milk, maple, cinnamon, and a little sea salt. Here for the season, gone when it's over.
            </p>
            <a
              href="#visit"
              className="group mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-cream-50 text-espresso-900 text-sm font-medium tracking-wide hover:bg-cream-100 transition-all duration-300"
            >
              Try This Season
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
