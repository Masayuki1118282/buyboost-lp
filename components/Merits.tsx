"use client";

import { motion } from "framer-motion";

const merits = [
  {
    icon: (
      <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "月利5〜15%の広告収益",
    description:
      "収益化済みチャンネルの広告収益を毎月受け取れます。不動産投資（表面利回り5〜8%）を大幅に上回る実績を誇ります。",
    highlight: "5〜15%/月",
    color: "#00B4C8",
    bgColor: "#E6F9FC",
  },
  {
    icon: (
      <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    title: "繰延資産計上で節税メリット大",
    description:
      "チャンネル取得費用は繰延資産として計上可能。3〜5年の償却により、課税所得を大幅に圧縮できます。特に高収入の個人事業主・法人に有効です。",
    highlight: "償却期間3〜5年",
    color: "#F5A623",
    bgColor: "#FEF3E2",
  },
  {
    icon: (
      <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "スケールアップ後の売却益",
    description:
      "BuyBoostが運用してチャンネルを成長させた後、M&Aで売却。取得額の1.5〜2倍での売却実績があります。広告収益＋売却益で投資効率を最大化。",
    highlight: "取得額の1.5〜2倍で売却",
    color: "#E74C3C",
    bgColor: "#FDECEA",
  },
];

export default function Merits() {
  return (
    <section id="merits" className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 section-title-underline inline-block">
            活用メリット
          </h2>
          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            BuyBoostを活用することで得られる3つの主要メリット
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {merits.map((merit, index) => (
            <motion.div
              key={merit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-4 md:p-6 border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: merit.bgColor, color: merit.color }}
              >
                {merit.icon}
              </div>

              {/* Highlight badge */}
              <div
                className="inline-block text-sm font-bold px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: merit.bgColor, color: merit.color }}
              >
                {merit.highlight}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{merit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{merit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-400 mt-6"
        >
          ※収益・節税効果は個人の状況により異なります。税務については税理士等の専門家にご相談ください。
        </motion.p>
      </div>
    </section>
  );
}
