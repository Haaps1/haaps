import type { Metadata } from "next";
import Counter from "@/components/Counter";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { ContactCta, Eyebrow, PageHero, ProcessSteps, SectionTitle } from "@/components/Sections";
import { stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Haaps — a Bangalore digital marketing and AI automation agency focused on one thing: more qualified leads for our clients.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: "target" as const, title: "Leads over likes", text: "We measure success in enquiries and sales, not vanity metrics." },
  { icon: "sparkle" as const, title: "AI-first", text: "Automation and AI video are built into every plan to save you time and money." },
  { icon: "share" as const, title: "One team", text: "Content, ads, web and SEO under one roof — so nothing falls through the cracks." },
  { icon: "search" as const, title: "Total transparency", text: "Clear weekly reports on spend, leads and cost per lead. No jargon." },
];

const team = [
  { name: "[Founder name]", role: "Founder & Strategy" },
  { name: "[Team member]", role: "Head of Content & Reels" },
  { name: "[Team member]", role: "Performance Ads Lead" },
  { name: "[Team member]", role: "Web & AI Automation" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Haaps"
        title="We help Bangalore brands"
        highlight="get found, get chosen."
        text="Haaps is a digital marketing and AI automation agency built for businesses that want results they can count — calls, bookings and sales."
      />

      {/* STORY */}
      <section className="px-6 py-24">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-14">
          <Reveal className="flex min-w-0 flex-[1_1_460px] flex-col gap-5">
            <Eyebrow>Our story</Eyebrow>
            <SectionTitle>Marketing that pays for itself.</SectionTitle>
            {/* TODO: replace with the real Haaps story */}
            <p className="text-[17px] leading-relaxed text-body">
              [Your founding story goes here — why Haaps started, who you work with, and what makes you different. Two or three short paragraphs work best.]
            </p>
            <p className="text-[17px] leading-relaxed text-body">
              Today we combine creative content, performance ads and AI automation so local businesses can compete with the biggest brands — without hiring a full in-house team.
            </p>
          </Reveal>
          <Reveal delay={150} className="grid min-w-0 flex-[1_1_380px] grid-cols-2 gap-4">
            <div className="bg-plum-panel col-span-2 flex min-h-[180px] flex-col justify-end rounded-[28px] p-7 text-white">
              <span className="font-display text-sm text-[#FFC2E1]">Based in</span>
              <strong className="font-display text-3xl">Bangalore, India</strong>
            </div>
            <div className="rounded-[28px] border border-line bg-blush p-6">
              <div className="font-display text-4xl font-extrabold text-plum">
                <Counter value={stats[2].value} suffix={stats[2].suffix} />
              </div>
              <span className="text-[#5B4660]">{stats[2].label}</span>
            </div>
            <div className="rounded-[28px] border border-line bg-white p-6">
              <div className="font-display text-4xl font-extrabold text-pink">
                <Counter value={stats[0].value} suffix={stats[0].suffix} />
              </div>
              <span className="text-[#5B4660]">{stats[0].label}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-blush px-6 py-24">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <Reveal className="flex flex-col items-center gap-3 text-center">
            <Eyebrow>What we stand for</Eyebrow>
            <SectionTitle>How we work with you.</SectionTitle>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="lift flex h-full flex-col gap-3 rounded-[28px] border border-line bg-white p-7">
                  <span className="bg-brand grid h-12 w-12 place-items-center rounded-2xl text-white">
                    <Icon name={v.icon} />
                  </span>
                  <strong className="font-display text-xl">{v.title}</strong>
                  <span className="leading-relaxed text-[#5B4660]">{v.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-24">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <Reveal>
            <SectionTitle className="text-center">From first call to full pipeline.</SectionTitle>
          </Reveal>
          <ProcessSteps />
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-gradient-to-br from-plum via-plum-deep to-night px-6 py-24 text-white">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <Reveal className="flex flex-col items-center gap-3 text-center">
            <Eyebrow light>The team</Eyebrow>
            <SectionTitle>The people behind your growth.</SectionTitle>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex flex-col gap-4 rounded-[28px] border border-white/20 bg-white/10 p-5">
                  <div className="grid aspect-[4/5] place-items-center rounded-[20px] border border-dashed border-white/30 bg-white/5 text-sm text-[#F6DDF7]">
                    Photo
                  </div>
                  <div>
                    <strong className="block font-display text-lg">{m.name}</strong>
                    <span className="text-sm text-[#F6DDF7]">{m.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
