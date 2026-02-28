"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #007A8C 0%, #00B4C8 40%, #00CCD8 70%, #0093A8 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full bg-white/5" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#F5A623] rounded-full animate-pulse" />
              スモールM&Aの新スタンダード
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-[#F5A623]">WEB資産</span>を活かす
              <br />
              新しいスモール
              <br />
              M&Aのカタチ
            </h1>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              WebメディアやYouTubeチャンネルの
              <strong className="text-white">取得・運用・売却</strong>を一括支援。
              あなたは「所有するだけ」、運用はBuyBoostが全代行します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://timerex.net/s/buyboostjp_bec1/5888121d"
                className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-white font-bold px-8 py-4 rounded-full text-base shadow-lg hover:bg-[#e09520] transition-all hover:scale-105 active:scale-95"
              >
                無料面談を予約する
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full text-base border border-white/30 hover:bg-white/25 transition-all"
              >
                サービスを詳しく見る
              </a>
            </div>
            <p className="text-white/60 text-xs mt-4">※完全無料・勧誘なし・30分で完了</p>
          </motion.div>

          {/* Right: Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-11 h-11" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000"/>
                      <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FFFFFF"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">日本賛美チャンネル</p>
                    <p className="text-xs text-gray-500">登録者 3.2万人</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#F8FAFB] rounded-2xl p-4">
                    <p className="text-xs text-gray-500 mb-1">譲渡価格</p>
                    <p className="text-xl font-bold text-gray-900">2,000<span className="text-sm font-normal">万円</span></p>
                  </div>
                  <div className="bg-[#F8FAFB] rounded-2xl p-4">
                    <p className="text-xs text-gray-500 mb-1">月平均収益</p>
                    <p className="text-xl font-bold text-[#00B4C8]">238<span className="text-sm font-normal">万円</span></p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#00B4C8]/10 to-[#00B4C8]/5 rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">実質月利</span>
                    <span className="text-2xl font-bold text-[#E74C3C]">11.9%</span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00B4C8] rounded-full" style={{ width: "79%" }} />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-[#F5A623] text-white rounded-2xl px-4 py-3 shadow-lg"
              >
                <p className="text-xs font-medium">月利実績</p>
                <p className="text-2xl font-bold">10%+</p>
              </motion.div>

              {/* Secondary floating card */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-6 bg-white rounded-2xl px-5 py-3 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">運用代行</p>
                    <p className="text-sm font-bold text-gray-900">完全おまかせ</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
      >
        <span className="text-xs">スクロール</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
