import { ArrowUp, Instagram, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { BRAND_ASSETS, CONTACT_INFO, NAV_ITEMS } from '../data/brandContent';
import { EditorialReveal, SectionEyebrow } from './MotionPrimitives';

interface FooterContactSectionProps {
  onOpenContactModal: () => void;
}

export function FooterContactSection({
  onOpenContactModal,
}: FooterContactSectionProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer
      id="iletisim"
      className="relative overflow-hidden bg-espresso text-cream scroll-mt-16"
    >
      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-latte/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 sm:px-10 sm:pt-24 lg:px-12">
        {/* Top Invitation Strip */}
        <EditorialReveal className="flex flex-col items-start justify-between gap-8 border-b border-cream/15 pb-14 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <SectionEyebrow label="Mağaza & İletişim" light />
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.14] text-cream sm:text-5xl">
              Dokuları yakından görmek için{' '}
              <span className="italic text-beige">
                mağazamıza bekleriz.
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-latte px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-cream transition-all duration-300 hover:bg-latte-hover shadow-[0_12px_30px_-10px_rgba(0,0,0,0.3)]"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              <span>WhatsApp ile İletişim</span>
            </a>

            <button
              type="button"
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2.5 rounded-full border border-cream/35 bg-cream/10 px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-cream transition-all duration-300 hover:border-cream/60 hover:bg-cream/20"
            >
              <span>Bize Ulaşın</span>
            </button>
          </div>
        </EditorialReveal>

        {/* Main Footer Information Grid */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand Summary with Circular Logo */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full shadow-md">
                <img
                  src={BRAND_ASSETS.logo}
                  alt="LC Kids Mağaza Logosu"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-3xl font-semibold tracking-[0.03em] text-cream">
                  {CONTACT_INFO.brandName}
                </span>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-latte-soft">
                  0 – 8 Yaş Çocuk Giyim
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-xs text-[15px] font-medium leading-[1.75] text-beige/85">
              Minik bedenlere büyük mutluluklar, tatlı stillere LC Kids
              dokunuşu.
            </p>
          </div>

          {/* Store Location */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-latte-soft">
              <MapPin className="h-4 w-4" strokeWidth={2} />
              <span>Mağaza Adresi</span>
            </div>
            <p className="mt-4 font-serif text-xl font-semibold text-cream">
              {CONTACT_INFO.storeTitle}
            </p>
            <address className="mt-2 not-italic text-[15px] font-medium leading-[1.75] text-beige/85">
              {CONTACT_INFO.addressLine1}
              <br />
              {CONTACT_INFO.addressLine2}
            </address>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-latte-soft">
              <Clock className="h-4 w-4" strokeWidth={2} />
              <span>Çalışma Saatleri</span>
            </div>
            <div className="mt-4 space-y-1.5 text-[15px] font-medium leading-[1.75] text-cream">
              <p className="font-semibold">{CONTACT_INFO.hoursPrimary}</p>
              <p className="text-sm text-beige/75">{CONTACT_INFO.hoursSecondary}</p>
            </div>
            <div className="mt-4">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-cream/90 transition-colors hover:text-latte-soft"
              >
                <Mail className="h-4 w-4 text-latte-soft" strokeWidth={1.8} />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Navigation & Socials */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-latte-soft">
              Keşfet & Sosyal
            </p>
            <ul className="mt-4 space-y-2.5 text-[15px] font-medium text-beige/85">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(item.id);
                    }}
                    className="transition-colors hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-latte-soft transition-colors hover:text-cream"
                >
                  <Instagram className="h-4 w-4" strokeWidth={2} />
                  <span>{CONTACT_INFO.instagramHandle}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Scroll to Top */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-8 text-xs font-medium text-beige/65 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} LC Kids Çocuk Giyim Mağazası. Tüm
            hakları saklıdır.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-beige/80 transition-colors hover:text-cream"
          >
            <span>Yukarı Dön</span>
            <ArrowUp className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </footer>
  );
}
