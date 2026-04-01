import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "GURISAN | ワークショップデザイン × HCD × AI",
  description: "グリサンは、生成AI × HCD × ワークショップデザインの専門家集団です。企業・大学・地方自治体向けに、循環型の学びをデザインします。",
  openGraph: {
    title: "GURISAN | ワークショップデザイン × HCD × AI",
    description: "グリサンは、生成AI × HCD × ワークショップデザインの専門家集団です。企業・大学・地方自治体向けに、循環型の学びをデザインします。",
    url: "https://www.gurisanws.com",
    siteName: "GURISAN",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GURISAN | ワークショップデザイン × HCD × AI",
    description: "グリサンは、生成AI × HCD × ワークショップデザインの専門家集団です。",
  },
  alternates: {
    canonical: "https://www.gurisanws.com",
  },
  icons: {
    icon: "/gurisanta.png",
    apple: "/gurisanta.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="pb-12">
        {children}
        <footer className="fixed bottom-0 w-full z-30 py-3 text-center text-xs text-slate-400 border-t border-slate-100 bg-white/80 backdrop-blur-md">
          © 2026 GURISAN. All Rights Reserved.
          <span className="mx-2">·</span>
          <Link href="/tokushoho" className="hover:text-slate-600 transition-colors">特定商取引法</Link>
          <span className="mx-2">·</span>
          <a href="#contact" className="hover:text-slate-600 transition-colors">お問い合わせ</a>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
