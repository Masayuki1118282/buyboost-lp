"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #007A8C 0%, #00B4C8 50%, #0093A8 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-white/3" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-[#F5A623] rounded-full animate-pulse" />
            完全無料・30分完結
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            まずは<span className="text-[#F5A623]">無料面談</span>から
          </h2>
          <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            「どんなチャンネルが買えるの？」「自分に合った投資額は？」など、
            どんなご質問もお気軽にどうぞ。勧誘・押し売りは一切ありません。
          </p>

          {/* CTA Button */}
          <motion.a
            href="https://timerex.net/s/buyboostjp_bec1/5888121d"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 bg-[#F5A623] text-white font-bold px-10 py-5 rounded-full text-lg shadow-xl hover:bg-[#e09520] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.361a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Zoomで日程を調整する
          </motion.a>

          <p className="text-white/60 text-sm mt-4">
            ※ZoomのURLは予約完了後にメールにてお送りします
          </p>

          {/* Trust badges */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: "🔒", text: "個人情報は厳重に管理" },
              { icon: "✅", text: "勧誘・押し売りなし" },
              { icon: "⏱️", text: "30分で完結" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="bg-white/15 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center gap-3"
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-white/90 text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
