import { ArrowRight, MapPin } from 'lucide-react';
import { images } from '@/data';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="A simple brown ceramic mug of coffee on a wooden table in warm, subdued natural light"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/30 to-espresso-950/50" />
      </div>

      {/* Vertical metadata — desktop */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10">
        <span className="text-cream-200/70 text-[10px] font-medium tracking-widest-2 uppercase [writing-mode:vertical-rl] rotate-180">
          Specialty Coffee / Est. 2018
        </span>
        <div className="w-px h-20 bg-cream-200/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-5 sm:px-8 pb-16 sm:pb-20 lg:pb-28 pt-32">
        <div className="max-w-3xl">
          <p
            className="text-cream-200/80 text-xs font-medium tracking-widest-2 uppercase mb-6 opacity-0"
            style={{ animation: 'fadeIn 0.6s ease 0.2s forwards' }}
          >
            Specialty Coffee / Est. 2018
          </p>
          <h1
            className="font-serif text-cream-50 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-balance opacity-0"
            style={{ animation: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards' }}
          >
            Coffee Worth
            <br />
            Slowing Down For.
          </h1>
          <p
            className="mt-6 text-cream-100/90 text-lg sm:text-xl leading-relaxed max-w-xl opacity-0"
            style={{ animation: 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards' }}
          >
            Small-batch coffee, handcrafted drinks, and something fresh from the oven — served at your neighborhood table.
          </p>
          <div
            className="mt-8 flex flex-col sm:flex-row gap-4 opacity-0"
            style={{ animation: 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards' }}
          >
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-cream-50 text-espresso-900 text-sm font-medium tracking-wide hover:bg-cream-100 transition-all duration-300"
            >
              Explore the Menu
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
            <a
              href="#visit"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-cream-100/50 text-cream-50 text-sm font-medium tracking-wide hover:bg-cream-50/10 transition-all duration-300"
            >
              <MapPin size={16} strokeWidth={1.5} />
              Find Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 opacity-0"
        style={{ animation: 'fadeIn 0.6s ease 1.2s forwards' }}
      >
        <div className="w-px h-12 bg-cream-200/40 animate-pulse" />
      </div>
    </section>
  );
}
