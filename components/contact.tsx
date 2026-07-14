import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { profile, whatsappLink } from "@/lib/profile";

export function Contact({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const waMessage = locale === "fr" ? "Bonjour Harison !" : "Hi Harison!";

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border py-20 pb-32 sm:py-28 sm:pb-36"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
          {dict.contact.title}
        </h2>
        <p className="mt-3 max-w-2xl text-text-muted">
          {dict.contact.subtitle}
        </p>

        <ul className="mt-12 space-y-6">
          <li>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
              {dict.contact.whatsapp}
            </p>
            <a
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="cut-transition mt-1 inline-block text-xl text-text-main hover:text-accent sm:text-2xl"
            >
              {profile.whatsappDisplay}
            </a>
          </li>
          <li>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
              {dict.contact.email}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="cut-transition mt-1 inline-block text-xl text-text-main hover:text-accent sm:text-2xl"
            >
              {profile.email}
            </a>
          </li>
          <li>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
              {dict.contact.linkedin}
            </p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="cut-transition mt-1 inline-block break-all text-base text-accent underline underline-offset-4 hover:brightness-110 sm:text-lg"
            >
              {profile.linkedin.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </a>
          </li>
        </ul>

        <p className="mt-16 text-sm text-text-muted">
          © {new Date().getFullYear()} {profile.fullName} · {profile.location}
        </p>
      </div>
    </section>
  );
}
