import { getDictionary, type Locale } from "@/i18n";

export default async function ResultatsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getDictionary(lang as Locale);

  const categories = [
    {
      title: t.results_page.cat1,
      items: [
        { name: lang === "fr" ? "Rapport d'activite - Echange culturel Varsovie (mai 2025)" : lang === "es" ? "Informe de actividad - Intercambio cultural Varsovia (mayo 2025)" : lang === "pl" ? "Raport z dzialan - Wymiana kulturowa Warszawa (maj 2025)" : "Activity Report - Cultural Exchange Warsaw (May 2025)", desc: lang === "fr" ? "Rapport complet de l'activite 2 : echanges culturels et visites de terrain a Varsovie." : lang === "es" ? "Informe completo de la actividad 2: intercambios culturales y visitas de campo en Varsovia." : lang === "pl" ? "Pelny raport z dzialania 2: wymiany kulturowe i wizyty terenowe w Warszawie." : "Full report of Activity 2: cultural exchanges and field visits in Warsaw." },
        { name: lang === "fr" ? "Programme journalier detaille" : lang === "es" ? "Programa diario detallado" : lang === "pl" ? "Szczegolowy program dzienny" : "Detailed daily programme", desc: lang === "fr" ? "Programme jour par jour de l'echange de Varsovie." : lang === "es" ? "Programa dia a dia del intercambio de Varsovia." : lang === "pl" ? "Program dzien po dniu wymiany w Warszawie." : "Day-by-day programme of the Warsaw exchange." },
      ],
    },
    {
      title: t.results_page.cat2,
      items: [
        { name: lang === "fr" ? "Questionnaire PRE-activite" : lang === "es" ? "Cuestionario PRE-actividad" : lang === "pl" ? "Kwestionariusz PRZED-dzialaniem" : "PRE-activity questionnaire", desc: "" },
        { name: lang === "fr" ? "Analyse PRE-activite" : lang === "es" ? "Analisis PRE-actividad" : lang === "pl" ? "Analiza PRZED-dzialaniem" : "PRE-activity analysis", desc: "" },
        { name: lang === "fr" ? "Questionnaire POST-activite" : lang === "es" ? "Cuestionario POST-actividad" : lang === "pl" ? "Kwestionariusz PO-dzialaniu" : "POST-activity questionnaire", desc: "" },
        { name: lang === "fr" ? "Analyse POST-activite" : lang === "es" ? "Analisis POST-actividad" : lang === "pl" ? "Analiza PO-dzialaniu" : "POST-activity analysis", desc: "" },
        { name: "Dashboard", desc: "" },
      ],
    },
    {
      title: t.results_page.cat3,
      items: [
        "Bridges of Flavour", "Voices United", "Dialogue Hub", "Culture Connect",
        "Open Minds", "Bridge Builders", "Together We Grow", "Unity in Diversity", "Global Youth",
      ].map((name) => ({ name: `Group - ${name}`, desc: "" })),
    },
    {
      title: t.results_page.cat4,
      items: [
        { name: lang === "fr" ? "Brochure du projet" : lang === "es" ? "Folleto del proyecto" : lang === "pl" ? "Broszura projektu" : "Project brochure", desc: "" },
        { name: lang === "fr" ? "Guide d'Education Interculturelle" : lang === "es" ? "Guia de Educacion Intercultural" : lang === "pl" ? "Przewodnik po Edukacji Miedzykulturowej" : "Intercultural Education Guide", desc: "" },
        { name: lang === "fr" ? "Pack de Contenu Pedagogique" : lang === "es" ? "Pack de Contenido Pedagogico" : lang === "pl" ? "Pakiet Tresci Pedagogicznych" : "Pedagogical Content Pack", desc: "" },
        { name: lang === "fr" ? "Articles de campagne de sensibilisation" : lang === "es" ? "Articulos de campana de sensibilizacion" : lang === "pl" ? "Artykuly kampanii swiadomosciowej" : "Awareness campaign articles", desc: "" },
        { name: lang === "fr" ? "Affiches de campagne (4 langues)" : lang === "es" ? "Carteles de campana (4 idiomas)" : lang === "pl" ? "Plakaty kampanii (4 jezyki)" : "Campaign posters (4 languages)", desc: "" },
      ],
    },
    {
      title: t.results_page.cat5,
      items: [
        { name: lang === "fr" ? "Plan de durabilite et d'exploitation" : lang === "es" ? "Plan de sostenibilidad y explotacion" : lang === "pl" ? "Plan zrownowazonego rozwoju i eksploatacji" : "Sustainability and exploitation plan", desc: "" },
        { name: lang === "fr" ? "Documentation financiere" : lang === "es" ? "Documentacion financiera" : lang === "pl" ? "Dokumentacja finansowa" : "Financial documentation", desc: "" },
      ],
    },
  ];

  return (
    <>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t.results_page.title}</h1>
          <p className="text-blue-200 text-lg">{t.results_page.subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">{cat.title}</h2>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="bg-white rounded-lg border border-border p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="shrink-0 w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center font-bold text-xs">PDF</div>
                    <div>
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      {item.desc && <p className="text-text-light text-sm mt-1">{item.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-text-light text-sm">{t.results_page.note}</p>
        </div>
      </section>
    </>
  );
}
