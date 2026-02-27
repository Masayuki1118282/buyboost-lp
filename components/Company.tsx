"use client";

import { motion } from "framer-motion";

const companyInfo = [
  { label: "会社名", value: "株式会社ソウゾウ" },
  { label: "所在地", value: "岐阜県関市下有知492-1" },
  { label: "代表取締役", value: "大塚 雅之" },
  { label: "設立", value: "2019年" },
  { label: "事業内容", value: "YouTubeチャンネル・Webメディアのスモールビジネス支援、M&Aアドバイザリー" },
];

export default function Company() {
  return (
    <section id="company" className="py-12 md:py-20 lg:py-24 bg-white">
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
            運営会社
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Company card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#007A8C] to-[#00B4C8] p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-black text-[#00B4C8]">S</span>
                </div>
                <div>
                  <p className="text-white/70 text-sm">運営会社</p>
                  <h3 className="text-white font-bold text-xl">株式会社ソウゾウ</h3>
                </div>
              </div>
            </div>

            {/* Info table */}
            <div>
              {companyInfo.map((info, index) => (
                <div
                  key={info.label}
                  className={`flex gap-4 px-6 py-4 ${
                    index < companyInfo.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <dt className="text-sm font-semibold text-gray-500 w-28 flex-shrink-0">{info.label}</dt>
                  <dd className="text-sm text-gray-900 flex-1">{info.value}</dd>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              私たちについて
            </h3>
            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                株式会社ソウゾウは、岐阜県を拠点にYouTubeチャンネル・Webメディアの取得・運用・売却を支援するスモールM&Aサービス「BuyBoost」を運営しています。
              </p>
              <p>
                2019年の創業以来、100本以上のYouTubeチャンネルを自社で運用してきた経験と実績をもとに、お客様の大切な資産を最大限に活用するためのサポートを行っています。
              </p>
              <p>
                「誰もが気軽にWeb資産投資を始められる社会」の実現を目指し、透明性の高いサービスと万全のサポート体制でお客様の資産形成をお手伝いします。
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "100+", label: "運用チャンネル数" },
                { value: "20+", label: "専門スタッフ" },
                { value: "2019", label: "創業年" },
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-[#F8FAFB] rounded-2xl p-4">
                  <p className="text-2xl font-black text-[#00B4C8]">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
