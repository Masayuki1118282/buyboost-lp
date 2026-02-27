"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "無料相談",
    description: "まずはZoomで30分の無料面談。現在の状況やご希望をお伺いします。",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    duration: "30分",
  },
  {
    number: 2,
    title: "ヒアリング・提案",
    description: "ご予算・目標・リスク許容度に合ったチャンネルをご提案。複数の選択肢をご案内します。",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    duration: "1〜3日",
  },
  {
    number: 3,
    title: "ご契約",
    description: "内容にご納得いただけましたら、運用委託契約を締結。電子契約で完結します。",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    duration: "1日",
  },
  {
    number: 4,
    title: "購入・譲渡",
    description: "チャンネルの所有権をお客様に移転。決済完了後、BuyBoostが運用を引き継ぎます。",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    duration: "3〜5日",
  },
  {
    number: 5,
    title: "運用スタート",
    description: "BuyBoostチームが運用を開始。毎月レポートにてパフォーマンスをご報告します。",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    duration: "翌月〜",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="py-12 md:py-20 lg:py-24 bg-[#F8FAFB]">
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
            サービスの流れ
          </h2>
          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            最短2週間でチャンネル運用スタート。全ての手続きをBuyBoostがサポートします。
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (mobile) */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00B4C8] to-[#F5A623]" />

          {/* Horizontal line (desktop) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00B4C8] to-[#F5A623]" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-0 pl-20 md:pl-0 pb-10 md:pb-0"
              >
                {/* Step number circle */}
                <div
                  className="absolute left-0 md:relative md:left-auto w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-md flex-shrink-0 md:mb-6"
                  style={{
                    background: `linear-gradient(135deg, #00B4C8, ${index === steps.length - 1 ? "#F5A623" : "#00B4C8"})`,
                  }}
                >
                  <div className="flex flex-col items-center">
                    {step.icon}
                    <span className="text-xs font-bold mt-0.5">0{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:text-center px-2">
                  <div className="inline-block bg-[#00B4C8]/10 text-[#00B4C8] text-xs font-bold px-3 py-1 rounded-full mb-2">
                    {step.duration}
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
