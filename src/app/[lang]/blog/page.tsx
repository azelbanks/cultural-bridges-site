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

      {/* Featured Article */}
      <section className="py-8 sm:py-14 bg-white">
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
