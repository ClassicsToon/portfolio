import { notFound } from "next/navigation";
import { HtmlLang } from "@/components/html-lang";
import { isLocale, locales } from "@/lib/i18n";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div lang={locale} className="flex min-h-full flex-1 flex-col">
      <HtmlLang locale={locale} />
      {children}
    </div>
  );
}
