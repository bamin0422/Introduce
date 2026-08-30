import "./globals.css";
import type { Metadata } from "next";
import { Syne, Noto_Sans_KR, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const display = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});
const body = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-body",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "민대인 포트폴리오",
  description: "안녕하세요. 민대인입니다!",
  icons: "favicon.ico",
  openGraph: {
    title: "민대인 | 포트폴리오",
    description: "프론트엔드 개발자 민대인입니다.",
    siteName: "민대인 | 포트폴리오",
    locale: "ko_KR",
    type: "website",
    url: "https://bamin-dev.pe.kr",
    images: {
      url: "/images/thumbnail.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <meta property="og:title" content="민대인 포트폴리오" />
        <meta property="og:url" content="https://bamin-dev.pe.kr" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/thumbnail.png" />
        <meta property="og:title" content="민대인 포트폴리오" />
        <meta
          property="og:description"
          content="프론트엔드 개발자 민대인입니다."
        />
      </head>
      <body className="font-sans antialiased">
        <div className="glass-bg" aria-hidden>
          <span style={{ width: "34vw", height: "34vw", left: "38vw", top: "-10vw", background: "hsl(214 90% 70% / 0.5)" }} />
          <span style={{ width: "30vw", height: "30vw", left: "10vw", bottom: "-8vw", background: "hsl(205 95% 65% / 0.4)" }} />
          <span style={{ width: "26vw", height: "26vw", right: "18vw", bottom: "10vh", background: "hsl(214 84% 62% / 0.35)" }} />
        </div>{children}</body>
      <Analytics />
    </html>
  );
}
