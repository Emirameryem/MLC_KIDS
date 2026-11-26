import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { LOOKBOOK_FRAMES } from '../data/brandContent';
import { EditorialReveal, SectionEyebrow, EDITORIAL_EASE } from './MotionPrimitives';

export function LookbookGallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackWrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileRailRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef<{ active: boolean; startX: number; startScrollY: number; moved: boolean }>({
    active: false,
    startX: 0,
    startScrollY: 0,
    moved: false,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [maxShiftPx, setMaxShiftPx] = useState(920);

  // Measure horizontal track width precisely across all desktop viewport widths
  useEffect(() => {
    const updateBounds = () => {
      if (!trackRef.current || !trackWrapperRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const wrapperWidth = trackWrapperRef.current.clientWidth;
      const rightPad = 64;
      const shift = Math.max(200, trackWidth - wrapperWidth + rightPad);
      setMaxShiftPx(shift);
    };

    updateBounds();
    const ro = new ResizeObserver(updateBounds);
    if (trackRef.current) ro.observe(trackRef.current);
    if (trackWrapperRef.current) ro.observe(trackWrapperRef.current);
    window.addEventListener('resize', updateBounds);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateBounds);
    };
  }, []);

  // Desktop vertical-scroll-linked horizontal gallery progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxShiftPx]);
  const progressBarScaleX = useTransform(scrollYProgress, [0, 1], [0.18, 1]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const idx = Math.min(
      LOOKBOOK_FRAMES.length - 1,
      Math.max(0, Math.round(latest * (LOOKBOOK_FRAMES.length - 1)))
    );
    setActiveIndex(idx);
  });

  const scrollToFrameDesktop = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(LOOKBOOK_FRAMES.length - 1, index));
    const rect = el.getBoundingClientRect();
    const topAbsolute = window.scrollY + rect.top;
    const scrollableDistance = el.offsetHeight - window.innerHeight;
    const targetScroll =
      topAbsolute + (clamped / (LOOKBOOK_FRAMES.length - 1)) * scrollableDistance;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  // Horizontal pointer drag scrubbing synced to container scroll progress
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    dragStateRef.current = {
      active: true,
      startX: e.clientX,
      startScrollY: window.scrollY,
      moved: false,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStateRef.current.active || !containerRef.current) return;
    const deltaX = dragStateRef.current.startX - e.clientX;
    if (Math.abs(deltaX) > 4) {
      dragStateRef.current.moved = true;
    }
    const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
    const ratio = scrollableDistance / Math.max(1, maxShiftPx);
    window.scrollTo({
      top: dragStateRef.current.startScrollY + deltaX * ratio,
      behavior: 'auto',
    });
  };

  const handlePointerUp = () => {
    dragStateRef.current.active = false;
  };

  const scrollMobileRail = (direction: 'prev' | 'next') => {
    const rail = mobileRailRef.current;
    if (!rail) return;
    const step = rail.clientWidth * 0.82;
    rail.scrollBy({
      left: direction === 'next' ? step : -step,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="atmosfer"
      className="relative border-y border-espresso/10 bg-beige/55 scroll-mt-16"
    >
      {/* Desktop Sticky Scroll-Driven Horizontal Gallery */}
      <div
        ref={containerRef}
        className="relative hidden lg:block h-[235vh]"
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-16">
          {/* Header Row */}
          <div className="mx-auto mb-10 flex w-full max-w-7xl items-end justify-between px-12">
            <div>
              <SectionEyebrow label="Atmosfer & Lookbook" />
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-espresso xl:text-5xl">
                Sessiz zarafetin kadrajdaki yansıması
              </h2>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <span className="font-serif text-2xl font-semibold italic text-espresso">
                  0{activeIndex + 1}
                </span>
                <span className="mx-1.5 text-xs font-semibold text-espresso-muted">/</span>
                <span className="text-xs font-semibold tracking-[0.2em] text-espresso-muted">
                  0{LOOKBOOK_FRAMES.length}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => scrollToFrameDesktop(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  aria-label="Önceki lookbook karesi"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 bg-cream/85 text-espresso transition-all duration-300 hover:border-latte hover:bg-latte hover:text-cream disabled:opacity-35 disabled:pointer-events-none"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.6} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToFrameDesktop(activeIndex + 1)}
                  disabled={activeIndex === LOOKBOOK_FRAMES.length - 1}
                  aria-label="Sonraki lookbook karesi"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 bg-cream/85 text-espresso transition-all duration-300 hover:border-latte hover:bg-latte hover:text-cream disabled:opacity-35 disabled:pointer-events-none"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Flowing & Draggable Track */}
          <div
            ref={trackWrapperRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="pl-12 xl:pl-[max(3rem,calc((100vw-80rem)/2+3rem))] cursor-grab active:cursor-grabbing select-none"
          >
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex w-max items-stretch gap-8 xl:gap-10 will-change-transform"
            >
              {LOOKBOOK_FRAMES.map((frame, index) => (
                <article
                  key={frame.id}
                  onClick={() => {
                    if (!dragStateRef.current.moved) {
                      scrollToFrameDesktop(index);
                    }
                  }}
                  className="group relative flex w-[340px] xl:w-[390px] shrink-0 flex-col"
                >
                  <div
                    className={`relative h-[50vh] min-h-[360px] max-h-[500px] w-full overflow-hidden border border-espresso/10 bg-cream p-2.5 shadow-[0_24px_60px_-24px_rgba(44,36,30,0.12)] transition-all duration-700 ease-editorial group-hover:shadow-[0_32px_70px_-20px_rgba(44,36,30,0.18)] ${
                      frame.frameStyle === 'arch' ? 'rounded-arch' : 'rounded-3xl'
                    }`}
                  >
                    <div
                      className={`h-full w-full overflow-hidden ${
                        frame.frameStyle === 'arch' ? 'rounded-arch-inner' : 'rounded-[1.15rem]'
                      }`}
                    >
                      <img
                        src={frame.image}
                        alt={frame.title}
                        draggable={false}
                        className="h-full w-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-[1.05]"
                      />
                    </div>

                    {/* Subtle Glass Mood Pill */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-cream/50 bg-cream/90 px-4 py-2.5 backdrop-blur-md">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-espresso">
                        {frame.moodNote}
                      </span>
                      <span className="font-serif text-sm font-semibold italic text-latte-hover">
                        {frame.index}
                      </span>
                    </div>
                  </div>

                  {/* Pure Editorial Spirit Title */}
                  <div className="mt-5 px-1">
                    <h3 className="font-serif text-[1.75rem] font-semibold text-espresso transition-colors duration-300 group-hover:text-latte">
                      {frame.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] font-medium leading-relaxed text-espresso-muted">
                      {frame.subtitle}
                    </p>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>

          {/* Minimal Bottom Scroll Progress Hairline */}
          <div className="mx-auto mt-10 flex w-full max-w-7xl items-center justify-between px-12">
            <div className="h-[2px] w-64 overflow-hidden rounded-full bg-espresso/10">
              <motion.div
                style={{ scaleX: progressBarScaleX }}
                className="h-full origin-left rounded-full bg-latte"
              />
            </div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-espresso-light">
              Kaydırdıkça galeri yatayda akar
            </p>
          </div>
        </div>
      </div>

      {/* Tablet & Mobile Touch-Swipeable Lookbook Track */}
      <div className="py-20 sm:py-24 lg:hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <EditorialReveal className="flex items-end justify-between gap-4">
            <div>
              <SectionEyebrow label="Atmosfer & Lookbook" />
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-espresso sm:text-4xl">
                Sessiz zarafetin kadrajdaki yansıması
              </h2>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => scrollMobileRail('prev')}
                aria-label="Önceki kare"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 bg-cream text-espresso transition-colors hover:bg-latte hover:text-cream"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.6} />
              </button>
              <button
                type="button"
                onClick={() => scrollMobileRail('next')}
                aria-label="Sonraki kare"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 bg-cream text-espresso transition-colors hover:bg-latte hover:text-cream"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </button>
            </div>
          </EditorialReveal>
        </div>

        <div
          ref={mobileRailRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:px-10"
        >
          {LOOKBOOK_FRAMES.map((frame, idx) => (
            <motion.article
              key={frame.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.75, delay: idx * 0.06, ease: EDITORIAL_EASE }}
              className="w-[78vw] max-w-[340px] shrink-0 snap-center"
            >
              <div
                className={`relative aspect-[3/4] overflow-hidden border border-espresso/10 bg-cream p-2.5 shadow-sm ${
                  frame.frameStyle === 'arch' ? 'rounded-arch' : 'rounded-3xl'
                }`}
              >
                <div
                  className={`h-full w-full overflow-hidden ${
                    frame.frameStyle === 'arch' ? 'rounded-arch-inner' : 'rounded-[1.15rem]'
                  }`}
                >
                  <img
                    src={frame.image}
                    alt={frame.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-cream/50 bg-cream/90 px-3.5 py-2 backdrop-blur-md">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-espresso">
                    {frame.moodNote}
                  </span>
                  <span className="font-serif text-sm font-semibold italic text-latte-hover">
                    {frame.index}
                  </span>
                </div>
              </div>

              <div className="mt-4 px-1">
                <h3 className="font-serif text-2xl font-semibold text-espresso">
                  {frame.title}
                </h3>
                <p className="mt-1 text-[15px] font-medium leading-relaxed text-espresso-muted">
                  {frame.subtitle}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

