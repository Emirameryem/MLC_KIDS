import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_ASSETS, NAV_ITEMS } from '../data/brandContent';
import { EDITORIAL_EASE } from './MotionPrimitives';

interface NavbarProps {
  onOpenContactModal: () => void;
}

export function Navbar({ onOpenContactModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);

      // Accurate scroll-spy using viewport-relative coordinates across all sections
      const threshold = 240;
      let current = '';
      let bestTop = -Infinity;

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold && rect.top > bestTop) {
          bestTop = rect.top;
          current = item.id;
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        current = 'iletisim';
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-editorial ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-xl border-b border-espresso/15 py-3 shadow-[0_8px_32px_-12px_rgba(44,36,30,0.08)]'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12">
          {/* Left: Circular Brand Logo + Bold Serif Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`group flex items-center gap-3 transition-colors duration-500 ${
              scrolled ? 'text-espresso' : 'text-cream'
            }`}
            aria-label="LC Kids Ana Sayfa"
          >
            <div className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-full shadow-sm transition-transform duration-500 group-hover:scale-105">
              <img
                src={BRAND_ASSETS.logo}
                alt="LC Kids Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl sm:text-[1.7rem] font-semibold tracking-[0.03em]">
                LC Kids
              </span>
              <span
                className={`mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-500 ${
                  scrolled ? 'text-latte-hover' : 'text-beige'
                }`}
              >
                0 – 8 Yaş Mağaza
              </span>
            </div>
          </a>

          {/* Center: Minimal Navigation Links */}
          <nav
            aria-label="Ana menü"
            className="hidden lg:flex items-center gap-7 xl:gap-9"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={`relative text-[14px] font-semibold tracking-[0.04em] transition-colors duration-300 py-1 ${
                    scrolled
                      ? isActive
                        ? 'text-espresso'
                        : 'text-espresso-muted hover:text-espresso'
                      : isActive
                        ? 'text-cream'
                        : 'text-cream/90 hover:text-cream'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ease-editorial ${
                      scrolled ? 'bg-latte' : 'bg-cream'
                    } ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right: Single Action Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenContactModal}
              className={`hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-500 ease-editorial ${
                scrolled
                  ? 'bg-latte text-cream hover:bg-latte-hover shadow-sm'
                  : 'bg-cream/25 text-cream border border-cream/55 backdrop-blur-md hover:bg-cream hover:text-espresso'
              }`}
            >
              <span>Mağazamızı Keşfet</span>
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              className={`inline-flex lg:hidden items-center justify-center rounded-full p-2.5 transition-colors ${
                scrolled
                  ? 'text-espresso hover:bg-beige'
                  : 'text-cream bg-cream/20 backdrop-blur-md hover:bg-cream/30'
              }`}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" strokeWidth={2} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Frosted Glass Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
            className="fixed inset-x-0 top-[76px] z-40 mx-4 rounded-3xl border border-espresso/15 bg-cream/95 p-7 backdrop-blur-2xl shadow-[0_24px_60px_-15px_rgba(44,36,30,0.16)] lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobil menü">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className="flex items-center justify-between border-b border-espresso/10 py-3.5 font-serif text-2xl font-semibold text-espresso transition-colors hover:text-latte last:border-b-0"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-latte-hover">
                    Keşfet
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenContactModal();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-latte py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-cream transition-colors hover:bg-latte-hover"
              >
                <span>Mağazamızı Keşfet</span>
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
