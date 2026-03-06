import Link from "next/link";
import Image from "next/image";
import { getDictionary, type Locale } from "@/i18n";

const postersByLang: Record<string, { diversity: string; stopRacism: string; bridges: string }> = {
  en: { diversity: "/images/poster-diversity.png", stopRacism: "/images/poster-stop-racism.png", bridges: "/images/poster-bridges.png" },
  fr: { diversity: "/images/poster-diversity-fr.png", stopRacism: "/images/poster-stop-racism-fr.png", bridges: "/images/poster-bridges-fr.png" },
  es: { diversity: "/images/poster-diversity-es.png", stopRacism: "/images/poster-stop-racism-es.png", bridges: "/images/poster-bridges-es.png" },
  pl: { diversity: "/images/poster-diversity-pl.png", stopRacism: "/images/poster-stop-racism-pl.png", bridges: "/images/poster-bridges-pl.png" },
};

const icons = [
  <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
  <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
];

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getDictionary(lang as Locale);

  const pillars = [
    { title: t.approach.pillar1_title, desc: t.approach.pillar1_desc, icon: icons[0] },
    { title: t.approach.pillar2_title, desc: t.approach.pillar2_desc, icon: icons[1] },
    { title: t.approach.pillar3_title, desc: t.approach.pillar3_desc, icon: icons[2] },
  ];

  const stats = [
    { value: "1 600+", label: t.stats.youth_reached },
    { value: "3", label: t.stats.countries },
    { value: "18", label: t.stats.months },
    { value: "60 000 EUR", label: t.stats.budget },
  ];

  const posters = postersByLang[lang] || postersByLang.en;

  const partnersData = [
    { flag: "\u{1F1EA}\u{1F1F8}", country: t.partners_section.spain, org: "Assoc. Juvenil Ndiatiguia Joves Units", city: "Lleida", role: t.partners_section.coordinator },
    { flag: "\u{1F1F5}\u{1F1F1}", country: t.partners_section.poland, org: "UGPA POLSKA", city: "Varsovie / Warsaw", role: t.partners_section.partner },
    { flag: "\u{1F1EB}\u{1F1F7}", country: t.partners_section.france, org: "Un Geste pour l'Avenir", city: "Boissy-Saint-Leger", role: t.partners_section.partner },
  ];

  return (
    <>
      <section className="gradient-hero text-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-accent font-semibold mb-4 tracking-wide uppercase text-sm">{t.hero.badge}</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-4">{t.hero.subtitle}</p>
          <p className="text-blue-200 italic mb-10 text-lg">&ldquo;{t.hero.quote}&rdquo;</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/resultats`} className="bg-accent text-primary-dark font-bold px-8 py-3 rounded-lg hover:bg-accent-dark transition-colors">{t.hero.cta_results}</Link>
            <Link href={`/${lang}/blog`} className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors">{t.hero.cta_blog}</Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
              <p className="text-text-light text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">{t.project.title}</h2>
          <p className="text-text-light text-center max-w-2xl mx-auto mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.project.desc1 }} />
          <p className="text-text-light text-center max-w-2xl mx-auto leading-relaxed">{t.project.desc2}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.approach.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-text-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.gallery.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { src: "/images/photo-workshop-line.jpg", alt: "Workshop activity" },
              { src: "/images/photo-workshop-smart.jpg", alt: "SMART objectives workshop" },
              { src: "/images/photo-workshop-session.jpg", alt: "Workshop session" },
              { src: "/images/photo-workshop-group.jpg", alt: "Group discussion" },
              { src: "/images/photo-workshop-discussion.jpg", alt: "Team discussion" },
              { src: "/images/photo-workshop-team.jpg", alt: "Working team" },
              { src: "/images/photo-dinner.jpg", alt: "Intercultural dinner" },
              { src: "/images/photo-riviera-audience.jpg", alt: "Riviera audience" },
              { src: "/images/photo-riviera-presentation.jpg", alt: "Presentation" },
              { src: "/images/photo-riviera-facilitator.jpg", alt: "Facilitator" },
              { src: "/images/photo-gallery-visit.jpg", alt: "Art gallery visit" },
              { src: "/images/photo-art-gallery.jpg", alt: "Art gallery" },
              { src: "/images/photo-art-installation.jpg", alt: "Art installation" },
              { src: "/images/photo-local-workshop.jpg", alt: "Local workshop France" },
              { src: "/images/photo-group-outdoor.jpg", alt: "Group photo" },
              { src: "/images/photo-facilitator-whiteboard.jpg", alt: "Facilitator presentation" },
              { src: "/images/photo-gallery-discussion.jpg", alt: "Gallery discussion" },
              { src: "/images/photo-group-fun.jpg", alt: "Group fun moment" },
              { src: "/images/photo-gallery-selfie.jpg", alt: "Gallery group selfie" },
              { src: "/images/photo-riviera-wide.jpg", alt: "Riviera workshop space" },
            ].map((photo) => (
              <div key={photo.src} className="rounded-lg overflow-hidden aspect-square relative hover:scale-[1.03] transition-transform shadow-md">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 20vw" />
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold text-center mb-6">{t.gallery.video_title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <video controls className="w-full max-h-[300px]" preload="metadata" poster="/images/photo-riviera-facilitator.jpg">
                  <source src="/videos/cultural-bridges-exchange.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <video controls className="w-full max-h-[300px]" preload="metadata" poster="/images/photo-gallery-visit.jpg">
                  <source src="/videos/gallery-visit.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <video controls className="w-full max-h-[300px]" preload="metadata" poster="/images/photo-riviera-wide.jpg">
                  <source src="/videos/workshop-warsaw.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">{t.partners_section.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partnersData.map((p) => (
              <div key={p.country} className="bg-white rounded-xl border border-border p-6">
                <span className="text-5xl mb-4 block">{p.flag}</span>
                <h3 className="text-xl font-bold">{p.country}</h3>
                <p className="text-primary font-medium text-sm mt-1">{p.role}</p>
                <p className="text-text-light mt-2 text-sm">{p.org}</p>
                <p className="text-text-light text-sm">{p.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
              <Image src={posters.diversity} alt="Diversity is our strength" width={400} height={566} className="w-full h-auto" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
              <Image src={posters.stopRacism} alt="Stop racism, start listening" width={400} height={566} className="w-full h-auto" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
              <Image src={posters.bridges} alt="Build bridges, not walls" width={400} height={566} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-hero text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-blue-200 mb-8 text-lg">{t.cta.desc}</p>
          <Link href={`/${lang}/resultats`} className="bg-accent text-primary-dark font-bold px-8 py-3 rounded-lg hover:bg-accent-dark transition-colors inline-block">{t.cta.button}</Link>
        </div>
      </section>
    </>
  );
}
