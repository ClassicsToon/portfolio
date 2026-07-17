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
  const linkedinLabel = profile.linkedin
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

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

        <ul className="mt-12 space-y-4">
          <li>
            <a
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="cut-transition group flex items-start gap-4 rounded-sm py-2 hover:text-accent"
            >
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-border text-text-main group-hover:border-accent group-hover:text-accent">
                <WhatsAppIcon />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
                  {dict.contact.whatsapp}
                </span>
                <span className="mt-1 block text-xl text-text-main group-hover:text-accent sm:text-2xl">
                  {profile.whatsappDisplay}
                </span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="cut-transition group flex items-start gap-4 rounded-sm py-2 hover:text-accent"
            >
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-border text-text-main group-hover:border-accent group-hover:text-accent">
                <EmailIcon />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
                  {dict.contact.email}
                </span>
                <span className="mt-1 block text-xl text-text-main group-hover:text-accent sm:text-2xl">
                  {profile.email}
                </span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title={linkedinLabel}
              className="cut-transition group flex items-start gap-4 rounded-sm border border-accent/40 bg-surface/50 px-3 py-3 hover:border-accent hover:bg-accent/5 sm:px-4"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-accent text-accent">
                <LinkedInIcon />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
                  {dict.contact.linkedin}
                </span>
                <span className="mt-1 flex flex-wrap items-center gap-2 text-lg font-semibold text-accent underline underline-offset-4 sm:text-xl">
                  {dict.contact.linkedinCta}
                  <span aria-hidden>↗</span>
                </span>
                <span className="mt-1 block break-all text-sm text-text-muted">
                  {linkedinLabel}
                </span>
              </span>
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

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16v12H4V6z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
