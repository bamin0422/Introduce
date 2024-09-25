import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
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
      <body className="bg-slate-50">{children}</body>
      <Analytics />
    </html>
  );
}
