"use client";

import Image from "next/image";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { profile } from "@/lib/profile";

const CV_HREF = "/cv/cv.pdf";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const experience = dict.hero.experience.replace(
    "{years}",
    String(profile.yearsExperience),
  );

  const pillars = [
    dict.hero.pillars.build,
    dict.hero.pillars.scale,
    dict.hero.pillars.impact,
  ];

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={profile.photo}
          alt={profile.fullName}
          fill
          priority
          className="object-cover object-[center_20%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, color-mix(in srgb, var(--background) 92%, transparent) 0%, color-mix(in srgb, var(--background) 78%, transparent) 42%, color-mix(in srgb, var(--background) 35%, transparent) 70%, transparent 100%), linear-gradient(to top, var(--background) 0%, transparent 45%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-24 md:justify-center md:pb-20 md:pt-32">
        <p className="mb-3 font-[family-name:var(--font-syne)] text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {profile.title[locale]}
        </p>
        <h1 className="max-w-3xl font-[family-name:var(--font-syne)] text-5xl font-extrabold leading-[0.95] tracking-tight text-text-main sm:text-7xl md:text-8xl">
          {profile.firstName}
        </h1>

        <p
          className="mt-6 font-[family-name:var(--font-syne)] text-lg font-semibold tracking-[0.12em] text-text-main sm:text-xl md:tracking-[0.16em]"
          aria-label={pillars.join(" — ")}
        >
          {pillars.map((label, index) => (
            <span key={label}>
              {index > 0 && (
                <span className="mx-2 text-accent sm:mx-3" aria-hidden>
                  —
                </span>
              )}
              <span>{label}</span>
            </span>
          ))}
        </p>

        <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-accent sm:text-base">
          {experience}
        </p>

        <p className="mt-5 max-w-xl text-lg text-text-main sm:text-xl">
          {profile.headline[locale]}
        </p>
        <p className="mt-3 max-w-lg text-base text-text-muted sm:text-lg">
          {profile.tagline[locale]}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cut-transition inline-flex h-12 items-center justify-center bg-accent px-6 text-sm font-semibold text-white hover:brightness-110"
          >
            {dict.hero.ctaPrimary}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="cut-transition inline-flex h-12 items-center justify-center border border-border bg-surface/70 px-6 text-sm font-semibold text-text-main backdrop-blur-sm hover:border-accent"
          >
            {dict.hero.ctaSecondary}
          </a>
          <a
            href={CV_HREF}
            download
            className="cut-transition inline-flex h-12 items-center justify-center border border-border bg-surface/70 px-6 text-sm font-semibold text-text-main backdrop-blur-sm hover:border-accent"
          >
            {dict.hero.downloadCv}
          </a>
          {/* <button
            type="button"
            className="cut-transition inline-flex h-12 items-center justify-center border border-accent bg-surface/70 px-6 text-sm font-semibold text-accent backdrop-blur-sm hover:bg-accent hover:text-white"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("yasuke:open"));
            }}
          >
            {dict.hero.askYasuke} →
          </button> */}
        </div>
      </div>
    </section>
  );
}
