import Image from "next/image";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import {
  featuredProjects,
  getProjectsChronological,
  projectCopy,
} from "@/lib/projects";

export function Projects({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const ordered = getProjectsChronological();

  return (
    <section id="projects" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
          {dict.projects.title}
        </h2>
        <p className="mt-3 max-w-2xl text-text-muted">{dict.projects.subtitle}</p>

        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {dict.projects.featured}
        </p>
        <ul className="mt-4 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <li key={project.id}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cut-transition group flex h-full flex-col border border-border bg-surface hover:border-accent"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-text-main">
                      {project.name}
                    </h3>
                    <span className="cut-transition shrink-0 text-sm text-text-muted group-hover:text-accent">
                      {dict.projects.visit} →
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {project.tagline[locale]}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <ul className="relative mt-12 border-y border-border">
          <span
            className="absolute bottom-0 left-[5px] top-0 w-px bg-border sm:left-[7px]"
            aria-hidden
          />
          {ordered.map((project) => {
            const copy = projectCopy(project, locale);
            return (
              <li
                key={project.id}
                className="relative grid gap-4 border-b border-border py-8 pl-8 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:gap-10 sm:pl-10"
              >
                <span
                  className="absolute left-0 top-10 flex h-3 w-3 items-center justify-center sm:top-11"
                  aria-hidden
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                </span>
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
