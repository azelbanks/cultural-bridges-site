import Image from "next/image";
import { getDictionary, type Locale } from "@/i18n";
import { getArticles } from "@/data/articles";

const postersByLang: Record<string, { diversity: string; stopRacism: string; bridges: string }> = {
  en: { diversity: "/images/poster-diversity.png", stopRacism: "/images/poster-stop-racism.png", bridges: "/images/poster-bridges.png" },
  fr: { diversity: "/images/poster-diversity-fr.png", stopRacism: "/images/poster-stop-racism-fr.png", bridges: "/images/poster-bridges-fr.png" },
  es: { diversity: "/images/poster-diversity-es.png", stopRacism: "/images/poster-stop-racism-es.png", bridges: "/images/poster-bridges-es.png" },
  pl: { diversity: "/images/poster-diversity-pl.png", stopRacism: "/images/poster-stop-racism-pl.png", bridges: "/images/poster-bridges-pl.png" },
};

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getDictionary(lang as Locale);
  const articles = getArticles(lang as Locale);
  const posters = postersByLang[lang] || postersByLang.en;

  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{t.blog_page.title}</h1>
          <p className="text-blue-200 text-base sm:text-lg max-w-2xl mx-auto">{t.blog_page.subtitle}</p>
        </div>
      </section>

      {/* Campaign Posters Banner */}
      <section className="bg-gray-900 py-6 sm:py-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
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

      {/* Campaign Visual Cards */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">{t.blog_page.campaign_title}</h2>

          {/* Card 1 - Hero card */}
          <div className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl p-6 sm:p-10 mb-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <p className="text-accent font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">Erasmus+ KA210-YOU</p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{t.campaign.card1_title}</h3>
              <p className="text-blue-200 text-base sm:text-lg max-w-xl mb-6">{t.campaign.card1_desc}</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <Image src="/images/logo-ndiatiguia.jpeg" alt="Ndiatiguia" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover bg-white" />
                <Image src="/images/logo-ugpa-polska.jpeg" alt="UGPA Polska" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover bg-white" />
                <Image src="/images/logo-ugpa-france.jpeg" alt="Un Geste pour l'Avenir" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover bg-white" />
                <div className="w-px h-8 bg-white/30 mx-1" />
                <Image src="/images/eu-cofunded.jpg" alt="Co-funded by EU" width={80} height={19} className="h-6 sm:h-8 w-auto bg-white rounded px-1" />
              </div>
            </div>
          </div>

          {/* Cards 2-3 */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5 sm:p-8">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">{t.campaign.card2_title}</h3>
              <p className="text-text-light leading-relaxed">{t.campaign.card2_desc}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-5 sm:p-8">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">{t.campaign.card3_title}</h3>
              <p className="text-text-light leading-relaxed">{t.campaign.card3_desc}</p>
            </div>
          </div>

          {/* Card 4 - Stats banner */}
          <div className="bg-gray-900 text-white rounded-2xl p-6 sm:p-10 mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-teal-500/20" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{t.campaign.card4_title}</h3>
                <p className="text-gray-300 leading-relaxed">{t.campaign.card4_desc}</p>
              </div>
              <div className="flex gap-4 sm:gap-6 shrink-0">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-accent">3</p>
                  <p className="text-xs text-gray-400 mt-1">countries</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-green-400">+31%</p>
                  <p className="text-xs text-gray-400 mt-1">skills</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-orange-400">97%</p>
                  <p className="text-xs text-gray-400 mt-1">recommend</p>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
              <Image src="/images/logo-ndiatiguia.jpeg" alt="Ndiatiguia" width={32} height={32} className="w-7 h-7 rounded-full object-cover bg-white" />
              <Image src="/images/logo-ugpa-polska.jpeg" alt="UGPA Polska" width={32} height={32} className="w-7 h-7 rounded-full object-cover bg-white" />
              <Image src="/images/logo-ugpa-france.jpeg" alt="Un Geste pour l'Avenir" width={32} height={32} className="w-7 h-7 rounded-full object-cover bg-white" />
              <div className="w-px h-6 bg-white/20 mx-1" />
              <Image src="/images/eu-cofunded.jpg" alt="Co-funded by EU" width={72} height={17} className="h-5 w-auto bg-white rounded px-1" />
              <span className="text-[10px] text-gray-500 ml-auto hidden sm:block">Erasmus+ KA210-YOU</span>
            </div>
          </div>

          {/* Cards 5-6 */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-5 sm:p-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">{t.campaign.card5_title}</h3>
              <p className="text-text-light leading-relaxed mb-4">{t.campaign.card5_desc}</p>
              <div className="flex items-center gap-2">
                <Image src="/images/logo-ndiatiguia.jpeg" alt="" width={24} height={24} className="w-6 h-6 rounded-full object-cover" />
                <Image src="/images/logo-ugpa-polska.jpeg" alt="" width={24} height={24} className="w-6 h-6 rounded-full object-cover" />
                <Image src="/images/logo-ugpa-france.jpeg" alt="" width={24} height={24} className="w-6 h-6 rounded-full object-cover" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200 rounded-2xl p-5 sm:p-8">
              <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">{t.campaign.card6_title}</h3>
              <p className="text-text-light leading-relaxed mb-4">{t.campaign.card6_desc}</p>
              <Image src="/images/eu-cofunded.jpg" alt="Co-funded by EU" width={120} height={28} className="h-7 w-auto bg-white rounded p-1 border border-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-8 sm:py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <article className="relative rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-5 sm:p-8 md:p-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{featured.tag}</span>
              <span className="text-text-light text-sm">{featured.date}</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-snug">{featured.title}</h2>
            <p className="text-text-light text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">{featured.excerpt}</p>
            <details className="group">
              <summary className="cursor-pointer text-primary font-semibold hover:underline list-none inline-flex items-center gap-2">
                {t.blog_page.read_more}
                <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-6 prose prose-lg max-w-none text-text-light leading-relaxed whitespace-pre-line">
                {featured.content}
              </div>
            </details>
          </article>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {rest.map((article, i) => (
              <article
                key={article.id}
                className={`bg-white rounded-xl border border-border p-5 sm:p-7 hover:shadow-lg transition-shadow flex flex-col ${
                  i === rest.length - 1 && rest.length % 2 !== 0 ? "md:col-span-2 md:max-w-[50%] md:mx-auto" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-50 text-primary text-xs font-bold px-3 py-1 rounded-full">{article.tag}</span>
                  <span className="text-text-light text-sm">{article.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 leading-snug">{article.title}</h2>
                <p className="text-text-light leading-relaxed mb-5 flex-1">{article.excerpt}</p>
                <details className="group">
                  <summary className="cursor-pointer text-primary font-semibold hover:underline list-none inline-flex items-center gap-2 text-sm">
                    {t.blog_page.read_more}
                    <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-5 prose max-w-none text-text-light leading-relaxed whitespace-pre-line text-sm">
                    {article.content}
                  </div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EU Disclaimer */}
      <section className="py-8 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-text-light text-center italic">{t.eu_disclaimer}</p>
        </div>
      </section>
    </>
  );
}
