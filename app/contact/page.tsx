"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CONSULTATIONS = ["WEB面談希望", "資料希望", "その他"];

export default function ContactPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    consultations: [] as string[],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  function toggleConsultation(value: string) {
    setForm((prev) => ({
      ...prev,
      consultations: prev.consultations.includes(value)
        ? prev.consultations.filter((v) => v !== value)
        : [...prev.consultations, value],
    }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "氏名を入力してください";
    if (!form.email.trim()) {
      e.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "正しいメールアドレスを入力してください";
    }
    if (!form.phone.trim()) {
      e.phone = "電話番号を入力してください";
    } else if (!/^[\d\-+() ]{10,15}$/.test(form.phone.replace(/\s/g, ""))) {
      e.phone = "正しい電話番号を入力してください";
    }
    if (form.consultations.length === 0)
      e.consultations = "相談内容を1つ以上選択してください";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      router.push("/thanks");
    } catch {
      setServerError("送信に失敗しました。時間をおいて再度お試しください。");
      setSubmitting(false);
    }
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #007A8C 0%, #00B4C8 50%, #0093A8 100%)",
      }}
    >
      {/* Header */}
      <div className="py-6 px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          トップへ戻る
        </Link>
      </div>

      <div className="max-w-xl mx-auto px-6 pb-16">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#F5A623] rounded-full animate-pulse" />
            完全無料・勧誘なし
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">無料お問い合わせ</h1>
          <p className="text-white/80 text-sm">
            下記フォームにご記入の上、送信ボタンを押してください。
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* 氏名 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                氏名 <span className="text-[#E74C3C]">*</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                placeholder="山田 太郎"
                className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-[#00B4C8] focus:ring-2 focus:ring-[#00B4C8]/20 ${
                  errors.name ? "border-[#E74C3C]" : "border-gray-200"
                }`}
              />
              {errors.name && <p className="text-[#E74C3C] text-xs mt-1">{errors.name}</p>}
            </div>

            {/* 会社名 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                会社名 <span className="text-gray-400 text-xs font-normal">（任意）</span>
              </label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                placeholder="株式会社〇〇"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-[#00B4C8] focus:ring-2 focus:ring-[#00B4C8]/20"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                メールアドレス <span className="text-[#E74C3C]">*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                placeholder="example@mail.com"
                className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-[#00B4C8] focus:ring-2 focus:ring-[#00B4C8]/20 ${
                  errors.email ? "border-[#E74C3C]" : "border-gray-200"
                }`}
              />
              {errors.email && <p className="text-[#E74C3C] text-xs mt-1">{errors.email}</p>}
            </div>

            {/* 電話番号 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                電話番号 <span className="text-[#E74C3C]">*</span>
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                placeholder="090-1234-5678"
                className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-[#00B4C8] focus:ring-2 focus:ring-[#00B4C8]/20 ${
                  errors.phone ? "border-[#E74C3C]" : "border-gray-200"
                }`}
              />
              {errors.phone && <p className="text-[#E74C3C] text-xs mt-1">{errors.phone}</p>}
            </div>

            {/* 相談内容 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                相談内容 <span className="text-[#E74C3C]">*</span>
              </label>
              <div className="space-y-2">
                {CONSULTATIONS.map((item) => (
                  <label
                    key={item}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      form.consultations.includes(item)
                        ? "border-[#00B4C8] bg-[#00B4C8]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={form.consultations.includes(item)}
                      onChange={() => toggleConsultation(item)}
                      className="w-4 h-4 accent-[#00B4C8]"
                    />
                    <span className="text-sm text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
              {errors.consultations && (
                <p className="text-[#E74C3C] text-xs mt-1">{errors.consultations}</p>
              )}
            </div>

            {serverError && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-[#E74C3C] text-sm">
                {serverError}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#F5A623] text-white font-bold py-4 rounded-full text-base shadow-lg hover:bg-[#e09520] transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2"
            >
              {submitting ? "送信中..." : "無料で問い合わせる"}
            </button>

            <p className="text-gray-400 text-xs text-center">
              ※個人情報は厳重に管理し、第三者への提供は行いません
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
