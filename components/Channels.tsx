"use client";

import { motion } from "framer-motion";

const channels = [
  {
    name: "日本賛美チャンネル",
    subscribers: "3.2万人",
    transferPrice: "2,000万円",
    monthlyRevenue: "238万円",
    roi: "11.9%",
    category: "エンタメ・国内",
    gradient: "from-red-500 to-orange-400",
  },
  {
    name: "野球2ch反応系",
    subscribers: "1万人",
    transferPrice: "650万円",
    monthlyRevenue: "119万円",
    roi: "18.3%",
    category: "スポーツ・反応",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    name: "漫画・アニメ反応集",
    subscribers: "2.6万人",
    transferPrice: "64万円",
    monthlyRevenue: "8.2万円",
    roi: "12.8%",
    category: "エンタメ・アニメ",
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function Channels() {
  return (
    <section id="channels" className="py-12 md:py-20 lg:py-24 bg-[#F8FAFB]">
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
            チャンネル実績例
          </h2>
          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            実際に取引・運用した収益化チャンネルの一部をご紹介します。
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {channels.map((ch, index) => (
            <motion.div
              key={ch.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Card header */}
              <div className={`bg-gradient-to-r ${ch.gradient} p-6`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg className="w-9 h-9" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000"/>
                      <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FFFFFF"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-white/70 text-xs">{ch.category}</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg leading-tight">{ch.name}</h3>
                <p className="text-white/80 text-sm mt-1">登録者 {ch.subscribers}</p>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">譲渡価格</p>
                    <p className="text-lg font-bold text-gray-900">{ch.transferPrice}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">月平均収益</p>
                    <p className="text-lg font-bold text-[#00B4C8]">{ch.monthlyRevenue}</p>
                  </div>
                </div>

                <div className="bg-[#FFF9F0] border border-[#F5A623]/30 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600">実質月利</p>
                    <p className="text-2xl font-bold text-[#E74C3C]">{ch.roi}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">年換算</p>
                    <p className="text-sm font-bold text-gray-700">
                      {(parseFloat(ch.roi) * 12).toFixed(0)}%
                    </p>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 mt-2">※過去の実績であり、将来の収益を保証するものではありません。</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emphasis banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6 md:p-8 text-center border-l-4 border-[#E74C3C]"
        >
          <p className="text-gray-600 text-sm md:text-base mb-2">
            掲載した3チャンネルの実績から試算すると
          </p>
          <p className="text-2xl md:text-3xl font-bold text-[#E74C3C]">
            実質月利は10%以上
          </p>
          <p className="text-gray-500 text-sm mt-2">
            不動産や株式投資と比較しても圧倒的なリターンを実現しています。
          </p>
          <p className="text-[11px] text-gray-400 mt-3">
            ※上記は過去の取引事例に基づく試算です。投資結果は市況・運用状況により異なり、成果を保証するものではありません。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
