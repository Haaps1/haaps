import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { ContactCta, PageHero, ServiceIconRow } from "@/components/Sections";
import { services, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media marketing, reels, Google & Instagram lead ads, video editing, AI video, websites, SEO and AI automation — all from one Bangalore team.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Everything you need to"
        highlight="grow — under one roof."
        text="Eight services that work together: content that builds trust, ads that bring enquiries, and AI that makes sure no lead goes cold."
      />

      <nav aria-label="Jump to a service" className="px-6 pt-12">
        <ServiceIconRow />
      </nav>

      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-16">
        {services.map((s, i) => (
          <Reveal key={s.slug}>
            <section
              id={s.slug}
              aria-labelledby={`${s.slug}-title`}
              className={`flex scroll-mt-28 flex-wrap items-stretch gap-8 rounded-[36px] border border-line p-6 sm:p-10 ${i % 2 ? "bg-blush" : "bg-white"}`}
            >
              <div className={`bg-plum-panel relative flex min-h-[260px] min-w-0 flex-[1_1_300px] flex-col justify-between overflow-hidden rounded-[28px] p-8 text-white ${i % 2 ? "lg:order-2" : ""}`}>
                <div aria-hidden="true" className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,10,122,0.5),rgba(255,10,122,0)_65%)]" />
                <span className="relative font-display text-sm font-semibold tracking-wide text-[#FFC2E1]">0{i + 1} / 08</span>
                <span className="relative grid h-20 w-20 place-items-center rounded-3xl bg-white/15">
                  <Icon name={s.icon} size={40} />
                </span>
                <span className="relative font-display text-2xl font-bold">{s.short}</span>
              </div>

              <div className="flex min-w-0 flex-[2_1_420px] flex-col gap-5">
                <h2 id={`${s.slug}-title`} className="font-display text-[clamp(26px,3vw,38px)] leading-tight font-bold tracking-tight">
                  {s.name}
                </h2>
                <p className="text-[17px] leading-relaxed text-body">{s.long}</p>
                <div>
                  <h3 className="mb-3 font-display text-sm font-semibold tracking-wide text-plum uppercase">What you get</h3>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 rounded-xl border border-line bg-white px-3.5 py-3 text-[15px]">
                        <Icon name="check" size={18} className="flex-none text-pink" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-muted">
                  <strong className="text-ink">Ideal for:</strong> {s.idealFor}
                </p>
                <div className="mt-auto flex flex-wrap gap-3">
                  <Link href={`/contact?service=${s.slug}`} className="btn-glow rounded-full bg-brand px-6 py-3.5 font-display text-sm font-semibold text-white">
                    Get a quote for {s.short}
                  </Link>
                  <a
                    href={whatsappLink(`Hi Haaps, I'm interested in ${s.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#EBD3E4] bg-white px-6 py-3.5 font-display text-sm font-semibold text-ink hover:border-pink"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      <ContactCta />
    </>
  );
}
