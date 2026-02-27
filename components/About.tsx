"use client";

import { motion } from "framer-motion";

const steps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    step: "STEP 01",
    title: "取得",
    description: "収益化済みのYouTubeチャンネルやWebメディアをBuyBoostが厳選。お客様のご予算・目標に合ったチャンネルをご提案します。",
    color: "#00B4C8",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    step: "STEP 02",
    title: "運用",
    description: "動画制作・投稿・チャンネル管理・収益最大化まで、20名以上のプロチームが完全代行。お客様は毎月のレポートを受け取るだけ。",
    color: "#00B4C8",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    step: "STEP 03",
    title: "売却",
    description: "チャンネルが成長したら、M&Aによる売却で売却益を獲得。取得額の1.5〜2倍での売却実績があります。出口戦略まで一気通貫でサポート。",
    color: "#F5A623",
  },
];

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 lg:py-24 bg-white">
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
            BuyBoostとは？
          </h2>
          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            収益化済みWeb資産の<strong className="text-[#00B4C8]">「取得・運用・収益化・売却」</strong>までを
            トータルサポートするスモールM&Aサービスです。
          </p>
        </motion.div>

        {/* Feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#00B4C8]/10 to-[#00B4C8]/5 rounded-3xl p-8 mb-16 border border-[#00B4C8]/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-[#00B4C8] rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                お客様は「<span className="text-[#00B4C8]">買って所有するだけ</span>」
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                動画制作・投稿・チャンネル管理・視聴者対応・収益最大化など、運用に関わる一切の業務をBuyBoostが代行します。
                本業に集中しながら、安定した広告収益を手に入れてください。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-[#00B4C8] via-[#00B4C8] to-[#F5A623] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Circle icon */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg"
                  style={{ backgroundColor: step.color, color: "white" }}
                >
                  {step.icon}
                </div>

                <div className="inline-block bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-6 md:hidden">
                    <svg className="w-8 h-8 text-[#00B4C8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
