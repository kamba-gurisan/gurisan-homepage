import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GURISAN | ワークショップデザイン × HCD × AI",
  description: "グリサンは、生成AI × HCD × ワークショップデザインの専門家集団です。企業・大学・地方自治体向けに、循環型の学びをデザインします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
