import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { useScrollReveal } from '@/hooks';

export default function VisitSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="visit" className="py-24 sm:py-32 lg:py-40 bg-cream-50">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="max-w-2xl mb-16">
          <p className="text-espresso-500 text-xs font-medium tracking-widest-2 uppercase mb-4">
            Visit Us
          </p>
          <h2 className="font-serif text-espresso-900 text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-balance">
            Find Your Way Here.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info */}
          <div className="space-y-10">
            <div>
              <div className="flex items-start gap-3 mb-2">
                <MapPin size={20} className="text-espresso-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-serif text-espresso-900 text-xl mb-1">Address</h3>
                  <p className="text-espresso-700 leading-relaxed">
                    18 Willow Street<br />
                    Brookfield District<br />
                    Brookfield
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-2">
                <Clock size={20} className="text-espresso-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-serif text-espresso-900 text-xl mb-3">Hours</h3>
                  <dl className="space-y-1.5 text-espresso-700">
                    <div className="flex justify-between gap-8 max-w-xs">
                      <dt>Monday – Friday</dt>
                      <dd>7:00 AM – 7:00 PM</dd>
                    </div>
                    <div className="flex justify-between gap-8 max-w-xs">
                      <dt>Saturday</dt>
                      <dd>8:00 AM – 8:00 PM</dd>
                    </div>
                    <div className="flex justify-between gap-8 max-w-xs">
                      <dt>Sunday</dt>
                      <dd>8:00 AM – 6:00 PM</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-2">
                <Mail size={20} className="text-espresso-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-serif text-espresso-900 text-xl mb-1">Contact</h3>
                  <p className="text-espresso-700">
                    <a href="mailto:hello@brewandbean.example" className="hover:text-espresso-900 transition-colors underline-offset-4 hover:underline">
                      hello@brewandbean.example
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-3">
                <Phone size={20} className="text-espresso-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                <p className="text-espresso-700">
                  <a href="tel:+15550140188" className="hover:text-espresso-900 transition-colors underline-offset-4 hover:underline">
                    +1 (555) 014-0188
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://maps.google.com/?q=18+Willow+Street+Brookfield"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-espresso-900 text-cream-50 text-sm font-medium tracking-wide hover:bg-espresso-800 transition-colors"
              >
                <Navigation size={16} strokeWidth={1.5} />
                Get Directions
              </a>
              <a
                href="tel:+15550140188"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-espresso-800 text-espresso-900 text-sm font-medium tracking-wide hover:bg-espresso-900 hover:text-cream-50 transition-colors"
              >
                <Phone size={16} strokeWidth={1.5} />
                Call the Café
              </a>
            </div>
          </div>

          {/* Stylized map */}
          <div className="relative bg-cream-200/60 border border-espresso-200/60 min-h-[400px] lg:min-h-full overflow-hidden">
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              {/* Streets */}
              <g stroke="#b8a494" strokeWidth="1.5" fill="none" opacity="0.5">
                <line x1="0" y1="80" x2="400" y2="80" />
                <line x1="0" y1="160" x2="400" y2="160" />
                <line x1="0" y1="240" x2="400" y2="240" />
                <line x1="0" y1="320" x2="400" y2="320" />
                <line x1="100" y1="0" x2="100" y2="400" />
                <line x1="200" y1="0" x2="200" y2="400" />
                <line x1="300" y1="0" x2="300" y2="400" />
              </g>
              {/* Diagonal road */}
              <line x1="0" y1="400" x2="400" y2="0" stroke="#9c7f6a" strokeWidth="2" opacity="0.4" />
              {/* Park block */}
              <rect x="220" y="170" width="70" height="60" fill="#8a9a7b" opacity="0.15" />
              {/* Building blocks */}
              <rect x="110" y="90" width="80" height="60" fill="#d4c9be" opacity="0.3" />
              <rect x="310" y="90" width="80" height="60" fill="#d4c9be" opacity="0.3" />
              <rect x="110" y="250" width="80" height="60" fill="#d4c9be" opacity="0.3" />
              <rect x="310" y="250" width="80" height="60" fill="#d4c9be" opacity="0.3" />

              {/* Street labels */}
              <text x="10" y="76" fill="#9c7f6a" fontSize="9" fontFamily="Inter, sans-serif" opacity="0.6">Willow St</text>
              <text x="10" y="156" fill="#9c7f6a" fontSize="9" fontFamily="Inter, sans-serif" opacity="0.6">Elm Ave</text>
              <text x="10" y="236" fill="#9c7f6a" fontSize="9" fontFamily="Inter, sans-serif" opacity="0.6">Oak Lane</text>
              <text x="104" y="395" fill="#9c7f6a" fontSize="9" fontFamily="Inter, sans-serif" opacity="0.6" transform="rotate(-90 104 395)">Birch Rd</text>
            </svg>

            {/* Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative">
                <div className="w-10 h-10 bg-terracotta-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-cream-50">
                  <MapPin size={18} className="text-cream-50" strokeWidth={2} />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-terracotta-500 rotate-45" />
              </div>
              <div className="mt-4 bg-espresso-900 text-cream-50 px-4 py-2 text-xs font-medium tracking-wide whitespace-nowrap">
                Brew &amp; Bean
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
