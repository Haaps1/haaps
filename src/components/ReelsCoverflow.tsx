"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import Icon from "./Icon";

// Placeholder reels — swap `bg` for real thumbnails / videos later.
const reels = [
  { kind: "Reel · Restaurant", bg: "linear-gradient(160deg,#FF2E8F,#93079B)" },
  { kind: "AI video · Real estate", bg: "linear-gradient(160deg,#F97316,#9A1B4F)" },
  { kind: "Ad creative · Clinic", bg: "linear-gradient(160deg,#A21CAF,#3B0764)" },
  { kind: "Reel · Fashion", bg: "linear-gradient(160deg,#EC4899,#831843)" },
  { kind: "Video edit · Gym", bg: "linear-gradient(160deg,#0EA5E9,#4C1D95)" },
  { kind: "Reel · Cafe", bg: "linear-gradient(160deg,#F43F5E,#6B0F3A)" },
  { kind: "AI video · Education", bg: "linear-gradient(160deg,#C026D3,#4A044E)" },
  { kind: "Reel · Salon", bg: "linear-gradient(160deg,#FB7185,#9D174D)" },
  { kind: "Ad creative · Jewellery", bg: "linear-gradient(160deg,#8B5CF6,#5A0466)" },
];

const N = reels.length;

const motionQuery = "(prefers-reduced-motion: reduce)";
const subscribeMotion = (cb: () => void) => {
  const mq = window.matchMedia(motionQuery);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const subscribeResize = (cb: () => void) => {
  window.addEventListener("resize", cb);
  return () => window.removeEventListener("resize", cb);
};

// Coverflow: centre reel faces the viewer and pops forward; sides stack close, angled steeply.
export default function ReelsCoverflow() {
  const [active, setActive] = useState(0);
  // null = follow the visitor's reduced-motion setting until they press play/pause.
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const [hover, setHover] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeMotion, () => window.matchMedia(motionQuery).matches, () => false);
  const spread = useSyncExternalStore(subscribeResize, () => (window.innerWidth < 640 ? 90 : 160), () => 160);
  const paused = userPaused ?? reducedMotion;
  const setPaused = (fn: (p: boolean) => boolean) => setUserPaused(fn(paused));

  const go = useCallback((step: number) => setActive((a) => (a + step + N) % N), []);

  useEffect(() => {
    if (paused || hover) return;
    const t = setInterval(() => go(1), 2800);
    return () => clearInterval(t);
  }, [paused, hover, go]);

  return (
    <div className="flex flex-col gap-5">
      <div
        className="relative h-[520px] overflow-hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-roledescription="carousel"
        aria-label="Reels showcase"
      >
        {reels.map((r, i) => {
          let d = i - active;
          if (d > N / 2) d -= N;
          if (d < -N / 2) d += N;
          const ad = Math.abs(d);
          const sign = Math.sign(d);
          const x = ad === 0 ? 0 : sign * (spread + (ad - 1) * (spread / 2));
          const transform = `perspective(1000px) translateX(${x}px) translateZ(${ad === 0 ? 90 : -ad * 40}px) rotateY(${-sign * 52}deg)`;
          return (
            <button
              key={r.kind}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show reel ${i + 1}: ${r.kind}`}
              aria-current={d === 0}
              tabIndex={ad >= 4 ? -1 : 0}
              className="absolute top-[70px] left-1/2 -ml-[105px] flex h-[360px] w-[210px] cursor-pointer flex-col justify-between overflow-hidden rounded-[22px] text-left shadow-[0_24px_50px_-24px_rgba(60,0,70,0.5)] transition-[transform,opacity] duration-700 ease-[cubic-bezier(.22,.8,.26,1)] [backface-visibility:hidden] motion-reduce:transition-none"
              style={{ background: r.bg, transform, zIndex: 10 - ad, opacity: ad >= 4 ? 0 : 1 }}
            >
              <span className="flex items-center justify-between p-3">
                <span className="rounded-md border border-dashed border-white/60 px-1.5 py-0.5 text-[10px] text-white">Reel placeholder</span>
                {d === 0 && <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-plum">Playing</span>}
              </span>
              <span className="grid h-14 w-14 place-items-center self-center rounded-full bg-white/25 text-white">
                <Icon name="play" size={22} />
              </span>
              <span className="flex flex-col gap-0.5 bg-gradient-to-t from-black/45 to-transparent p-3.5">
                <strong className="font-display text-sm text-white">[Client name]</strong>
                <span className="text-xs text-[#F7EEF8]">{r.kind}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-3">
        <button type="button" onClick={() => go(-1)} aria-label="Previous reel" className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-[#EBD3E4] bg-white text-ink">
          <Icon name="chevron-left" size={20} />
        </button>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Start auto-scroll" : "Pause auto-scroll"}
          className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full border border-[#EBD3E4] bg-white px-5 text-sm font-medium text-ink"
        >
          <Icon name={paused ? "play" : "pause"} size={16} />
          {paused ? "Auto-play" : "Pause"}
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Next reel" className="grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-brand text-white">
          <Icon name="chevron-right" size={20} />
        </button>
      </div>
    </div>
  );
}
