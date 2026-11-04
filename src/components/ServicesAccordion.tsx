"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/site";
import Icon from "./Icon";

// 8 tall panels side by side; the active one expands to show details. Stacks on phones.
export default function ServicesAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3 md:h-[480px] md:flex-row">
      {services.map((s, i) => {
        const on = active === i;
        return (
          <div
            key={s.slug}
            onMouseEnter={() => setActive(i)}
            className={`relative flex min-w-0 flex-col overflow-hidden rounded-[28px] transition-[flex,background-color,box-shadow] duration-500 ease-[cubic-bezier(.22,.8,.26,1)] motion-reduce:transition-none ${
              on
                ? "bg-plum-panel text-white shadow-[0_30px_60px_-28px_rgba(147,7,155,0.7)] md:flex-[6_1_0%]"
                : `${i % 2 ? "bg-blush" : "bg-white"} border border-line text-plum md:flex-[1_1_0%]`
            }`}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-expanded={on}
              aria-controls={`svc-panel-${s.slug}`}
              className={`flex cursor-pointer gap-3.5 p-5 text-left ${on ? "flex-row items-center" : "flex-row items-center md:flex-1 md:flex-col"}`}
            >
              <span
                className={`grid h-[52px] w-[52px] flex-none place-items-center rounded-2xl ${on ? "bg-white/15 text-white" : "bg-brand text-white"}`}
              >
                <Icon name={s.icon} size={26} />
              </span>
              <span
                className={`font-display text-lg font-semibold whitespace-nowrap md:text-xl ${
                  on ? "" : "md:rotate-180 md:[writing-mode:vertical-rl]"
                }`}
              >
                {s.short}
              </span>
            </button>
            {on && (
              <div id={`svc-panel-${s.slug}`} className="flex flex-1 flex-col gap-4 px-7 pb-7">
                <p className="text-base leading-relaxed text-[#F6DDF7]">{s.desc}</p>
                <ul className="flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[13px]">
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2.5 pt-2">
                  <Link
                    href={`/contact?service=${s.slug}`}
                    className="btn-glow rounded-full bg-white px-5 py-3 font-display text-sm font-semibold text-plum"
                  >
                    Get a quote →
                  </Link>
                  <Link
                    href={`/services#${s.slug}`}
                    className="rounded-full border border-white/40 px-5 py-3 font-display text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
