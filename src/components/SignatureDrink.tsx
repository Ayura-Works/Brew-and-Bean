import { ArrowRight } from 'lucide-react';
import { images } from '@/data';
import { useScrollReveal } from '@/hooks';

export default function SignatureDrink() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-espresso-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] lg:min-h-[80vh]">
        {/* Image */}
        <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-full">
          <img
            src={images.signature}
            alt="An espresso in a patterned cup on a rustic wooden table, warmly lit from above"
            className="h-full w-full object-cover absolute inset-0"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div
          ref={ref}
          className={`order-2 lg:order-1 flex items-center px-6 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-24 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-md">
            <p className="text-caramel-400 text-xs font-medium tracking-widest-2 uppercase mb-6">
              Our Signature / $6.50
            </p>
            <h2 className="font-serif text-cream-50 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              The Brown Sugar
              <br />
              Latte
            </h2>
            <p className="mt-6 text-cream-200/80 text-lg leading-relaxed">
              Double espresso, steamed milk, brown sugar syrup, and a touch of sea salt. Shaken over ice until the foam is just right.
            </p>
            <a
              href="#menu"
              className="group mt-8 inline-flex items-center gap-2 text-cream-50 text-sm font-medium tracking-wide border-b border-cream-200/40 pb-1 hover:border-cream-50 transition-colors"
            >
              See it on the menu
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
