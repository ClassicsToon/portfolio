import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { profile } from "@/lib/profile";

export function Offer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="offer" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
          {dict.offer.title}
        </h2>
        <p className="mt-3 max-w-2xl text-text-muted">{dict.offer.subtitle}</p>

        <div className="mt-12 grid gap-10 border-t border-border pt-10 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
              {dict.offer.rateLabel}
            </p>
            <p className="mt-2 font-[family-name:var(--font-syne)] text-4xl font-bold text-text-main sm:text-5xl">
              {dict.offer.rateValue}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
              {dict.offer.availabilityLabel}
            </p>
            <p className="mt-2 text-lg text-text-main">
              {profile.availability[locale]}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-text-muted">
              {profile.strengths[locale].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="cut-transition mt-8 inline-flex h-12 items-center bg-accent px-6 text-sm font-semibold text-white hover:brightness-110"
            >
              {dict.offer.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
