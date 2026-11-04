import Image from "next/image";
import Link from "next/link";
import { asset, navLinks, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="rounded-t-[56px] bg-night px-6 pt-16 pb-8 text-[#D8BEDC]">
      <div className="mx-auto grid max-w-[1200px] gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col items-start gap-4">
          <span className="inline-flex rounded-2xl bg-white px-3.5 py-2">
            <Image src={asset("/logo.png")} alt="Haaps" width={66} height={44} className="h-11 w-auto" />
          </span>
          <p className="max-w-xs text-sm leading-relaxed">
            Digital marketing &amp; AI automation agency in Bangalore. Reels, ads, websites, SEO and AI — built to bring you leads.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 text-sm">
          <h2 className="font-display font-semibold text-white">Services</h2>
          {services.map((s) => (
            <Link key={s.slug} href={`/services#${s.slug}`} className="hover:text-white">
              {s.short}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2.5 text-sm">
          <h2 className="font-display font-semibold text-white">Company</h2>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2.5 text-sm">
          <h2 className="font-display font-semibold text-white">Contact</h2>
          <a href={site.phoneHref} className="hover:text-white">{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
          <span>{site.address}</span>
          <span>{site.hours}</span>
          <div className="mt-2 flex flex-wrap gap-3">
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} className="hover:text-white">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1200px] flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-[13px] text-[#BFA2C4]">
        <span>© {site.copyrightYear} Haaps. All rights reserved.</span>
        <span>Digital Marketing Agency in Bangalore</span>
      </div>
    </footer>
  );
}
