"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const COLORS = {
  primary: "#003399",
  primaryLight: "#4d7acc",
  accent: "#FFCC00",
  orange: "#e67e22",
  teal: "#1abc9c",
  green: "#27ae60",
  red: "#e74c3c",
  gray: "#95a5a6",
  dark: "#2c3e50",
};

interface DashboardTexts {
  title: string;
  subtitle: string;
  kpi_improvement: string;
  kpi_quality: string;
  kpi_competence: string;
  kpi_recommend: string;
  section_pre_post: string;
  section_top5: string;
  section_self: string;
  section_country: string;
  section_profile: string;
  section_satisfaction: string;
  section_future: string;
  pre: string;
  post: string;
  change: string;
  gender: string;
  age: string;
  female: string;
  male: string;
  other: string;
  first_erasmus: string;
  mean_age: string;
  download_pdf: string;
}

export default function DashboardCharts({ t }: { t: DashboardTexts }) {
  const barOptions = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "top" as const } },
    scales: {
      x: { min: 0, max: 5, ticks: { stepSize: 1 } },
    },
  };

  const prePostSectionData = {
    labels: [
      "B — Intercultural awareness",
      "C — Social & intercultural skills",
      "D — Civic engagement",
      "E — Knowledge of discrimination",
    ],
    datasets: [
      {
        label: t.pre,
        data: [3.45, 3.19, 3.27, 2.98],
        backgroundColor: COLORS.gray,
      },
      {
        label: t.post,
        data: [4.36, 4.21, 4.25, 4.06],
        backgroundColor: COLORS.primary,
      },
    ],
  };

  const top5Data = {
    labels: [
      "D4 — European youth network",
      "B6 — Knowledge of partner cultures",
      "E4 — Anti-discrimination strategies",
      "C5 — Confidence in int'l expression",
      "E3 — Legal framework awareness",
    ],
    datasets: [
      {
        label: t.pre,
        data: [2.37, 2.53, 2.67, 2.87, 2.47],
        backgroundColor: COLORS.gray,
      },
      {
        label: t.post,
        data: [4.23, 4.07, 3.93, 4.10, 3.60],
        backgroundColor: COLORS.teal,
      },
    ],
  };

  const countryData = {
    labels: ["Spain", "Poland", "France"],
    datasets: [
      {
        label: t.pre,
        data: [3.53, 3.34, 3.50],
        backgroundColor: COLORS.gray,
      },
      {
        label: t.post,
        data: [4.38, 4.29, 4.41],
        backgroundColor: [COLORS.orange, COLORS.red, COLORS.primary],
      },
    ],
  };

  const countryBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "top" as const } },
    scales: {
      y: { min: 0, max: 5, ticks: { stepSize: 1 } },
    },
  };

  const satisfactionData = {
    labels: [
      "Safe & included",
      "Opportunities to participate",
      "Expectations met",
      "Methods effective",
      "Skills developed",
      "Well organised",
      "Logistics",
    ],
    datasets: [
      {
        label: "Score /5",
        data: [4.70, 4.60, 4.57, 4.53, 4.53, 4.47, 4.13],
        backgroundColor: COLORS.accent,
        borderColor: COLORS.dark,
        borderWidth: 1,
      },
    ],
  };

  const satisfactionOptions = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { min: 0, max: 5, ticks: { stepSize: 1 } },
    },
  };

  const genderData = {
    labels: [t.female, t.male, t.other],
    datasets: [
      {
        data: [57, 40, 3],
        backgroundColor: [COLORS.orange, COLORS.primary, COLORS.teal],
      },
    ],
  };

  const ageData = {
    labels: ["18–21", "22–25", "26+"],
    datasets: [
      {
        data: [37, 40, 23],
        backgroundColor: [COLORS.accent, COLORS.orange, COLORS.primary],
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" as const } },
  };

  return (
    <>
      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-white rounded-xl border border-border p-6 text-center shadow-sm">
          <p className="text-4xl font-bold text-green-600">+31.1%</p>
          <p className="text-xs text-text-light mt-1">3.22 → 4.22</p>
          <p className="text-sm font-semibold mt-2">{t.kpi_improvement}</p>
        </div>
        <div className="bg-white rounded-xl border border-border p-6 text-center shadow-sm">
          <p className="text-4xl font-bold text-primary">8.6<span className="text-lg text-text-light">/10</span></p>
          <p className="text-xs text-text-light mt-1">83% rated 8+</p>
          <p className="text-sm font-semibold mt-2">{t.kpi_quality}</p>
        </div>
        <div className="bg-white rounded-xl border border-border p-6 text-center shadow-sm">
          <p className="text-4xl font-bold text-teal-600">+37.6%</p>
          <p className="text-xs text-text-light mt-1">5.67 → 7.80 /10</p>
          <p className="text-sm font-semibold mt-2">{t.kpi_competence}</p>
        </div>
        <div className="bg-white rounded-xl border border-border p-6 text-center shadow-sm">
          <p className="text-4xl font-bold text-orange-500">97%</p>
          <p className="text-xs text-text-light mt-1">4.77 / 5.00</p>
          <p className="text-sm font-semibold mt-2">{t.kpi_recommend}</p>
        </div>
      </div>

      {/* Self-Assessment Evolution */}
      <div className="bg-white rounded-xl border border-border p-8 mb-8 shadow-sm">
        <h3 className="text-xl font-bold mb-6">{t.section_self}</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="text-center">
            <div className="w-28 h-28 rounded-full border-[6px] border-gray-300 flex items-center justify-center mx-auto">
              <div>
                <p className="text-3xl font-bold text-gray-500">5.7</p>
                <p className="text-xs text-text-light">/10</p>
              </div>
            </div>
            <p className="text-sm mt-2 font-medium">PRE</p>
          </div>
          <svg className="w-8 h-8 text-text-light hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          <div className="text-center">
            <div className="w-28 h-28 rounded-full border-[6px] border-primary flex items-center justify-center mx-auto">
              <div>
                <p className="text-3xl font-bold text-primary">7.8</p>
                <p className="text-xs text-text-light">/10</p>
              </div>
            </div>
            <p className="text-sm mt-2 font-medium">POST</p>
          </div>
          <svg className="w-8 h-8 text-text-light hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          <div className="text-center">
            <div className="w-28 h-28 rounded-full border-[6px] border-orange-400 flex items-center justify-center mx-auto">
              <div>
                <p className="text-3xl font-bold text-orange-500">8.6</p>
                <p className="text-xs text-text-light">/10</p>
              </div>
            </div>
            <p className="text-sm mt-2 font-medium">Quality rating</p>
          </div>
        </div>
      </div>

      {/* Pre vs Post Sections */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl border border-border p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-4">{t.section_pre_post}</h3>
          <div className="h-[280px]">
            <Bar data={prePostSectionData} options={barOptions} />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-border p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-4">{t.section_top5}</h3>
          <div className="h-[280px]">
            <Bar data={top5Data} options={barOptions} />
          </div>
        </div>
      </div>

      {/* Country Evolution + Satisfaction */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl border border-border p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-4">{t.section_country}</h3>
          <div className="h-[260px]">
            <Bar data={countryData} options={countryBarOptions} />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-border p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-4">{t.section_satisfaction}</h3>
          <div className="h-[260px]">
            <Bar data={satisfactionData} options={satisfactionOptions} />
          </div>
        </div>
      </div>

      {/* Participant Profile */}
      <div className="bg-white rounded-xl border border-border p-8 mb-8 shadow-sm">
        <h3 className="text-xl font-bold mb-6">{t.section_profile}</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-sm font-semibold mb-3 text-text-light">{t.gender}</h4>
            <div className="h-[200px]">
              <Doughnut data={genderData} options={doughnutOptions} />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 text-text-light">{t.age}</h4>
            <div className="h-[200px]">
              <Doughnut data={ageData} options={doughnutOptions} />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-primary">23.1</p>
              <p className="text-sm text-text-light">{t.mean_age}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-teal-600">70%</p>
              <p className="text-sm text-text-light">{t.first_erasmus}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Future Intentions */}
      <div className="bg-white rounded-xl border border-border p-8 mb-8 shadow-sm">
        <h3 className="text-xl font-bold mb-6">{t.section_future}</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { value: "4.77", label: "Would recommend" },
            { value: "4.63", label: "Stay in contact internationally" },
            { value: "4.57", label: "Motivated for future Erasmus+" },
            { value: "4.17", label: "Share learnings with community" },
            { value: "4.07", label: "Take action for intercultural dialogue" },
          ].map((item) => (
            <div key={item.label} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">{item.value}</p>
              <p className="text-xs text-text-light mt-1 leading-tight">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Download PDF link */}
      <div className="text-center">
        <a
          href="/docs/Questionnaire_Dashboard.pdf"
          download
          className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
          </svg>
          {t.download_pdf}
        </a>
      </div>
    </>
  );
}
