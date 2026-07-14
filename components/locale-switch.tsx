import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export function LocaleSwitch({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const next = locale === "fr" ? "en" : "fr";

  return (
    <Link
      href={`/${next}`}
      className="cut-transition inline-flex h-9 items-center rounded-full border border-border px-3 text-sm font-medium text-text-main hover:border-accent hover:text-accent"
      hrefLang={next}
      aria-label={label}
    >
      {next.toUpperCase()}
    </Link>
  );
}
