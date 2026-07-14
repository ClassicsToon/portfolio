export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromParam(param: string | undefined): Locale {
  if (param && isLocale(param)) return param;
  return defaultLocale;
}
