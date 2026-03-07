import Image from "next/image";
import { getDictionary, type Locale } from "@/i18n";

export default async function AProposPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getDictionary(lang as Locale);

  const partners = [
    { name: "Associacio Juvenil Ndiatiguia Joves Units", role: t.partners_section.coordinator, country: t.partners_section.spain, city: "Lleida", flag: "\u{1F1EA}\u{1F1F8}", desc: t.about_partners.org1_desc, contact: "Nogay Ndiaye i Mir", contactRole: lang === "fr" ? "Présidente" : lang === "es" ? "Presidenta" : lang === "pl" ? "Przewodnicząca" : "President", email: "ndiatiguia@gmail.com", website: "www.ndiatiguia.cat", logo: "/images/logo-ndiatiguia.jpeg" },
    { name: "UGPA POLSKA", role: t.partners_section.partner, country: t.partners_section.poland, city: "Warsaw", flag: "\u{1F1F5}\u{1F1F1}", desc: t.about_partners.org2_desc, contact: "Adam Djato", contactRole: lang === "fr" ? "Président" : lang === "es" ? "Presidente" : lang === "pl" ? "Prezes" : "President", email: "ugpatogo@gmail.com", website: "www.ugpa.pl", logo: "/images/logo-ugpa-polska.jpeg" },
    { name: "Un Geste pour l'Avenir", role: t.partners_section.partner, country: t.partners_section.france, city: "Morsang-sur-Orge", flag: "\u{1F1EB}\u{1F1F7}", desc: t.about_partners.org3_desc, contact: "Apelete Amuzou", contactRole: lang === "fr" ? "Président" : lang === "es" ? "Presidente" : lang === "pl" ? "Prezes" : "President", email: "Amuzou.apelete@orange.fr", website: "www.ugpa.org", logo: "/images/logo-ugpa-france.jpeg" },
  ];

  const timeline = [
    { date: t.timeline.t1_date, event: t.timeline.t1_event, desc: t.timeline.t1_desc },
    { date: t.timeline.t2_date, event: t.timeline.t2_event, desc: t.timeline.t2_desc },
    { date: t.timeline.t3_date, event: t.timeline.t3_event, desc: t.timeline.t3_desc },
    { date: t.timeline.t4_date, event: t.timeline.t4_event, desc: t.timeline.t4_desc },
    { date: t.timeline.t5_date, event: t.timeline.t5_event, desc: t.timeline.t5_desc },
  ];

  const objectives = [
    { title: t.about_page.obj1_title, desc: t.about_page.obj1_desc },
    { title: t.about_page.obj2_title, desc: t.about_page.obj2_desc },
    { title: t.about_page.obj3_title, desc: t.about_page.obj3_desc },
  ];

  const fields = [
    [t.fields.programme, "Erasmus+ KA210-YOU"],
    [t.fields.form_id, "KA210-YOU-F84AFCB3"],
    [t.fields.duration, t.fields.duration_val],
    [t.fields.budget, t.fields.budget_val],
    [t.fields.participants, t.fields.participants_val],
    [t.fields.language, t.fields.language_val],
  ];

  return (
    <>
      <section className="gradient-hero text-white py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{t.about_page.title}</h1>
          <p className="text-blue-200 text-base sm:text-lg">{t.about_page.subtitle}</p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl border border-border p-5 sm:p-8 mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t.about_page.project_card}</h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {fields.map(([label, value]) => (
                <div key={label} className="flex flex-col sm:flex-row sm:gap-2">
                  <span className="font-semibold text-primary sm:min-w-[140px] text-sm sm:text-base">{label} :</span>
                  <span className="text-text-light text-sm sm:text-base">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">{t.about_page.challenge_title}</h2>
            <p className="text-text-light leading-relaxed mb-4">{t.about_page.challenge_p1}</p>
            <p className="text-text-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about_page.challenge_p2 }} />
          </div>

          <div className="mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t.about_page.objectives_title}</h2>
            <div className="space-y-3 sm:space-y-4">
              {objectives.map((obj) => (
                <div key={obj.title} className="bg-blue-50 rounded-lg p-4 sm:p-6">
                  <h3 className="font-bold text-primary mb-2">{obj.title}</h3>
                  <p className="text-text-light text-sm">{obj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">{t.about_page.partners_title}</h2>
          <div className="space-y-4 sm:space-y-6">
            {partners.map((p) => (
              <div key={p.name} className="border border-border rounded-xl p-5 sm:p-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Image src={p.logo} alt={p.name} width={64} height={64} className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg shrink-0" />
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold">{p.name}</h3>
                    <p className="text-primary font-medium text-sm">{p.role} - {p.city}, {p.country}</p>
                    <p className="text-text-light mt-3 leading-relaxed">{p.desc}</p>
                    <div className="mt-3 pt-3 border-t border-border/50 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-light">
                      <span>{p.contact}, {p.contactRole}</span>
                      <a href={`mailto:${p.email}`} className="hover:text-primary transition-colors">{p.email}</a>
                      <a href={`https://${p.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{p.website}</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">{t.about_page.timeline_title}</h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={item.date} className="flex gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full shrink-0 mt-1" />
                  {i < timeline.length - 1 && <div className="w-0.5 bg-border flex-1 my-1" />}
                </div>
                <div className="pb-8">
                  <p className="text-primary font-semibold text-sm">{item.date}</p>
                  <h3 className="font-bold text-lg">{item.event}</h3>
                  <p className="text-text-light text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Image src="/images/eu-cofunded.jpg" alt="Co-funded by the European Union" width={200} height={47} className="mx-auto mb-4" />
          <p className="text-xs text-text-light italic">{t.about_page.disclaimer}</p>
        </div>
      </section>
    </>
  );
}
