import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuyBoost | 収益化済みYouTubeチャンネルの取得・運用・売却を一括支援",
  description:
    "BuyBoostは、収益化済みYouTubeチャンネル・WebメディアのスモールM&Aサービスです。取得・運用・売却をプロが一括代行。月利5〜15%の実績、節税メリットも。まずは無料面談から。",
  keywords:
    "YouTubeチャンネル 買収, スモールM&A, YouTube収益化, チャンネル売買, BuyBoost, 株式会社ソウゾウ",
  openGraph: {
    title: "BuyBoost | 収益化済みYouTubeチャンネルの取得・運用・売却を一括支援",
    description:
      "BuyBoostは、収益化済みYouTubeチャンネル・WebメディアのスモールM&Aサービスです。取得・運用・売却をプロが一括代行。",
    type: "website",
    locale: "ja_JP",
    siteName: "BuyBoost",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuyBoost | 収益化済みYouTubeチャンネルの取得・運用・売却を一括支援",
    description:
      "収益化済みYouTubeチャンネル・WebメディアのスモールM&Aサービス。取得・運用・売却をプロが一括代行。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
        <Script
          id="rentracks-itp"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(callback){
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://www.rentracks.jp/js/itp/rt.track.js?t=" + (new Date()).getTime();
if ( script.readyState ) {
script.onreadystatechange = function() {
if ( script.readyState === "loaded" || script.readyState === "complete" ) {
script.onreadystatechange = null;
callback();
}
};
} else {
script.onload = function() {
callback();
};
}
document.getElementsByTagName("head")[0].appendChild(script);
}(function(){}));`,
          }}
        />
      </body>
    </html>
  );
}
