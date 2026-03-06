import { getDictionary, type Locale } from "@/i18n";

type DocItem = { name: string; desc: string; file: string };

export default async function ResultatsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getDictionary(lang as Locale);

  const categories: { title: string; items: DocItem[] }[] = [
    {
      title: t.results_page.cat1,
      items: [
        {
          name: lang === "fr" ? "Rapport d'activité – Échange culturel Varsovie (mai 2025)" : lang === "es" ? "Informe de actividad – Intercambio cultural Varsovia (mayo 2025)" : lang === "pl" ? "Raport z działań – Wymiana kulturowa Warszawa (maj 2025)" : "Activity Report – Cultural Exchange Warsaw (May 2025)",
          desc: lang === "fr" ? "Rapport complet de l'activité 2 : échanges culturels et visites de terrain à Varsovie." : lang === "es" ? "Informe completo de la actividad 2: intercambios culturales y visitas de campo en Varsovia." : lang === "pl" ? "Pełny raport z działania 2: wymiany kulturowe i wizyty terenowe w Warszawie." : "Full report of Activity 2: cultural exchanges and field visits in Warsaw.",
          file: "/docs/Activity_Report_Warsaw_Exchange_May2025.pdf",
        },
        {
          name: lang === "fr" ? "Programme journalier détaillé" : lang === "es" ? "Programa diario detallado" : lang === "pl" ? "Szczegółowy program dzienny" : "Detailed daily programme",
          desc: "",
          file: "/docs/Annex_1_Daily_Programme.pdf",
        },
      ],
    },
    {
      title: t.results_page.cat2,
      items: [
        {
          name: lang === "fr" ? "Questionnaire PRÉ-activité" : lang === "es" ? "Cuestionario PRE-actividad" : lang === "pl" ? "Kwestionariusz PRZED-działaniem" : "PRE-activity questionnaire",
          desc: "",
          file: "/docs/PRE_Activity_Questionnaire_Warsaw.pdf",
        },
        {
          name: lang === "fr" ? "Analyse PRÉ-activité" : lang === "es" ? "Análisis PRE-actividad" : lang === "pl" ? "Analiza PRZED-działaniem" : "PRE-activity analysis",
          desc: "",
          file: "/docs/PRE_Questionnaire_Analysis_Warsaw.pdf",
        },
        {
          name: lang === "fr" ? "Questionnaire POST-activité" : lang === "es" ? "Cuestionario POST-actividad" : lang === "pl" ? "Kwestionariusz PO-działaniu" : "POST-activity questionnaire",
          desc: "",
          file: "/docs/POST_Activity_Questionnaire_Warsaw.pdf",
        },
        {
          name: lang === "fr" ? "Analyse POST-activité" : lang === "es" ? "Análisis POST-actividad" : lang === "pl" ? "Analiza PO-działaniu" : "POST-activity analysis",
          desc: "",
          file: "/docs/POST_Questionnaire_Analysis_Warsaw.pdf",
        },
        {
          name: "Dashboard",
          desc: "",
          file: "/docs/Questionnaire_Dashboard.pdf",
        },
      ],
    },
    {
      title: t.results_page.cat3,
      items: [
        { name: "Bridges of Flavour", file: "/docs/Annex_2_Filled_Group1_BridgesOfFlavour.pdf" },
        { name: "Voices United", file: "/docs/Annex_2_Filled_Group2_VoicesUnited.pdf" },
        { name: "Dialogue Hub", file: "/docs/Annex_2_Filled_Group3_DialogueHub.pdf" },
        { name: "Culture Connect", file: "/docs/Annex_2_Filled_Group4_CultureConnect.pdf" },
        { name: "Open Minds", file: "/docs/Annex_2_Filled_Group5_OpenMinds.pdf" },
        { name: "Bridge Builders", file: "/docs/Annex_2_Filled_Group6_BridgeBuilders.pdf" },
        { name: "Together We Grow", file: "/docs/Annex_2_Filled_Group7_TogetherWeGrow.pdf" },
        { name: "Unity in Diversity", file: "/docs/Annex_2_Filled_Group8_UnityInDiversity.pdf" },
        { name: "Global Youth", file: "/docs/Annex_2_Filled_Group9_GlobalYouth.pdf" },
      ].map((g) => ({ name: `Group – ${g.name}`, desc: "", file: g.file })),
    },
    {
      title: t.results_page.cat4,
      items: [
        {
          name: lang === "fr" ? "Brochure du projet" : lang === "es" ? "Folleto del proyecto" : lang === "pl" ? "Broszura projektu" : "Project brochure",
          desc: "",
          file: "/docs/Brochure_CulturalBridges_Project.pdf",
        },
        {
          name: lang === "fr" ? "Guide d'Éducation Interculturelle" : lang === "es" ? "Guía de Educación Intercultural" : lang === "pl" ? "Przewodnik po Edukacji Międzykulturowej" : "Intercultural Education Guide",
          desc: "",
          file: "/docs/Guide_Intercultural_Education_CulturalBridges.pdf",
        },
        {
          name: lang === "fr" ? "Pack de Contenu Pédagogique" : lang === "es" ? "Pack de Contenido Pedagógico" : lang === "pl" ? "Pakiet Treści Pedagogicznych" : "Pedagogical Content Pack",
          desc: "",
          file: "/docs/Pedagogical_Content_Pack_CulturalBridges.pdf",
        },
        {
          name: lang === "fr" ? "Articles de campagne de sensibilisation" : lang === "es" ? "Artículos de campaña de sensibilización" : lang === "pl" ? "Artykuły kampanii świadomościowej" : "Awareness campaign articles",
          desc: "",
          file: "/docs/Campaign_Articles_CulturalBridges.pdf",
        },
        {
          name: lang === "fr" ? "Affiches de campagne (4 langues)" : lang === "es" ? "Carteles de campaña (4 idiomas)" : lang === "pl" ? "Plakaty kampanii (4 języki)" : "Campaign posters (4 languages)",
          desc: "",
          file: "/docs/Campaign_Posters_4Languages.pdf",
        },
      ],
    },
    {
      title: t.results_page.cat5,
      items: [
        {
          name: lang === "fr" ? "Plan de durabilité et d'exploitation" : lang === "es" ? "Plan de sostenibilidad y explotación" : lang === "pl" ? "Plan zrównoważonego rozwoju i eksploatacji" : "Sustainability and exploitation plan",
          desc: "",
          file: "/docs/Sustainability_Plan_CulturalBridges.pdf",
        },
        {
          name: lang === "fr" ? "Documentation financière" : lang === "es" ? "Documentación financiera" : lang === "pl" ? "Dokumentacja finansowa" : "Financial documentation",
          desc: "",
          file: "/docs/Annex_9_Financial_Documentation.pdf",
        },
      ],
    },
  ];

  const downloadLabel = lang === "fr" ? "Télécharger" : lang === "es" ? "Descargar" : lang === "pl" ? "Pobierz" : "Download";

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
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      {item.desc && <p className="text-text-light text-sm mt-1">{item.desc}</p>}
                    </div>
                    <a
                      href={item.file}
                      download
                      className="shrink-0 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
                      </svg>
                      {downloadLabel}
                    </a>
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
