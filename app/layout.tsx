import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOLUNA — Re-Verse Civilization",
  description: "KDP連動ティザー & 読了解錠LP",
  openGraph: { title: "SOLUNA LP", description: "読後、合言葉で解錠。", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "SOLUNA LP", description: "読後、合言葉で解錠。", images: ["/og.png"] }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="ja"><body>{children}</body></html>);
}
