import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import {
  featuredSkills,
  isEmphasizedSkill,
  skillGroups,
} from "@/lib/skills";

export function Skills({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
          {dict.skills.title}
        </h2>
        <p className="mt-3 max-w-2xl text-text-muted">{dict.skills.subtitle}</p>

        <p className="mt-8 font-[family-name:var(--font-syne)] text-sm font-semibold tracking-wide text-accent sm:text-base">
          {featuredSkills.map((skill, index) => (
            <span key={skill}>
              {index > 0 && (
                <span className="mx-2 text-border sm:mx-3" aria-hidden>
                  ·
                </span>
              )}
              {skill}
            </span>
          ))}
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-text-main">
                {group.label[locale]}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-text-muted">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={
                      isEmphasizedSkill(item)
                        ? "font-medium text-text-main"
                        : undefined
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
