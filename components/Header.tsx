"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "サービス概要", href: "#about" },
  { label: "チャンネル実績", href: "#channels" },
  { label: "料金", href: "#pricing" },
  { label: "会社概要", href: "#company" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`text-2xl font-bold transition-colors ${scrolled ? "text-[#00B4C8]" : "text-white"}`}>
          BuyBoost
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-[#00B4C8] ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://timerex.net/s/buyboostjp_bec1/5888121d"
            className="bg-[#00B4C8] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#009ab0] transition-colors shadow-sm"
          >
            無料面談を予約
          </a>
        </nav>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 space-y-1.5"
          aria-label="メニューを開く"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-gray-800" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-gray-800" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-gray-800" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 font-medium py-3 border-b border-gray-50 hover:text-[#00B4C8] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://timerex.net/s/buyboostjp_bec1/5888121d"
            onClick={() => setMenuOpen(false)}
            className="block bg-[#00B4C8] text-white text-center px-5 py-3 rounded-full font-semibold mt-4 hover:bg-[#009ab0] transition-colors"
          >
            無料面談を予約する
          </a>
        </div>
      </div>
    </header>
  );
}
