import { getDictionary, type Locale } from "@/i18n";
import { getArticles } from "@/data/articles";

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getDictionary(lang as Locale);
  const articles = getArticles(lang as Locale);

  return (
    <>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t.blog_page.title}</h1>
          <p className="text-blue-200 text-lg">{t.blog_page.subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl border border-border p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-50 text-primary text-xs font-bold px-3 py-1 rounded-full">
                  {article.tag}
                </span>
                <span className="text-text-light text-sm">{article.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">{article.title}</h2>
              <p className="text-text-light mb-6 leading-relaxed">{article.excerpt}</p>
              <details className="group">
                <summary className="cursor-pointer text-primary font-semibold hover:underline list-none flex items-center gap-2">
                  {t.blog_page.read_more}
                  <svg
                    className="w-4 h-4 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-6 prose prose-lg max-w-none text-text-light leading-relaxed whitespace-pre-line">
                  {article.content}
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className="py-8 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-text-light text-center italic">{t.eu_disclaimer}</p>
        </div>
      </section>
    </>
  );
}
