"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { locales, localeFlags, localeNames, type Locale } from "@/i18n";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const currentLang = (locales.includes(segments[0] as Locale) ? segments[0] : "fr") as Locale;
  const pathWithoutLang = "/" + segments.slice(1).join("/");

  const navLabels: Record<Locale, [string, string, string, string, string]> = {
    fr: ["Accueil", "Résultats", "Blog", "Dashboard", "À propos"],
    en: ["Home", "Results", "Blog", "Dashboard", "About"],
    es: ["Inicio", "Resultados", "Blog", "Dashboard", "Acerca de"],
    pl: ["Strona główna", "Wyniki", "Blog", "Dashboard", "O projekcie"],
  };
  const labels = navLabels[currentLang];

  const links = [
    { href: `/${currentLang}`, label: labels[0] },
    { href: `/${currentLang}/resultats`, label: labels[1] },
    { href: `/${currentLang}/blog`, label: labels[2] },
    { href: `/${currentLang}/dashboard`, label: labels[3] },
    { href: `/${currentLang}/a-propos`, label: labels[4] },
  ];

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href={`/${currentLang}`} className="font-bold text-xl text-primary">
          Cultural Bridges
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-medium transition-colors ${
                pathname === l.href ? "text-primary" : "text-text-light hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-sm font-medium text-text-light hover:text-primary px-2 py-1 rounded border border-border"
            >
              {localeFlags[currentLang]} {currentLang.toUpperCase()}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-1 bg-white border border-border rounded-lg shadow-lg py-1 min-w-[140px]">
                {locales.map((locale) => (
                  <Link
                    key={locale}
                    href={`/${locale}${pathWithoutLang}`}
                    className={`block px-4 py-2 text-sm hover:bg-blue-50 ${
                      locale === currentLang ? "text-primary font-semibold" : "text-text-light"
                    }`}
                    onClick={() => setLangOpen(false)}
                  >
                    {localeFlags[locale]} {localeNames[locale]}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-white px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 text-text-light hover:text-primary font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-3 border-t border-border mt-2">
            {locales.map((locale) => (
              <Link
                key={locale}
                href={`/${locale}${pathWithoutLang}`}
                className={`px-3 py-1.5 text-sm rounded border ${
                  locale === currentLang
                    ? "bg-primary text-white border-primary"
                    : "border-border text-text-light hover:border-primary"
                }`}
                onClick={() => setOpen(false)}
              >
                {localeFlags[locale]} {locale.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
