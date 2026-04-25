'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  endValue: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function AnimatedCounter({
  endValue,
  duration = 2000, // 2 seconds default duration
  prefix = '',
  suffix = '',
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Start animation when 10% of the element is visible
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease-out cubic function for a natural slowdown at the end
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(endValue * easeOut);
            
            if (progress < 1) window.requestAnimationFrame(step);
            else setCount(endValue);
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [endValue, duration, hasAnimated]);

  return <span ref={countRef}>{prefix}{count.toFixed(decimals)}{suffix}</span>;
}