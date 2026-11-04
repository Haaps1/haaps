"use client";

import { useEffect, useRef, useState } from "react";

type Props = { value: number; suffix?: string; decimals?: number; duration?: number };

// Counts up from 0 to `value` once it scrolls into view.
export default function Counter({ value, suffix = "", decimals = 0, duration = 1600 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  // Start at the final value so the real number is in the HTML (SEO, no-JS); animate from 0 on view.
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setCurrent(value * eased);
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  const text = current.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      {text}
      {suffix}
    </span>
  );
}
