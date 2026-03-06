export const locales = ["fr", "en", "es", "pl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const localeNames: Record<Locale, string> = {
  fr: "Francais",
  en: "English",
  es: "Espanol",
  pl: "Polski",
};

export const localeFlags: Record<Locale, string> = {
  fr: "\u{1F1EB}\u{1F1F7}",
  en: "\u{1F1EC}\u{1F1E7}",
  es: "\u{1F1EA}\u{1F1F8}",
  pl: "\u{1F1F5}\u{1F1F1}",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dictionaries: Record<Locale, () => Promise<any>> = {
  fr: () => import("@/dictionaries/fr.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  es: () => import("@/dictionaries/es.json").then((m) => m.default),
  pl: () => import("@/dictionaries/pl.json").then((m) => m.default),
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
