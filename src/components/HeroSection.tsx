import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { BRAND_ASSETS, HERO_CONTENT } from '../data/brandContent';
import { EDITORIAL_EASE } from './MotionPrimitives';

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.75], ['0px', '48px']);

  const scrollToStory = () => {
    const target = document.getElementById('hikayemiz');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-beige"
    >
      {/* Atmospheric Background Photography with Parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-10 -bottom-10 will-change-transform"
      >
        <motion.img
          src={BRAND_ASSETS.heroImage}
          alt="LC Kids çocuk giyim mağazası atmosferi"
          initial={{ scale: 1.09, opacity: 0.85 }}
          animate={{ scale: [1.02, 1.06, 1.02], opacity: 1 }}
          transition={{
            opacity: { duration: 1.4, ease: EDITORIAL_EASE },
            scale: {
              duration: 24,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            },
          }}
          className="h-full w-full object-cover object-[55%_28%]"
        />

        {/* Warm espresso-beige gradient scrim */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/40 to-espresso/30"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-espresso/55 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-latte/15 mix-blend-multiply"
          aria-hidden="true"
        />
      </motion.div>

      {/* Editorial Foreground Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-36 sm:px-10 sm:pb-20 lg:px-12 lg:pb-24"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EDITORIAL_EASE }}
            className="mb-5 flex items-center gap-3.5"
          >
            <span className="h-[1.5px] w-10 bg-cream/85" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cream">
              {HERO_CONTENT.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.28, ease: EDITORIAL_EASE }}
            className="font-serif text-[2.5rem] font-semibold leading-[1.1] tracking-[-0.01em] text-cream sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Minik bedenlere büyük mutluluklar, tatlı stillere{' '}
            <span className="italic font-semibold text-beige">
              LC Kids dokunuşu!
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.45, ease: EDITORIAL_EASE }}
            className="mt-5 max-w-xl text-base font-medium leading-relaxed text-cream/95 sm:text-lg"
          >
            {HERO_CONTENT.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.62, ease: EDITORIAL_EASE }}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <button
              type="button"
              onClick={scrollToStory}
              className="group inline-flex items-center gap-3 rounded-full bg-latte px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-cream shadow-[0_12px_32px_-8px_rgba(44,36,30,0.45)] transition-all duration-500 ease-editorial hover:bg-latte-hover"
            >
              <span>{HERO_CONTENT.ctaLabel}</span>
              <ArrowDown
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-0.5"
                strokeWidth={2}
              />
            </button>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.button
          type="button"
          onClick={scrollToStory}
          aria-label="Aşağı kaydır"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 hidden md:flex items-center gap-4 text-cream/85 transition-colors hover:text-cream ml-auto"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
            Kaydırarak Keşfet
          </span>
          <div className="relative h-12 w-[1.5px] overflow-hidden bg-cream/30">
            <motion.span
              animate={{ y: ['-100%', '100%'] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-x-0 top-0 h-1/2 bg-cream"
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
}
