import { Instagram, Facebook } from 'lucide-react';
import { navLinks } from '@/data';

export default function Footer() {
  return (
    <footer className="bg-espresso-950 text-cream-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <h2 className="font-serif text-cream-50 text-3xl sm:text-4xl font-bold tracking-tight">
              Brew &amp; Bean
            </h2>
            <p className="mt-4 text-cream-300/70 text-base leading-relaxed max-w-xs">
              Coffee worth slowing down for.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-cream-200/20 text-cream-200/70 hover:text-cream-50 hover:border-cream-200/50 transition-colors"
                aria-label="Visit our Instagram (opens in a new tab)"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-cream-200/20 text-cream-200/70 hover:text-cream-50 hover:border-cream-200/50 transition-colors"
                aria-label="Visit our Facebook (opens in a new tab)"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h3 className="text-cream-300/50 text-xs font-medium tracking-widest-2 uppercase mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream-200/80 hover:text-cream-50 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-cream-300/50 text-xs font-medium tracking-widest-2 uppercase mb-5">
              Find Us
            </h3>
            <address className="not-italic text-cream-200/80 text-sm leading-relaxed space-y-1">
              <p>18 Willow Street</p>
              <p>Brookfield District, Brookfield</p>
              <p>
                <a href="mailto:hello@brewandbean.example" className="hover:text-cream-50 transition-colors">
                  hello@brewandbean.example
                </a>
              </p>
              <p>
                <a href="tel:+15550140188" className="hover:text-cream-50 transition-colors">
                  +1 (555) 014-0188
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream-200/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream-300/50 text-xs">
            © 2026 Brew &amp; Bean. A fictional brand concept by Ayura Works.
          </p>
          <p className="text-cream-300/40 text-xs">
            Crafted with care for portfolio purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
