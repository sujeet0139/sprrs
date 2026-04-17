'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

type Slide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mediaQuery.matches);

    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  return reduced;
}

export default function HeroBannerCarousel() {
  const slides = useMemo<Slide[]>(
    () => [
      {
        src: '/1.jpg',
        alt: 'School campus building and entrance',
        eyebrow: 'Welcome',
        title: 'A joyful campus for growing minds',
      },
      {
        src: '/2.jpg',
        alt: 'Students in classroom learning together',
        eyebrow: 'Academics',
        title: 'Future-ready learning, every day',
      },
      {
        src: '/3.jpg',
        alt: 'School activities and student engagement',
        eyebrow: 'Activities',
        title: 'Confidence through co-curriculars',
      },
      {
        src: '/1.1.jpg',
        alt: 'School banner and celebration moments',
        eyebrow: 'Community',
        title: 'Strong values, strong community',
      },
    ],
    []
  );

  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const goTo = (index: number) => {
    const next = ((index % slides.length) + slides.length) % slides.length;
    setActiveIndex(next);
  };

  const goNext = () => goTo(activeIndex + 1);
  const goPrev = () => goTo(activeIndex - 1);

  useEffect(() => {
    if (prefersReducedMotion || paused || slides.length < 2) return;

    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((idx) => (idx + 1) % slides.length);
    }, 6000);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [paused, prefersReducedMotion, slides.length]);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="absolute inset-0"
        role="region"
        aria-label="School banner"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') goPrev();
          if (event.key === 'ArrowRight') goNext();
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={[
              'absolute inset-0 transition-opacity duration-1000',
              index === activeIndex ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
            aria-hidden={index === activeIndex ? undefined : true}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/35 to-slate-950/75" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto max-w-7xl px-4 pb-6 sm:pb-8">
          <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-100 shadow-2xl backdrop-blur-xl sm:text-sm">
            <span className="pointer-events-none inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-amber-200">
              ⭐
            </span>
            <span className="truncate">
              {slides[activeIndex]?.eyebrow}: {slides[activeIndex]?.title}
            </span>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-4 pb-5 sm:pb-7">
          <button
            type="button"
            onClick={goPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
            aria-label="Previous banner"
          >
            <span aria-hidden>‹</span>
          </button>

          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src + index}
                type="button"
                onClick={() => goTo(index)}
                className={[
                  'h-2.5 w-2.5 rounded-full transition',
                  index === activeIndex ? 'bg-amber-300' : 'bg-white/40 hover:bg-white/65',
                ].join(' ')}
                aria-label={`Go to banner ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
            aria-label="Next banner"
          >
            <span aria-hidden>›</span>
          </button>
        </div>
      </div>
    </div>
  );
}

