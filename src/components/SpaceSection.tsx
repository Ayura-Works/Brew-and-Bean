import { images } from '@/data';
import { useScrollReveal } from '@/hooks';

export default function SpaceSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-cream-100">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="max-w-2xl mb-16">
          <p className="text-espresso-500 text-xs font-medium tracking-widest-2 uppercase mb-4">
            The Space
          </p>
          <h2 className="font-serif text-espresso-900 text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-balance">
            Come In. Stay A While.
          </h2>
          <p className="mt-6 text-espresso-700 text-lg leading-relaxed max-w-xl">
            Natural materials, warm light, quiet corners, and a bar designed around the ritual of coffee. Built for slow mornings and long afternoons.
          </p>
        </div>

        {/* Asymmetric gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Large image */}
          <div className="lg:col-span-7 lg:row-span-2 image-reveal relative aspect-[4/3] lg:aspect-auto lg:min-h-[600px]">
            <img
              src={images.cafeInterior}
              alt="A cozy minimalist café interior with warm wood tones and natural light"
              className="h-full w-full object-cover absolute inset-0"
              loading="lazy"
            />
          </div>

          {/* Top-right image */}
          <div className="lg:col-span-5 image-reveal relative aspect-[4/3] lg:aspect-auto lg:min-h-[285px]">
            <img
              src={images.barista}
              alt="A barista working behind the counter in a cozy, modern café"
              className="h-full w-full object-cover absolute inset-0"
              loading="lazy"
            />
          </div>

          {/* Bottom-right image */}
          <div className="lg:col-span-5 image-reveal relative aspect-[4/3] lg:aspect-auto lg:min-h-[285px]">
            <img
              src={images.cafeInterior2}
              alt="Warm and inviting café interior with wooden furniture and an espresso machine"
              className="h-full w-full object-cover absolute inset-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
