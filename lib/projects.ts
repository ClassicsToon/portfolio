import type { Locale } from "./i18n";

export type Project = {
  id: string;
  sector: { fr: string; en: string };
  role: { fr: string; en: string };
  period: { fr: string; en: string };
  summary: { fr: string; en: string };
  stack: string[];
  startYear: number;
  /** null = ongoing */
  endYear: number | null;
};

export const projects: Project[] = [
  {
    id: "greentech",
    sector: { fr: "GreenTech", en: "GreenTech" },
    role: {
      fr: "Sénior Développeur",
      en: "Senior Developer",
    },
    period: { fr: "En cours · Entreprise USA · Remote", en: "Ongoing · US company · Remote" },
    summary: {
      fr: "Applications GreenTech serverless (AWS / React / GraphQL) pour un client américain.",
      en: "GreenTech serverless apps (AWS / React / GraphQL) for a US client.",
    },
    stack: ["AWS", "React", "GraphQL", "Serverless"],
    startYear: 2024,
    endYear: null,
  },
  {
    id: "healthtech",
    sector: { fr: "HealthTech", en: "HealthTech" },
    role: {
      fr: "Développeur Sénior Full Stack",
      en: "Senior Full Stack Developer",
    },
    period: { fr: "2023 – en cours · Startup France · Remote", en: "2023 – present · French startup · Remote" },
    summary: {
      fr: "Produit santé en architecture serverless AWS — React, GraphQL, Material UI.",
      en: "Health product on AWS serverless — React, GraphQL, Material UI.",
    },
    stack: ["AWS", "React", "GraphQL", "Material UI", "Serverless"],
    startYear: 2023,
    endYear: null,
  },
  {
    id: "zion",
    sector: { fr: "E-commerce · Zion", en: "E-commerce · Zion" },
    role: {
      fr: "Fondateur · CEO & CTO",
      en: "Founder · CEO & CTO",
    },
    period: { fr: "2021 – en cours · Équipe de 10", en: "2021 – present · Team of 10" },
    summary: {
      fr: "Startup e-commerce : vision produit + architecture microservices (Next.js, NestJS, gRPC, PostgreSQL).",
      en: "E-commerce startup: product vision + microservices architecture (Next.js, NestJS, gRPC, PostgreSQL).",
    },
    stack: ["Next.js", "NestJS", "GraphQL", "gRPC", "PostgreSQL", "Docker"],
    startYear: 2021,
    endYear: null,
  },
  {
    id: "sales-forms",
    sector: { fr: "Formulaires sales", en: "Sales forms" },
    role: {
      fr: "Full Stack Développeur",
      en: "Full Stack Developer",
    },
    period: { fr: "Entreprise USA · Remote", en: "US company · Remote" },
    summary: {
      fr: "Parcours sales et formulaires critiques en stack AWS serverless.",
      en: "Critical sales flows and forms on AWS serverless.",
    },
    stack: ["AWS", "React", "GraphQL", "Serverless"],
    startYear: 2023,
    endYear: 2024,
  },
  {
    id: "fintech-bank",
    sector: { fr: "Fintech · Banque", en: "Fintech · Banking" },
    role: {
      fr: "Lead Développeur Full Stack (Back, Front, Mobile)",
      en: "Lead Full Stack Developer (Back, Front, Mobile)",
    },
    period: { fr: "2020 – 2023 · Startup France", en: "2020 – 2023 · French startup" },
    summary: {
      fr: "Plateforme bancaire event-driven en microservices (NATS). Ownership bout-en-bout du produit technique.",
      en: "Event-driven banking platform with microservices (NATS). End-to-end ownership of the technical product.",
    },
    stack: ["React", "GraphQL", "Apollo Server", "PostgreSQL", "Docker", "NATS"],
    startYear: 2020,
    endYear: 2023,
  },
  {
    id: "accounting",
    sector: { fr: "Outils comptabilité", en: "Accounting tools" },
    role: {
      fr: "Senior Front-end Développeur",
      en: "Senior Front-end Developer",
    },
    period: { fr: "1 an · Startup France", en: "1 year · French startup" },
    summary: {
      fr: "Interfaces métier React pour un outil de comptabilité — UX claire, état maîtrisé avec Redux.",
      en: "Business-critical React interfaces for accounting software — clear UX, Redux state management.",
    },
    stack: ["React", "Sass", "Redux"],
    startYear: 2019,
    endYear: 2020,
  },
];

function compareProjects(a: Project, b: Project): number {
  const endA = a.endYear ?? Number.POSITIVE_INFINITY;
  const endB = b.endYear ?? Number.POSITIVE_INFINITY;
  if (endA !== endB) return endB - endA;
  return b.startYear - a.startYear;
}

export function getProjectsChronological(): Project[] {
  return [...projects].sort(compareProjects);
}

export function projectCopy(project: Project, locale: Locale) {
  return {
    sector: project.sector[locale],
    role: project.role[locale],
    period: project.period[locale],
    summary: project.summary[locale],
  };
}
