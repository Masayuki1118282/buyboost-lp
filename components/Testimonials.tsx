"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "田中 誠",
    attr: "40代・個人事業主",
    rating: 5,
    comment:
      "運用は完全おまかせで、毎月レポートが届くだけ。本業に集中しながら副収入が得られています。最初は半信半疑でしたが、3ヶ月目から安定して収益が出始めました。",
    avatar: "TM",
    avatarColor: "#00B4C8",
  },
  {
    name: "佐藤 美咲",
    attr: "30代・会社員",
    rating: 5,
    comment:
      "不動産投資を検討していましたが、初期費用の低さとリターンの良さでBuyBoostを選びました。担当の方が丁寧に説明してくださり、安心して始められました。",
    avatar: "SM",
    avatarColor: "#F5A623",
  },
  {
    name: "山本 健太",
    attr: "50代・経営者",
    rating: 4,
    comment:
      "節税目的で始めましたが、広告収益も想定以上でした。チャンネルが育ってきたので、売却も視野に入れ始めています。出口戦略まで一緒に考えてくれるのが心強いです。",
    avatar: "YK",
    avatarColor: "#7C3AED",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-[#F5A623]" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20 lg:py-24 bg-[#F8FAFB]">
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
            お客様の声
          </h2>
          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            BuyBoostをご利用いただいたお客様からのリアルなご感想
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-4 md:p-6 flex flex-col"
            >
              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={t.rating} />
              </div>

              {/* Comment */}
              <blockquote className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t.comment}&rdquo;
              </blockquote>

              {/* Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}さん</p>
                  <p className="text-xs text-gray-500">{t.attr}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-400"
        >
          ※個人の感想であり、成果を保証するものではありません。
        </motion.p>
      </div>
    </section>
  );
}
