"use client";

import { motion } from "framer-motion";

const fees = [
  {
    service: "チャンネル取得代行",
    price: "無料",
    note: "完全無料",
    highlight: true,
  },
  {
    service: "運用代行",
    price: "毎月の収益の30%",
    note: "成果報酬型",
    highlight: false,
  },
  {
    service: "売却手数料",
    price: "売却益の20%",
    note: "成功報酬のみ",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-20 lg:py-24 bg-[#F8FAFB]">
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
            価格形態
          </h2>
          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            初期費用ゼロ・完全成果報酬型。リスクを最小限に抑えてスタートできます。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Fee table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">料金一覧</h3>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#00B4C8]">
                    <th className="text-left px-6 py-4 text-white font-semibold text-sm">サービス</th>
                    <th className="text-right px-6 py-4 text-white font-semibold text-sm">料金</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((fee, index) => (
                    <tr
                      key={fee.service}
                      className={`border-b border-gray-100 last:border-0 ${
                        fee.highlight ? "bg-[#E6F9FC]" : "bg-white"
                      }`}
                    >
                      <td className="px-6 py-5">
                        <p className="font-semibold text-gray-900 text-sm">{fee.service}</p>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block"
                          style={{
                            backgroundColor: fee.highlight ? "#00B4C8" : "#F0F0F0",
                            color: fee.highlight ? "white" : "#666",
                          }}
                        >
                          {fee.note}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <span
                          className={`text-lg font-bold ${
                            fee.highlight ? "text-[#00B4C8]" : "text-gray-900"
                          }`}
                        >
                          {fee.price}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              ※運用代行費は収益発生時のみの支払いです。収益ゼロの月はお支払いは発生しません。
            </p>
          </motion.div>

          {/* Simulation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">運用計画例（試算）</h3>
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              {/* Scenario */}
              <div className="bg-[#F8FAFB] rounded-xl p-4 mb-6">
                <p className="text-sm font-bold text-gray-700 mb-2">シナリオ</p>
                <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#00B4C8] rounded-full" />
                    取得価格：130万円
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#00B4C8] rounded-full" />
                    月平均収益：13万円（月利10%）
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#00B4C8] rounded-full" />
                    3年後に195万円で売却
                  </span>
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">3年間の広告収益（手取り70%）</span>
                  <span className="font-bold text-gray-900">
                    13万 × 70% × 36ヶ月 = <span className="text-[#00B4C8]">327.6万円</span>
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">売却益（手取り80%）</span>
                  <span className="font-bold text-gray-900">
                    (195 - 130) × 80% = <span className="text-[#00B4C8]">52万円</span>
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">投資元本</span>
                  <span className="font-bold text-gray-900">
                    <span className="text-[#E74C3C]">-130万円</span>
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="bg-gradient-to-r from-[#00B4C8]/10 to-[#00B4C8]/5 rounded-2xl p-5 text-center">
                <p className="text-sm text-gray-600 mb-1">合計利益</p>
                <p className="text-4xl font-bold text-[#E74C3C] mb-1">541万円</p>
                <p className="text-gray-500 text-sm">
                  年換算 <span className="font-bold text-gray-700">約180万円</span> / 年利約138%
                </p>
              </div>
              <p className="text-[11px] text-gray-400 mt-3 text-center">
                ※上記はシミュレーション例であり、実際の成果を保証するものではありません。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
