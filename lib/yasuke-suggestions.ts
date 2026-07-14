import type { Locale } from "./i18n";

export type SuggestionId =
  | "who"
  | "experience"
  | "stack"
  | "rate"
  | "availability"
  | "contact";

export const suggestionIds: SuggestionId[] = [
  "who",
  "experience",
  "stack",
  "rate",
  "availability",
  "contact",
];

const prompts: Record<Locale, Record<SuggestionId, string>> = {
  fr: {
    who: "Qui es-tu ? Présente brièvement ton profil et ton positionnement.",
    experience:
      "Quelles sont tes expériences senior et tes principales missions (secteurs, rôles) ?",
    stack: "Quelle est ta stack technique principale ?",
    rate: "Quel est ton tarif journalier ?",
    availability:
      "Es-tu disponible en freelance, et pour quel type de clients (startups) ?",
    contact: "Comment puis-je te contacter ?",
  },
  en: {
    who: "Who are you? Briefly introduce your profile and positioning.",
    experience:
      "What is your senior experience and main missions (sectors, roles)?",
    stack: "What is your main tech stack?",
    rate: "What is your day rate?",
    availability:
      "Are you available for freelance, and for which type of clients (startups)?",
    contact: "How can I contact you?",
  },
};

export function getSuggestionPrompt(locale: Locale, id: SuggestionId): string {
  return prompts[locale][id];
}
