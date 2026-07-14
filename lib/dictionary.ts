import type { Locale } from "./i18n";
import fr from "@/messages/fr.json";
import en from "@/messages/en.json";

const dictionaries = { fr, en } as const;

export type Dictionary = typeof fr;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
