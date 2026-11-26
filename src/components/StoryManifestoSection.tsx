import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import {
  BRAND_ASSETS,
  PHILOSOPHY_PILLARS,
  STORY_CONTENT,
} from '../data/brandContent';
import {
  EditorialReveal,
  SectionEyebrow,
  SoftScaleFrame,
} from './MotionPrimitives';

export function StoryManifestoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.defaultMuted = true;
    video.muted = true;
    video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      id="hikayemiz"
      className="relative overflow-hidden bg-cream py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Asymmetric Story & Vertical Brand Video Grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Concise, Clear Story & Store Seal */}
          <div className="lg:col-span-6 lg:pr-6">
            <EditorialReveal>
              <SectionEyebrow label={STORY_CONTENT.eyebrow} />
            </EditorialReveal>

            <EditorialReveal delay={0.08}>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.12] tracking-[-0.01em] text-espresso sm:text-5xl lg:text-[3.35rem]">
                {STORY_CONTENT.headline}
              </h2>
            </EditorialReveal>

            <EditorialReveal delay={0.16}>
              <p className="mt-6 text-base font-medium leading-[1.8] text-espresso-muted sm:text-[1.0625rem]">
                {STORY_CONTENT.paragraph}
              </p>
            </EditorialReveal>

            <EditorialReveal delay={0.24}>
              <blockquote className="mt-8 rounded-3xl border border-espresso/15 bg-beige/75 p-6 sm:p-7 backdrop-blur-sm">
                <p className="font-serif text-xl font-medium italic leading-relaxed text-espresso sm:text-2xl">
                  {STORY_CONTENT.quote}
                </p>
                <footer className="mt-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-latte-hover">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-sm">
                    <img
                      src={BRAND_ASSETS.logo}
                      alt="LC Kids Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span>{STORY_CONTENT.quoteAuthor}</span>
                </footer>
              </blockquote>
            </EditorialReveal>
          </div>

          {/* Right: Native 9:16 Brand Story Video Showcase */}
          <div className="relative lg:col-span-6">
            <div className="relative mx-auto max-w-[350px] sm:max-w-[380px]">
              <div
                className="pointer-events-none absolute -inset-3 rounded-[2rem] border border-latte/30"
                aria-hidden="true"
              />

              <SoftScaleFrame className="relative overflow-hidden rounded-3xl border border-espresso/15 bg-beige p-3 shadow-[0_30px_70px_-24px_rgba(44,36,30,0.16)]">
                <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-beige">
                  <video
                    ref={videoRef}
                    src={BRAND_ASSETS.storyVideo}
                    poster={BRAND_ASSETS.storyPoster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />

                  {/* Subtle Bottom Caption & Video Controls */}
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-2xl border border-cream/50 bg-cream/90 px-4 py-2.5 backdrop-blur-md shadow-sm">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-espresso">
                      {STORY_CONTENT.videoCaption}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={togglePlay}
                        aria-label={isPlaying ? 'Videoyu duraklat' : 'Videoyu oynat'}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-espresso/15 bg-beige/80 text-espresso transition-colors hover:bg-latte hover:text-cream"
                      >
                        {isPlaying ? (
                          <Pause className="h-3.5 w-3.5" strokeWidth={2} />
                        ) : (
                          <Play className="h-3.5 w-3.5" strokeWidth={2} />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={toggleMute}
                        aria-label={isMuted ? 'Sesi aç' : 'Sesi kapat'}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-espresso/15 bg-beige/80 text-espresso transition-colors hover:bg-latte hover:text-cream"
                      >
                        {isMuted ? (
                          <VolumeX className="h-3.5 w-3.5" strokeWidth={2} />
                        ) : (
                          <Volume2 className="h-3.5 w-3.5" strokeWidth={2} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </SoftScaleFrame>
            </div>
          </div>
        </div>

        {/* Design Philosophy Band (#felsefemiz) */}
        <div
          id="felsefemiz"
          className="mt-24 border-t border-espresso/15 pt-16 sm:mt-28 sm:pt-20 scroll-mt-24"
        >
          <EditorialReveal className="mx-auto max-w-2xl text-center">
            <SectionEyebrow label="Tasarım Felsefemiz" align="center" />
            <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-espresso sm:text-4xl lg:text-[2.65rem]">
              Sade çizgiler, doğanın şefkatiyle buluştuğunda.
            </h3>
          </EditorialReveal>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-espresso/15">
            {PHILOSOPHY_PILLARS.map((pillar, index) => (
              <EditorialReveal
                key={pillar.numeral}
                delay={0.08 + index * 0.08}
                className="md:px-8 lg:px-10 first:md:pl-0 last:md:pr-0"
              >
                <div className="flex flex-col">
                  <span className="font-serif text-3xl font-semibold italic text-latte-hover">
                    {pillar.numeral}
                  </span>
                  <h4 className="mt-3 font-serif text-2xl font-semibold text-espresso">
                    {pillar.title}
                  </h4>
                  <p className="mt-2.5 text-[15px] font-medium leading-[1.7] text-espresso-muted">
                    {pillar.description}
                  </p>
                </div>
              </EditorialReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
