"use client";

import { motion } from "framer-motion";

const risks = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
    risk: "リスク①：収益減少の可能性",
    riskDetail: "市況変化やアルゴリズム変更により、広告収益が減少する可能性があります。",
    solution: "資産価値の維持・再販サポート",
    solutionDetail:
      "収益が低下した場合でも、チャンネルの資産価値を維持するための戦略的運用を実施。また、市場環境に応じた最適なタイミングでの再販をサポートします。",
    riskColor: "#E74C3C",
    solutionColor: "#00B4C8",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    risk: "リスク②：アカウントBANの可能性",
    riskDetail: "YouTube規約違反等によるアカウント停止・削除のリスクが存在します。",
    solution: "補償制度あり",
    solutionDetail:
      "万が一アカウントがBANされた場合、過去3ヶ月の平均月収益を基準に、最大6ヶ月分を返金する補償制度を設けています。安心してお任せください。",
    riskColor: "#E74C3C",
    solutionColor: "#00B4C8",
  },
];

export default function Risks() {
  return (
    <section id="risks" className="py-12 md:py-20 lg:py-24 bg-white">
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
            リスクと対策
          </h2>
          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            投資に伴うリスクを透明に開示し、万全の対策をご用意しています
          </p>
        </motion.div>

        {/* Risk cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {risks.map((item, index) => (
            <motion.div
              key={item.risk}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
            >
              {/* Risk header */}
              <div className="bg-red-50 border-l-4 border-[#E74C3C] p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E74C3C]/10 rounded-xl flex items-center justify-center text-[#E74C3C] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#E74C3C] mb-1 uppercase tracking-wider">Risk</p>
                    <h3 className="font-bold text-gray-900 text-base">{item.risk}</h3>
                    <p className="text-gray-600 text-sm mt-2">{item.riskDetail}</p>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div className="bg-[#E6F9FC] border-l-4 border-[#00B4C8] p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00B4C8]/10 rounded-xl flex items-center justify-center text-[#00B4C8] flex-shrink-0">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#00B4C8] mb-1 uppercase tracking-wider">Solution</p>
                    <h3 className="font-bold text-gray-900 text-base">対策：{item.solution}</h3>
                    <p className="text-gray-600 text-sm mt-2">{item.solutionDetail}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-400 mt-8"
        >
          ※補償制度の詳細は契約時にご確認ください。補償の適用には一定の条件があります。
        </motion.p>
      </div>
    </section>
  );
}
