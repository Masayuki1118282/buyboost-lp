import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー | BuyBoost",
  description: "BuyBoost（株式会社ソウゾウ）のプライバシーポリシーです。",
};

const sections = [
  {
    title: "1. 個人情報の収集について",
    content: `当社は、お問い合わせフォームその他のサービスのご利用にあたり、氏名、会社名、メールアドレス、電話番号、その他のお問い合わせ内容（以下「個人情報」）を収集する場合があります。`,
  },
  {
    title: "2. 個人情報の利用目的",
    content: `当社は、収集した個人情報を以下の目的のために利用します。
・お問い合わせへの回答および対応
・サービスに関するご案内・情報提供
・資料の送付
・サービス改善のための分析`,
  },
  {
    title: "3. 個人情報の第三者提供",
    content: `当社は、以下の場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
・法令に基づく場合
・人の生命、身体または財産の保護のために必要がある場合
・公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合
・国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合`,
  },
  {
    title: "4. 個人情報の管理",
    content: `当社は、個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。個人情報を取り扱う従業者および委託先に対し、必要かつ適切な監督を行います。`,
  },
  {
    title: "5. Cookieおよびアクセス解析ツールについて",
    content: `当サイトでは、サービス向上およびアクセス状況の把握を目的として、Cookieおよびアクセス解析ツール（Google Analytics等）を使用することがあります。これらのツールはデータを匿名で収集するものであり、個人を特定する情報を収集するものではありません。`,
  },
  {
    title: "6. アフィリエイトプログラムについて",
    content: `当サイトでは、成果報酬型広告（アフィリエイト）プログラムを利用しています。広告の成果計測のため、サンクスページ等にトラッキングタグを設置しています。取得される情報は広告効果の測定のみに使用され、個人を特定するものではありません。`,
  },
  {
    title: "7. 個人情報の開示・訂正・削除",
    content: `ご本人から個人情報の開示、訂正、追加、削除または利用停止のご請求があった場合には、ご本人であることを確認の上、合理的な期間内に対応いたします。お問い合わせは下記窓口までご連絡ください。`,
  },
  {
    title: "8. プライバシーポリシーの変更",
    content: `当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。`,
  },
  {
    title: "9. お問い合わせ窓口",
    content: `個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。

会社名　：株式会社ソウゾウ
所在地　：岐阜県関市下有知492-1
代表者　：大塚 雅之
お問い合わせ：サイト内お問い合わせフォームよりご連絡ください`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFB]">
      {/* Header */}
      <div
        className="py-16 px-6 text-center"
        style={{
          background: "linear-gradient(135deg, #007A8C 0%, #00B4C8 50%, #0093A8 100%)",
        }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          トップへ戻る
        </Link>
        <h1 className="text-3xl font-bold text-white">プライバシーポリシー</h1>
        <p className="text-white/70 text-sm mt-2">株式会社ソウゾウ</p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 space-y-8">
          <p className="text-gray-600 text-sm leading-relaxed">
            株式会社ソウゾウ（以下「当社」）は、BuyBoost（以下「当サイト」）において、お客様の個人情報保護の重要性を認識し、以下のとおりプライバシーポリシーを定めます。
          </p>

          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-base font-bold text-gray-900 mb-3">{section.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </section>
          ))}

          <p className="text-gray-400 text-xs pt-4 border-t border-gray-100">
            制定日：2024年1月1日
          </p>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#00B4C8] text-white font-bold px-8 py-4 rounded-full text-sm hover:bg-[#0093A8] transition-colors"
          >
            トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
