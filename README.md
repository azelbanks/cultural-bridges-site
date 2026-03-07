# Cultural Bridges

**Strengthening Interculturality and Social Inclusion among Youth**

An Erasmus+ KA210-YOU project bringing together youth organizations from Spain, Poland, and France to promote intercultural dialogue, fight discrimination, and build lasting connections between young Europeans.

> *"Building bridges between cultures, one encounter at a time."*

## About the Project

| | |
|---|---|
| **Programme** | Erasmus+ KA210-YOU |
| **Project ID** | KA210-YOU-F84AFCB3 |
| **Duration** | December 2024 – May 2026 |
| **Partners** | 3 organizations across 3 countries |
| **Participants** | 30 young people (18–30 years) |

### Partner Organizations

- **Associacio Juvenil Ndiatiguia Joves Units** — Lleida, Spain *(Coordinator)*
- **UGPA POLSKA** — Warsaw, Poland
- **Un Geste pour l'Avenir** — Morsang-sur-Orge, France

## Live Website

The project website is live at: **[cultural-bridges-site.vercel.app](https://cultural-bridges-site.vercel.app)**

Available in 4 languages: French, English, Spanish, and Polish.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Charts**: Chart.js + react-chartjs-2
- **Deployment**: Vercel (auto-deploy from `main`)
- **Analytics**: Vercel Analytics & Speed Insights
- **i18n**: Custom middleware with 4 locales (FR/EN/ES/PL)

## Project Structure

```
src/
├── app/
│   ├── [lang]/              # Localized pages
│   │   ├── page.tsx         # Homepage
│   │   ├── a-propos/        # About the project & partners
│   │   ├── blog/            # Articles & campaign posters
│   │   ├── dashboard/       # Interactive results dashboard
│   │   └── resultats/       # Documents & downloads
│   ├── layout.tsx           # Root layout (Navbar, Footer, Analytics)
│   └── page.tsx             # Root redirect → /fr
├── components/
│   ├── Navbar.tsx            # Responsive navigation + language switcher
│   ├── Footer.tsx            # Site footer with partner info
│   └── DashboardCharts.tsx   # Chart.js interactive visualizations
├── data/
│   └── articles.ts           # Blog articles (4 languages)
├── i18n/                     # Translation dictionaries
├── middleware.ts              # Locale detection & redirect
public/
├── images/                   # Photos, posters, logos
├── videos/                   # Workshop & exchange videos
└── docs/                     # Downloadable PDF documents
```

## Features

- Fully responsive mobile-first design
- Multilingual content (FR/EN/ES/PL) with automatic locale detection
- Interactive dashboard with pre/post questionnaire analysis
- Photo gallery from international exchanges
- Campaign awareness posters in 4 languages
- Downloadable project documents (reports, guides, annexes)
- Visit tracking with Vercel Analytics

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Deployment

The site auto-deploys to Vercel on every push to `main`.

## License

This project is co-funded by the European Union through the Erasmus+ programme. Views and opinions expressed are those of the authors only.
