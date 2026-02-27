"use client";

import { motion } from "framer-motion";

const strengths = [
  {
    number: "01",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "実績に基づいた運用",
    subtitle: "100本以上のチャンネル運用経験",
    description:
      "単なるアドバイスではなく、実際に100本以上のチャンネルを自社で運用してきた実績があります。データに基づいた戦略で、収益最大化と安定運用を実現します。",
    stat: "100+",
    statLabel: "チャンネル運用実績",
  },
  {
    number: "02",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "盤石な運用体制",
    subtitle: "20人以上のチーム・再現性あるマニュアル",
    description:
      "動画制作・編集・投稿・SEO・コメント管理まで、20名以上の専門チームが担当。独自のマニュアルと品質管理で、再現性の高い運用を実現しています。",
    stat: "20+",
    statLabel: "専門スタッフ",
  },
  {
    number: "03",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "出口戦略まで一気通貫",
    subtitle: "M&Aによる売却益最大化",
    description:
      "取得から売却まで、投資のライフサイクル全体をサポート。M&Aネットワークを活用し、最適なタイミングで最高の価格での売却を実現します。",
    stat: "1.5〜2倍",
    statLabel: "売却実績（取得額比）",
  },
];

export default function Strengths() {
  return (
    <section id="strengths" className="py-12 md:py-20 lg:py-24 bg-white">
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
            なぜBuyBoostは強いのか
          </h2>
          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            他のサービスと一線を画す、3つの競合優位性
          </p>
        </motion.div>

        {/* Strength cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl shadow-md p-4 md:p-6 border border-gray-100 hover:shadow-lg transition-all group"
            >
              {/* Number */}
              <div className="absolute top-6 right-6 text-6xl font-black text-gray-50 group-hover:text-[#00B4C8]/10 transition-colors select-none">
                {strength.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-[#E6F9FC] rounded-2xl flex items-center justify-center text-[#00B4C8] mb-5 relative z-10">
                {strength.icon}
              </div>

              {/* Stat */}
              <div className="mb-4">
                <span className="text-3xl font-black text-[#00B4C8]">{strength.stat}</span>
                <span className="text-xs text-gray-500 ml-2">{strength.statLabel}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">{strength.title}</h3>
              <p className="text-sm text-[#00B4C8] font-medium mb-3">{strength.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{strength.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
