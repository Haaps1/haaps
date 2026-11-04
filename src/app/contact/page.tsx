import type { Metadata } from "next";
import Icon from "@/components/Icon";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import { Eyebrow, PageHero, SectionTitle } from "@/components/Sections";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get a free growth audit from Haaps, Bangalore. Call, WhatsApp or send us your details — we reply within 1 working hour.",
  alternates: { canonical: "/contact" },
};

const faqs = [
  { q: "What does the free audit include?", a: "A review of your social media, ads and website, with a short, clear list of what to fix first and where your leads are leaking." },
  { q: "How soon will I start getting leads?", a: "[Your answer — e.g. most ad campaigns start bringing enquiries within the first 1–2 weeks.]" },
  { q: "Do you work with small businesses?", a: "[Your answer — the kinds and sizes of business you take on.]" },
  { q: "Can you handle everything — content, ads and website?", a: "Yes. SMM, reels, ads, video editing, AI video, websites, SEO and AI automation are all done by our team." },
  { q: "What are your prices?", a: "[Your pricing, or “plans start from ₹____ per month”.]" },
];

export default function ContactPage() {
  const cards = [
    { icon: "phone" as const, label: "Call us", value: site.phoneDisplay, href: site.phoneHref },
    { icon: "whatsapp" as const, label: "WhatsApp", value: "Chat with us now", href: whatsappLink(), external: true },
    { icon: "mail" as const, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: "pin" as const, label: "Visit", value: site.address },
    { icon: "clock" as const, label: "Hours", value: site.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's grow your"
        highlight="business together."
        text="Tell us a little about your business and we'll send you a free growth audit — usually within one working day."
      />

      <section className="px-6 py-24">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-10">
          <Reveal className="min-w-0 flex-[3_1_520px]">
            <h2 className="mb-5 font-display text-3xl font-bold">Get your free audit</h2>
            <LeadForm variant="full" />
          </Reveal>

          <Reveal delay={120} className="flex min-w-0 flex-[2_1_320px] flex-col gap-3">
            {cards.map((c) => {
              const body = (
                <>
                  <span className={`grid h-12 w-12 flex-none place-items-center rounded-2xl ${c.icon === "whatsapp" ? "bg-[#16A34A] text-white" : "bg-brand text-white"}`}>
                    <Icon name={c.icon} size={22} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[13px] text-muted">{c.label}</span>
                    <strong className="font-display text-[17px]">{c.value}</strong>
                  </span>
                </>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="lift flex items-center gap-4 rounded-[22px] border border-line bg-white p-4"
                >
                  {body}
                </a>
              ) : (
                <div key={c.label} className="flex items-center gap-4 rounded-[22px] border border-line bg-white p-4">
                  {body}
                </div>
              );
            })}
            <div className="mt-2 overflow-hidden rounded-[22px] border border-line">
              {/* TODO: replace q= with the exact office address */}
              <iframe
                title="Haaps office location on Google Maps"
                src="https://www.google.com/maps?q=Bangalore&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-blush px-6 py-24">
        <div className="mx-auto flex max-w-[860px] flex-col gap-3">
          <Reveal className="mb-6 flex flex-col items-center gap-3 text-center">
            <Eyebrow>FAQ</Eyebrow>
            <SectionTitle>Questions? Answered.</SectionTitle>
          </Reveal>
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group rounded-[20px] border border-line bg-white" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-[17px] font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-blush text-xl text-plum transition group-open:rotate-45 group-open:bg-pink group-open:text-white">+</span>
                </summary>
                <p className="px-6 pb-5 leading-relaxed text-[#5B4660]">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
