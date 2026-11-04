import Link from "next/link";
import Counter from "@/components/Counter";
import Icon from "@/components/Icon";
import ReelsCoverflow from "@/components/ReelsCoverflow";
import Reveal from "@/components/Reveal";
import {
  ContactCta,
  Eyebrow,
  HeroBackdrop,
  ProcessSteps,
  SectionTitle,
  Testimonials,
  Ticker,
} from "@/components/Sections";
import ServicesAccordion from "@/components/ServicesAccordion";
import { stats, whatsappLink } from "@/lib/site";

const heroReels = [
  { label: "[Reel] Restaurant", bg: "linear-gradient(160deg,#FF2E8F,#93079B)", r: "-6deg", delay: "0s", offset: false },
  { label: "[Reel] Fashion", bg: "linear-gradient(160deg,#F97316,#9A1B4F)", r: "4deg", delay: ".8s", offset: true },
  { label: "[AI video] Real estate", bg: "linear-gradient(160deg,#A21CAF,#3B0764)", r: "-2deg", delay: "1.6s", offset: false },
  { label: "[Ad] Clinic", bg: "linear-gradient(160deg,#EC4899,#831843)", r: "6deg", delay: "2.4s", offset: true },
  { label: "[Reel] Cafe", bg: "linear-gradient(160deg,#8B5CF6,#5A0466)", r: "-4deg", delay: "3.2s", offset: false },
];

const automation = [
  { title: "WhatsApp bot", text: "Instant replies & bookings" },
  { title: "Chatbot", text: "Qualifies site visitors" },
  { title: "AI calling agent", text: "Calls & follows up leads" },
  { title: "Auto posting", text: "Content on schedule" },
  { title: "NFC smart card", text: "Tap to share contact", featured: true },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero relative overflow-hidden rounded-b-[56px] pt-40 pb-10 text-white">
        <HeroBackdrop />
        <div className="relative mx-auto flex max-w-[960px] flex-col items-center gap-6 px-6 text-center">
          <span className="rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-[13px] text-[#F6DDF7]">
            Digital Marketing Agency · Bangalore
          </span>
          <h1 className="font-display text-[clamp(42px,6.4vw,88px)] leading-[1.02] font-extrabold tracking-[-2.5px]">
            Bangalore&apos;s growth engine for <span className="text-gradient-light">ambitious brands.</span>
          </h1>
          <p className="max-w-[620px] text-lg leading-relaxed text-[#F6DDF7]">
            Reels, ads, websites, SEO and AI automation — one team, one goal: more qualified leads for you.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Link href="/contact" className="btn-glow rounded-full bg-gradient-to-br from-[#FF0A7A] to-pink px-7 py-4 font-display font-semibold text-white">
              Get a free growth audit
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 px-7 py-4 font-display font-semibold text-white hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-14 mb-14 flex max-w-[1240px] justify-center gap-3 px-6 sm:flex-wrap sm:gap-4.5" aria-hidden="true">
          {heroReels.map((r, i) => (
            <div
              key={r.label}
              className={`anim-bob h-[170px] w-[100px] items-end rounded-[18px] border border-white/20 p-2.5 text-[10px] text-white shadow-[0_30px_50px_-20px_rgba(0,0,0,0.55)] sm:h-[280px] sm:w-[170px] sm:rounded-[22px] sm:p-3.5 sm:text-xs ${
                i > 2 ? "hidden sm:flex" : "flex"
              } ${r.offset ? "mt-5 sm:mt-[30px]" : ""}`}
              style={{ background: r.bg, ["--r" as string]: r.r, animationDelay: r.delay }}
            >
              {r.label}
            </div>
          ))}
        </div>
      </section>

      <Ticker />

      {/* SERVICES */}
      <section id="services" className="px-6 pt-16 pb-28">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-11">
          <Reveal className="flex flex-col items-center gap-3 text-center">
            <Eyebrow>What we do</Eyebrow>
            <SectionTitle className="max-w-[760px]">Eight services. One growth plan.</SectionTitle>
            <p className="text-muted">Hover or tap a panel to open it.</p>
          </Reveal>
          <Reveal>
            <ServicesAccordion />
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 pb-28">
        <Reveal className="mx-auto grid max-w-[1200px] gap-6 rounded-[32px] bg-blush p-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label}>
              <div className={`font-display text-5xl font-extrabold ${i % 2 ? "text-pink" : "text-plum"}`}>
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <div className="mt-1 text-[#5B4660]">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* AI AUTOMATION */}
      <section className="px-6 pb-28">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-14">
          <Reveal className="flex min-w-0 flex-[1_1_480px] flex-col gap-5.5">
            <Eyebrow>AI automation</Eyebrow>
            <SectionTitle>Your 24/7 sales assistant.</SectionTitle>
            <p className="text-[17px] leading-relaxed text-body">AI that replies, qualifies and books — so no enquiry goes cold, even at 2 AM.</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {automation.map((a) => (
                <div
                  key={a.title}
                  className={`lift flex flex-col gap-1.5 rounded-[18px] p-4.5 ${a.featured ? "bg-brand text-white" : "border border-line bg-white"}`}
                >
                  <strong className="font-display">{a.title}</strong>
                  <span className={`text-sm ${a.featured ? "text-[#FCE7F3]" : "text-[#5B4660]"}`}>{a.text}</span>
                </div>
              ))}
            </div>
            <Link href="/services#ai-automation" className="inline-flex items-center gap-2 self-start font-display font-semibold text-plum">
              Explore AI automation <Icon name="arrow" size={18} />
            </Link>
          </Reveal>
          <Reveal delay={150} className="flex min-w-0 flex-[1_1_320px] justify-center">
            <div className="w-[290px] rounded-[40px] bg-night p-3 shadow-[0_40px_90px_-30px_rgba(147,7,155,0.6)]">
              <div className="overflow-hidden rounded-[30px] bg-[#EFEAE2]">
                <div className="flex flex-col bg-[#F0F2F5] px-4 py-3.5">
                  <strong className="text-sm text-[#111B21]">Your Business</strong>
                  <span className="text-xs text-[#15803D]">AI assistant · online</span>
                </div>
                <div className="flex min-h-[340px] flex-col gap-2.5 px-3.5 pt-4 pb-5.5 text-[13px] leading-snug text-[#111B21]">
                  <div className="max-w-[78%] self-end rounded-[12px_12px_2px_12px] bg-[#D9FDD3] px-3 py-2">Hi, do you have slots this Saturday?</div>
                  <div className="max-w-[82%] self-start rounded-[12px_12px_12px_2px] bg-white px-3 py-2">Yes — 11:00 AM or 4:30 PM. Which works?</div>
                  <div className="max-w-[78%] self-end rounded-[12px_12px_2px_12px] bg-[#D9FDD3] px-3 py-2">4:30 please</div>
                  <div className="max-w-[82%] self-start rounded-[12px_12px_12px_2px] bg-white px-3 py-2">Booked! You&apos;ll get a reminder an hour before.</div>
                  <div className="mt-1.5 self-center rounded-lg bg-[#FFF6D6] px-2.5 py-1 text-[11px] text-[#54656F]">Lead saved · Team notified</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 pb-28">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <Reveal>
            <SectionTitle className="text-center">From first call to full pipeline.</SectionTitle>
          </Reveal>
          <ProcessSteps />
        </div>
      </section>

      {/* REELS COVERFLOW */}
      <section className="bg-cream pt-18 pb-18">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-end justify-between gap-5 px-6">
          <Reveal className="flex flex-col gap-3">
            <Eyebrow>Our work</Eyebrow>
            <SectionTitle>Reels that stop the scroll.</SectionTitle>
            <p className="max-w-[520px] leading-relaxed text-[#5B4660]">High-impact short videos from our in-house creators, built to grow your brand.</p>
          </Reveal>
          <Link href="/contact?service=reels" className="btn-glow rounded-full bg-brand px-6.5 py-4 font-display font-semibold text-white">
            Get started
          </Link>
        </div>
        <ReelsCoverflow />
      </section>

      <Testimonials />
      <ContactCta />
    </>
  );
}
