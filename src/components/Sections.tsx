import Link from "next/link";
import { services, site, whatsappLink } from "@/lib/site";
import Icon from "./Icon";
import LeadForm from "./LeadForm";
import Reveal from "./Reveal";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`text-[13px] font-medium tracking-[2px] uppercase ${light ? "text-[#FFB3DA]" : "text-plum"}`}>{children}</span>
  );
}

export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-[clamp(32px,4vw,52px)] leading-[1.1] font-bold tracking-tight ${className}`}>{children}</h2>
  );
}

// Twinkling dots, glow and ring shared by every purple hero.
export function HeroBackdrop() {
  const dots = [
    { l: "12%", t: "22%", s: 6, c: "#FFB3DA", d: "0s" },
    { l: "82%", t: "18%", s: 8, c: "#FFFFFF", d: "1s" },
    { l: "70%", t: "40%", s: 5, c: "#FF5AA8", d: "2s" },
    { l: "22%", t: "46%", s: 7, c: "#FFFFFF", d: "1.5s" },
    { l: "50%", t: "12%", s: 4, c: "#FFB3DA", d: ".5s" },
  ];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="anim-glow absolute top-10 left-1/2 -ml-[260px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,10,122,0.45),rgba(255,10,122,0)_65%)]" />
      <div className="anim-ring absolute -top-[120px] left-1/2 -ml-[380px] h-[760px] w-[760px] rounded-full border-[1.5px] border-[rgba(255,140,200,0.35)]" />
      {dots.map((d, i) => (
        <span
          key={i}
          className="anim-twinkle absolute rounded-full"
          style={{ left: d.l, top: d.t, width: d.s, height: d.s, background: d.c, animationDelay: d.d }}
        />
      ))}
    </div>
  );
}

// Purple hero used on inner pages.
export function PageHero({ eyebrow, title, highlight, text }: { eyebrow: string; title: string; highlight: string; text: string }) {
  return (
    <section className="bg-hero relative overflow-hidden rounded-b-[56px] px-6 pt-40 pb-24 text-white">
      <HeroBackdrop />
      <div className="relative mx-auto flex max-w-[900px] flex-col items-center gap-6 text-center">
        <span className="rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-[13px] text-[#F6DDF7]">{eyebrow}</span>
        <h1 className="font-display text-[clamp(38px,5.6vw,72px)] leading-[1.04] font-extrabold tracking-tight">
          {title} <span className="text-gradient-light">{highlight}</span>
        </h1>
        <p className="max-w-[620px] text-lg leading-relaxed text-[#F6DDF7]">{text}</p>
      </div>
    </section>
  );
}

export function Ticker() {
  const items = ["SMM", "Reels", "Google & Insta Ads", "Video Editing", "AI Video", "Websites", "SEO", "AI Automation"];
  const row = [...items, ...items];
  return (
    <section aria-label="Our services" className="overflow-hidden py-9">
      <div className="anim-marquee flex w-max gap-11 font-display text-[30px] font-bold whitespace-nowrap text-plum">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-11" aria-hidden={i >= items.length}>
            {t}
            <span className="text-pink">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

export function ProcessSteps() {
  const colors = ["#E6007E", "#C2006A", "#A8058E", "#93079B"];
  const steps = [
    { title: "Free audit", text: "We find where your leads are leaking." },
    { title: "Strategy", text: "A clear plan with real targets." },
    { title: "Create & launch", text: "Content, ads and automations go live." },
    { title: "Scale", text: "Test, report and lower cost per lead." },
  ];
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} delay={i * 100} className="flex flex-col gap-2.5 border-t-[3px] pt-4" style={{ borderTopColor: colors[i] }}>
          <span className="font-display font-bold" style={{ color: colors[i] }}>
            Step 0{i + 1}
          </span>
          <strong className="font-display text-[22px]">{s.title}</strong>
          <span className="leading-relaxed text-[#5B4660]">{s.text}</span>
        </Reveal>
      ))}
    </ol>
  );
}

export function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-plum via-plum-deep to-night px-6 py-26 text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <SectionTitle className="text-center">Brands that grew with Haaps.</SectionTitle>
        <div className="grid gap-5 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 120}>
              <figure className="flex h-full flex-col gap-4.5 rounded-3xl border border-white/20 bg-white/10 p-7">
                <span className="tracking-[3px] text-[#FCD34D]" aria-label="5 out of 5 stars">★★★★★</span>
                <blockquote className="text-[17px] leading-relaxed">“[Real client testimonial here — the result they got after working with Haaps.]”</blockquote>
                <figcaption className="text-sm text-[#F6DDF7]">
                  <strong className="text-white">[Client name]</strong> · [Business], Bangalore
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactCta() {
  return (
    <section id="contact" className="px-6 py-26">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center gap-12">
        <Reveal className="flex min-w-0 flex-[1_1_400px] flex-col gap-4">
          <h2 className="font-display text-[clamp(36px,5vw,60px)] leading-[1.05] font-extrabold tracking-tight">
            Ready for <span className="text-gradient">more leads?</span>
          </h2>
          <p className="text-[17px] leading-relaxed text-body">Free growth audit. No obligation. Reply within 1 working hour.</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 font-display text-sm font-semibold">
              <Icon name="phone" size={18} /> {site.phoneDisplay}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#16A34A] px-5 py-3 font-display text-sm font-semibold text-white">
              <Icon name="whatsapp" size={18} /> WhatsApp us
            </a>
          </div>
        </Reveal>
        <Reveal delay={120} className="min-w-0 flex-[1_1_380px]">
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}

export function ServiceIconRow() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {services.map((s) => (
        <Link key={s.slug} href={`#${s.slug}`} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink hover:border-pink hover:text-pink">
          <Icon name={s.icon} size={18} className="text-plum" />
          {s.short}
        </Link>
      ))}
    </div>
  );
}
