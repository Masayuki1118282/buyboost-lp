export default function ThanksPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background: "linear-gradient(135deg, #007A8C 0%, #00B4C8 50%, #0093A8 100%)",
      }}
    >
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-[#00B4C8]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#00B4C8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          お問い合わせありがとうございます
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          内容を確認の上、担当者より折り返しご連絡いたします。
          <br />
          通常1〜2営業日以内にご連絡いたします。
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-[#00B4C8] text-white font-bold px-8 py-4 rounded-full text-sm hover:bg-[#0093A8] transition-colors"
        >
          トップページへ戻る
        </a>
      </div>
    </div>
  );
}
