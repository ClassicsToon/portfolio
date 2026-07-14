import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { projectCopy, projects } from "@/lib/projects";

export function Projects({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
          {dict.projects.title}
        </h2>
        <p className="mt-3 max-w-2xl text-text-muted">{dict.projects.subtitle}</p>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {projects.map((project) => {
            const copy = projectCopy(project, locale);
            return (
              <li
                key={project.id}
                className="grid gap-4 py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:gap-10"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    {copy.sector}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-syne)] text-xl font-semibold text-text-main">
                    {copy.role}
                  </p>
                  <p className="mt-1 text-sm text-text-muted">{copy.period}</p>
                </div>
                <div>
                  <p className="text-base leading-relaxed text-text-main">
                    {copy.summary}
                  </p>
                  <p className="mt-4 text-sm text-text-muted">
                    {project.stack.join(" · ")}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
