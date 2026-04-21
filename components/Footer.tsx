export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-6">
          <span className="text-2xl font-bold text-[#00B4C8]">BuyBoost</span>
          <p className="text-gray-400 text-sm mt-2">収益化済みYouTubeチャンネルの取得・運用・売却を一括支援</p>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          {[
            { label: "サービス概要", href: "#about" },
            { label: "チャンネル実績", href: "#channels" },
            { label: "料金", href: "#pricing" },
            { label: "強み", href: "#strengths" },
            { label: "リスクと対策", href: "#risks" },
            { label: "サービスの流れ", href: "#flow" },
            { label: "会社概要", href: "#company" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-400 text-sm hover:text-[#00B4C8] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Privacy link */}
        <div className="mb-8">
          <a href="/privacy" className="text-gray-400 text-sm hover:text-[#00B4C8] transition-colors">
            プライバシーポリシー
          </a>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8 space-y-3">
          <p className="text-gray-500 text-xs max-w-3xl mx-auto leading-relaxed">
            ※本サービスへの投資にはリスクが伴います。掲載されている収益・利回りは過去の実績であり、
            将来の成果を保証するものではありません。投資判断はご自身の責任において行ってください。
          </p>
          <p className="text-gray-500 text-xs max-w-3xl mx-auto leading-relaxed">
            ※税務上の取り扱いについては、公認会計士・税理士等の専門家にご相談ください。
          </p>
          <p className="text-gray-600 text-xs mt-6">
            © {new Date().getFullYear()} 株式会社ソウゾウ All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
