"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n";

const footerTexts: Record<Locale, { tagline: string; period: string; partners: string; programme: string; programmeDesc: string; copyright: string }> = {
  fr: {
    tagline: "Renforcer l'interculturalite et l'inclusion sociale chez les jeunes",
    period: "Erasmus+ KA210-YOU | Dec 2024 - Mai 2026",
    partners: "Partenaires",
    programme: "Programme",
    programmeDesc: "Co-finance par l'Union europeenne via le programme Erasmus+. Les opinions exprimees n'engagent que leurs auteurs.",
    copyright: "Cultural Bridges Project. Co-funded by the European Union.",
  },
  en: {
    tagline: "Strengthening Interculturality and Social Inclusion among Youth",
    period: "Erasmus+ KA210-YOU | Dec 2024 - May 2026",
    partners: "Partners",
    programme: "Programme",
    programmeDesc: "Co-funded by the European Union through the Erasmus+ programme. Views expressed are those of the authors only.",
    copyright: "Cultural Bridges Project. Co-funded by the European Union.",
  },
  es: {
    tagline: "Fortaleciendo la Interculturalidad y la Inclusion Social entre la Juventud",
    period: "Erasmus+ KA210-YOU | Dic 2024 - May 2026",
    partners: "Socios",
    programme: "Programa",
    programmeDesc: "Cofinanciado por la Union Europea a traves del programa Erasmus+. Las opiniones expresadas son unicamente las de los autores.",
    copyright: "Cultural Bridges Project. Cofinanciado por la Union Europea.",
  },
  pl: {
    tagline: "Wzmacnianie miedzykulturowosci i wlaczenia spolecznego wsrod mlodziezy",
    period: "Erasmus+ KA210-YOU | Gru 2024 - Maj 2026",
    partners: "Partnerzy",
    programme: "Program",
    programmeDesc: "Wspolfinansowane przez Unie Europejska w ramach programu Erasmus+. Wyrazone poglady sa wylacznie pogladami autorow.",
    copyright: "Cultural Bridges Project. Wspolfinansowane przez Unie Europejska.",
  },
};

export default function Footer() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const lang = (locales.includes(segments[0] as Locale) ? segments[0] : "fr") as Locale;
  const t = footerTexts[lang];

  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Cultural Bridges</h3>
            <p className="text-sm text-blue-200">{t.tagline}</p>
            <p className="text-sm text-blue-200 mt-2">{t.period}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">{t.partners}</h3>
            <ul className="text-sm text-blue-200 space-y-1">
              <li>Assoc. Juvenil Ndiatiguia Joves Units (ES)</li>
              <li>UGPA POLSKA (PL)</li>
              <li>Un Geste pour l&apos;Avenir (FR)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">{t.programme}</h3>
            <p className="text-sm text-blue-200">{t.programmeDesc}</p>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-6 text-center text-sm text-blue-300">
          &copy; {new Date().getFullYear()} {t.copyright}
        </div>
      </div>
    </footer>
  );
}
