"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import Icon from "./Icon";

// Floating, see-through rounded menu. Dark glass over the purple hero, light glass once scrolled.
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-3 rounded-[22px] border py-2 pr-2 pl-2.5 backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 ${
          light
            ? "border-white/80 bg-white/70 shadow-[0_10px_40px_-14px_rgba(147,7,155,0.3)]"
            : "border-white/25 bg-white/10 shadow-[0_10px_40px_-14px_rgba(0,0,0,0.35)]"
        }`}
      >
        <Link href="/" aria-label="Haaps home" className="flex rounded-[14px] bg-white px-2.5 py-1">
          <Image src="/logo.png" alt="Haaps" width={54} height={36} priority className="h-9 w-auto" />
        </Link>

        <div className="hidden items-center gap-1 text-[15px] md:flex">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-xl px-3.5 py-2.5 transition-colors ${
                  light
                    ? active
                      ? "bg-pink/10 font-medium text-ink"
                      : "text-body hover:bg-pink/5"
                    : active
                      ? "bg-white/15 text-white"
                      : "text-[#F6DDF7] hover:bg-white/10"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={`btn-glow rounded-[14px] px-5 py-3 font-display text-sm font-semibold ${
              light ? "bg-brand text-white" : "bg-white text-plum"
            }`}
          >
            Free audit
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`grid h-11 w-11 place-items-center rounded-xl md:hidden ${light ? "text-ink" : "text-white"}`}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="flex w-full flex-col gap-1 pt-2 pb-1 md:hidden">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-base ${pathname === l.href ? "bg-pink/10 font-medium text-ink" : "text-body"}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
