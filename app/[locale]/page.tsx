import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Offer } from "@/components/offer";
import { Projects } from "@/components/projects";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";
import { YasukeChat } from "@/components/yasuke-chat";
import { getDictionary } from "@/lib/dictionary";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { profile } from "@/lib/profile";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw;
  const dict = getDictionary(locale);
  const url = `/${locale}`;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fr: "/fr",
        en: "/en",
        "x-default": "/fr",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url,
      siteName: profile.fullName,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: [
        {
          url: profile.photo,
          width: 1200,
          height: 630,
          alt: profile.fullName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [profile.photo],
    },
  };
}

function JsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: profile.fullName,
        jobTitle: profile.title[locale],
        email: profile.email,
        telephone: profile.whatsapp,
        url: profile.linkedin,
        image: profile.photo,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Antananarivo",
          addressCountry: "MG",
        },
        sameAs: [profile.linkedin],
        knowsLanguage: ["fr", "en"],
      },
      {
        "@type": "ProfessionalService",
        name: `${profile.fullName} — Freelance`,
        description: profile.tagline[locale],
        provider: { "@type": "Person", name: profile.fullName },
        areaServed: "Worldwide",
        offers: {
          "@type": "Offer",
          price: profile.rateEurPerDay,
          priceCurrency: "EUR",
          unitText: "DAY",
          description:
            locale === "fr"
              ? "Développement senior Full Stack TypeScript — journée"
              : "Senior Full Stack TypeScript development — day rate",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function LocaleHomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const dict = getDictionary(locale);

  return (
    <>
      <JsonLd locale={locale} />
      <SiteHeader locale={locale} dict={dict} />
      <main className="flex-1">
        <Hero locale={locale} dict={dict} />
        <Projects locale={locale} dict={dict} />
        <Skills locale={locale} dict={dict} />
        <Offer locale={locale} dict={dict} />
        <Contact locale={locale} dict={dict} />
      </main>
      <YasukeChat locale={locale} dict={dict} />
    </>
  );
}
