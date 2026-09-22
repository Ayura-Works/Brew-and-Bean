import { useEffect, useState } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { navLinks } from '@/data';
import { useActiveSection } from '@/hooks';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const activeId = useActiveSection(['menu', 'coffee', 'story', 'visit']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-espresso-900 focus:text-cream-100 focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-50/90 backdrop-blur-md border-b border-espresso-200/60 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between" aria-label="Main navigation">
          <a
            href="#main"
            className={`font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
              scrolled ? 'text-espresso-900' : 'text-cream-50'
            }`}
            onClick={closeMenu}
          >
            Brew &amp; Bean
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                    scrolled ? 'text-espresso-700' : 'text-cream-100'
                  } ${activeId === link.href.slice(1) ? 'is-active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#visit"
              className={`text-sm font-medium tracking-wide px-5 py-2.5 border transition-all duration-300 ${
                scrolled
                  ? 'border-espresso-800 text-espresso-900 hover:bg-espresso-900 hover:text-cream-50'
                  : 'border-cream-100/60 text-cream-50 hover:bg-cream-50 hover:text-espresso-900'
              }`}
            >
              Order Ahead
            </a>
          </div>

          <button
            className={`md:hidden p-2 transition-colors ${scrolled ? 'text-espresso-900' : 'text-cream-50'}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="absolute inset-0 bg-espresso-950/95 backdrop-blur-sm" onClick={closeMenu} />
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-cream-50 shadow-2xl transition-transform duration-500 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-espresso-200">
            <span className="font-serif text-xl font-bold text-espresso-900">Brew &amp; Bean</span>
            <button
              onClick={closeMenu}
              className="p-2 text-espresso-700 hover:text-espresso-900 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <ul className="flex flex-col px-6 py-6">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-4 text-2xl font-serif text-espresso-800 border-b border-espresso-200/50 hover:text-espresso-600 transition-colors"
                  style={{
                    transitionDelay: menuOpen ? `${i * 60 + 100}ms` : '0ms',
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'translateY(0)' : 'translateY(10px)',
                    transitionProperty: 'opacity, transform',
                    transitionDuration: '0.4s',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 mt-4">
            <a
              href="#visit"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-espresso-900 text-cream-50 text-sm font-medium tracking-wide hover:bg-espresso-800 transition-colors"
            >
              <Coffee size={16} strokeWidth={1.5} />
              Order Ahead
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
