import Image from "next/image";
import { getDictionary, type Locale } from "@/i18n";
import DashboardCharts from "@/components/DashboardCharts";

const dashboardTexts: Record<string, Record<string, string>> = {
  fr: {
    title: "Tableau de bord — Résultats des questionnaires",
    subtitle: "Analyse pré/post impact — Échange de jeunes à Varsovie, mai 2025 — 30 participants",
    kpi_improvement: "Amélioration globale",
    kpi_quality: "Note de qualité",
    kpi_competence: "Compétence interculturelle",
    kpi_recommend: "Recommanderaient",
    section_pre_post: "Scores pré/post par section",
    section_top5: "Top 5 des améliorations",
    section_self: "Évolution de l'auto-évaluation (échelle 1–10)",
    section_country: "Évolution par pays",
    section_profile: "Profil des participants",
    section_satisfaction: "Satisfaction globale (post)",
    section_future: "Intentions futures (post, échelle 1–5)",
    pre: "Pré",
    post: "Post",
    change: "Évolution",
    gender: "Genre",
    age: "Âge",
    female: "Femmes",
    male: "Hommes",
    other: "Autre",
    first_erasmus: "Premier Erasmus+",
    mean_age: "Âge moyen",
    download_pdf: "Télécharger le dashboard PDF",
  },
  en: {
    title: "Dashboard — Questionnaire Results",
    subtitle: "Pre/post impact analysis — Warsaw youth exchange, May 2025 — 30 participants",
    kpi_improvement: "Overall improvement",
    kpi_quality: "Quality rating",
    kpi_competence: "Intercultural competence",
    kpi_recommend: "Would recommend",
    section_pre_post: "Pre/post scores by section",
    section_top5: "Top 5 areas of improvement",
    section_self: "Self-assessment evolution (scale 1–10)",
    section_country: "Evolution by country",
    section_profile: "Participant profile",
    section_satisfaction: "Overall satisfaction (post)",
    section_future: "Future intentions (post, scale 1–5)",
    pre: "Pre",
    post: "Post",
    change: "Change",
    gender: "Gender",
    age: "Age",
    female: "Female",
    male: "Male",
    other: "Other",
    first_erasmus: "First Erasmus+",
    mean_age: "Mean age",
    download_pdf: "Download dashboard PDF",
  },
  es: {
    title: "Panel — Resultados de los cuestionarios",
    subtitle: "Análisis de impacto pre/post — Intercambio juvenil en Varsovia, mayo 2025 — 30 participantes",
    kpi_improvement: "Mejora global",
    kpi_quality: "Nota de calidad",
    kpi_competence: "Competencia intercultural",
    kpi_recommend: "Recomendarían",
    section_pre_post: "Puntuaciones pre/post por sección",
    section_top5: "Top 5 áreas de mejora",
    section_self: "Evolución de la autoevaluación (escala 1–10)",
    section_country: "Evolución por país",
    section_profile: "Perfil de los participantes",
    section_satisfaction: "Satisfacción global (post)",
    section_future: "Intenciones futuras (post, escala 1–5)",
    pre: "Pre",
    post: "Post",
    change: "Cambio",
    gender: "Género",
    age: "Edad",
    female: "Mujeres",
    male: "Hombres",
    other: "Otro",
    first_erasmus: "Primer Erasmus+",
    mean_age: "Edad media",
    download_pdf: "Descargar dashboard PDF",
  },
  pl: {
    title: "Panel — Wyniki kwestionariuszy",
    subtitle: "Analiza wpływu przed/po — Wymiana młodzieży w Warszawie, maj 2025 — 30 uczestników",
    kpi_improvement: "Ogólna poprawa",
    kpi_quality: "Ocena jakości",
    kpi_competence: "Kompetencje międzykulturowe",
    kpi_recommend: "Poleciliby",
    section_pre_post: "Wyniki przed/po według sekcji",
    section_top5: "Top 5 obszarów poprawy",
    section_self: "Ewolucja samooceny (skala 1–10)",
    section_country: "Ewolucja według kraju",
    section_profile: "Profil uczestników",
    section_satisfaction: "Ogólna satysfakcja (po)",
    section_future: "Przyszłe zamierzenia (po, skala 1–5)",
    pre: "Przed",
    post: "Po",
    change: "Zmiana",
    gender: "Płeć",
    age: "Wiek",
    female: "Kobiety",
    male: "Mężczyźni",
    other: "Inne",
    first_erasmus: "Pierwszy Erasmus+",
    mean_age: "Średni wiek",
    download_pdf: "Pobierz dashboard PDF",
  },
};

export default async function DashboardPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dashboardTexts[lang] || dashboardTexts.en;

  return (
    <>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-blue-200 text-lg">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <DashboardCharts t={t as any} />
        </div>
      </section>

      <section className="py-8 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Image src="/images/eu-cofunded.jpg" alt="Co-funded by the European Union" width={180} height={42} className="mx-auto mb-3" />
          <p className="text-xs text-text-light italic">{dict.eu_disclaimer}</p>
        </div>
      </section>
    </>
  );
}
