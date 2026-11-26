import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Wind, Feather, Leaf, Sparkles, ChevronRight } from 'lucide-react';
import { BRAND_VALUES, BrandValue } from '../data/brandContent';
import {
  EditorialReveal,
  SectionEyebrow,
  SoftScaleFrame,
  EDITORIAL_EASE,
} from './MotionPrimitives';

const VALUE_ICONS: Record<BrandValue['iconKey'], typeof Wind> = {
  wind: Wind,
  feather: Feather,
  leaf: Leaf,
  sparkles: Sparkles,
};

export function TexturesValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeValueId, setActiveValueId] = useState<string>(BRAND_VALUES[0].id);

  // Subtle counter-parallax for dual macro texture photography
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const primaryParallaxY = useTransform(scrollYProgress, [0, 1], [34, -34]);
  const secondaryParallaxY = useTransform(scrollYProgress, [0, 1], [-26, 38]);

  const activeValue =
    BRAND_VALUES.find((v) => v.id === activeValueId) ?? BRAND_VALUES[0];

  return (
    <section
      id="kumas-doku"
      ref={sectionRef}
      className="relative overflow-hidden bg-cream py-24 sm:py-32 lg:py-40 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-16">
          {/* Left: Interactive Values & Tactile Quality Pillars */}
          <div className="lg:col-span-6">
            <EditorialReveal>
              <SectionEyebrow label="Doku, Kalite & Değerlerimiz" />
            </EditorialReveal>

            <EditorialReveal delay={0.1}>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.12] text-espresso sm:text-5xl">
                Minik bir tene yalnızca doğanın en saf dokusu değmelidir.
              </h2>
            </EditorialReveal>

            <EditorialReveal delay={0.16}>
              <p className="mt-4 max-w-xl text-base font-medium leading-[1.75] text-espresso-muted">
                Organik iplikler ve özenli işçilikle ebeveynlerin içini
                ferahlatan kalite standartları.
              </p>
            </EditorialReveal>

            {/* Interactive Value Cards */}
            <div className="mt-8 space-y-3.5">
              {BRAND_VALUES.map((item, idx) => {
                const Icon = VALUE_ICONS[item.iconKey];
                const isActive = item.id === activeValueId;

                return (
                  <EditorialReveal key={item.id} delay={0.18 + idx * 0.06}>
                    <button
                      type="button"
                      onClick={() => setActiveValueId(item.id)}
                      onMouseEnter={() => setActiveValueId(item.id)}
                      aria-expanded={isActive}
                      className={`group w-full rounded-3xl border p-5 sm:p-6 text-left transition-all duration-500 ease-editorial ${isActive
                          ? 'border-latte/45 bg-beige/85 shadow-[0_18px_40px_-18px_rgba(44,36,30,0.1)]'
                          : 'border-espresso/10 bg-cream hover:border-espresso/20 hover:bg-beige/40'
                        }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div
                            className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border transition-colors duration-400 ${isActive
                                ? 'border-latte bg-latte text-cream'
                                : 'border-espresso/10 bg-beige/70 text-latte'
                              }`}
                          >
                            <Icon className="h-4 w-4" strokeWidth={1.6} />
                          </div>

                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-latte-hover">
                              {item.subtitle}
                            </p>
                            <h3 className="mt-1 font-serif text-xl sm:text-2xl font-semibold text-espresso">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        <ChevronRight
                          className={`mt-2 h-4 w-4 shrink-0 text-espresso transition-transform duration-500 ${
                            isActive ? 'rotate-90 text-latte-hover' : 'group-hover:translate-x-0.5'
                          }`}
                          strokeWidth={2}
                        />
                      </div>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: EDITORIAL_EASE }}
                            className="overflow-hidden"
                          >
                            <div className="pl-14 pt-3">
                              <p className="text-[15px] font-medium leading-[1.7] text-espresso-muted">
                                {item.detail}
                              </p>
                              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-latte/35 bg-cream/90 px-3.5 py-1 text-xs font-semibold tracking-[0.06em] text-espresso">
                                <span className="h-1.5 w-1.5 rounded-full bg-latte" />
                                {item.originNote}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </EditorialReveal>
                );
              })}
            </div>
          </div>

          {/* Right: Parallax Macro Textile Photography Composition */}
          <div className="relative lg:col-span-6 lg:pl-6">
            <div className="relative mx-auto max-w-[540px] pb-16 sm:pb-24">
              {/* Primary Tall Arch Macro Linen Layer */}
              <motion.div style={{ y: primaryParallaxY }} className="relative z-10 w-[84%] sm:w-[82%]">
                <SoftScaleFrame className="overflow-hidden rounded-arch border border-espresso/10 bg-beige p-3 shadow-[0_28px_70px_-24px_rgba(44,36,30,0.14)]">
                  <div className="aspect-[3/4] overflow-hidden rounded-arch">
                    <img
                      src="/images/texture-linen.jpg"
                      alt="Doğal organik keten ve saf pamuk kaşmir örgü yakın çekim dokusu"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-1000 ease-editorial hover:scale-[1.03]"
                    />
                  </div>
                </SoftScaleFrame>
              </motion.div>

              {/* Secondary Counter-Parallax Craftsmanship Frame */}
              <motion.div
                style={{ y: secondaryParallaxY }}
                className="relative z-20 ml-auto -mt-32 w-[62%] sm:-mt-44 sm:w-[58%]"
              >
                <SoftScaleFrame
                  delay={0.18}
                  className="overflow-hidden rounded-3xl border-4 border-cream bg-beige p-2 shadow-[0_28px_65px_-20px_rgba(44,36,30,0.2)]"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                    <img
                      src="/images/texture-craft.jpg"
                      alt="El işçiliği dikiş ve doğal sedef düğme detayı"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-1000 ease-editorial hover:scale-[1.04]"
                    />
                  </div>
                </SoftScaleFrame>
              </motion.div>

              {/* Dynamic Tactile Glass Note Reflecting Active Value */}
              <div className="relative z-30 -mt-6 ml-2 max-w-xs sm:ml-6">
                <div className="rounded-2xl border border-espresso/15 bg-cream/95 px-5 py-4 backdrop-blur-md shadow-[0_14px_40px_-14px_rgba(44,36,30,0.14)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-latte-hover">
                    Seçili Doku Standardı
                  </p>
                  <p className="mt-1 font-serif text-xl font-semibold text-espresso">
                    {activeValue.originNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
