import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { services, site } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Haaps — Digital Marketing Agency in Bangalore",
    template: "%s | Haaps — Digital Marketing Agency in Bangalore",
  },
  description:
    "Haaps is a Bangalore digital marketing agency for social media, reels, Google & Instagram lead ads, video editing, AI video, websites, SEO and AI automation.",
  keywords: [
    "digital marketing agency in Bangalore",
    "social media marketing Bangalore",
    "reels agency Bangalore",
    "Google ads agency Bangalore",
    "SEO company Bangalore",
    "AI automation agency",
  ],
  openGraph: {
    type: "website",
    siteName: "Haaps",
    locale: "en_IN",
    images: [{ url: "/logo.png", width: 1064, height: 710, alt: "Haaps" }],
  },
  icons: { icon: "/logo.png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.tagline,
  url: site.url,
  logo: `${site.url}/logo.png`,
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  areaServed: "Bangalore",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital marketing services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, description: s.desc },
    })),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
