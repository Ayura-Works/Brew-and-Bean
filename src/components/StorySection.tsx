import { images } from '@/data';
import { useScrollReveal } from '@/hooks';

export default function StorySection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="story" className="py-24 sm:py-32 lg:py-40 bg-cream-50">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="image-reveal relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src={images.cozyCafe}
                alt="A warm and inviting rustic coffee shop interior with unique lighting and decor"
                className="h-full w-full object-cover absolute inset-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <p className="text-espresso-500 text-xs font-medium tracking-widest-2 uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-espresso-900 text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-balance">
              Built Around the Ritual of Coffee.
            </h2>
            <div className="mt-8 space-y-6 max-w-2xl">
              <p className="text-espresso-700 text-lg leading-relaxed">
                Brew &amp; Bean began with two friends, a borrowed roaster, and a stubborn belief that excellent coffee didn't need to feel intimidating. No jargon, no gatekeeping — just a good cup and a place to enjoy it.
              </p>
              <p className="text-espresso-600 text-base leading-relaxed">
                What started as a weekend pop-up became a corner shop on Willow Street. Over time, the café became a place for morning routines, afternoon conversations, quiet work sessions, and weekend gatherings. The kind of spot where the barista knows your order, but never rushes you through it.
              </p>
              <p className="text-espresso-600 text-base leading-relaxed">
                We're still small. We still roast in batches. And we still believe the best part of coffee is the pause it gives you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
