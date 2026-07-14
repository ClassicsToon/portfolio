import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { profile } from "@/lib/profile";
import { LocaleSwitch } from "./locale-switch";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const links = [
    { href: `#projects`, label: dict.nav.projects },
    { href: `#skills`, label: dict.nav.skills },
    { href: `#offer`, label: dict.nav.offer },
    { href: `#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href={`/${locale}`}
          className="font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight text-text-main"
        >
          {profile.firstName}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cut-transition hover:text-text-main"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitch locale={locale} label={dict.locale.switchTo} />
          <ThemeToggle
            labelLight={dict.theme.light}
            labelDark={dict.theme.dark}
          />
        </div>
      </div>
    </header>
  );
}
