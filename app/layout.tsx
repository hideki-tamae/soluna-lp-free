// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Re-Verse Civilization / SOLUNA",
  description: "Care Capitalism — Proof-of-Care™",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-black text-white">
        {/* ===== Header（共通） ===== */}
        <header className="w-full border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            {/* 左：ロゴ + サイト名 */}
            <a href="/" className="flex items-center gap-2 opacity-90 hover:opacity-100 transition">
              <img src="/logo.png" alt="ACEs Care HUB JAPAN" className="h-6 w-6 rounded" />
              <span className="text-sm font-semibold tracking-wide">ACES Care HUB JAPAN</span>
            </a>

            {/* 右：ナビ */}
            <nav className="flex items-center gap-6 text-sm">
              <a href="/claim" className="opacity-80 hover:opacity-100">参画の扉</a>
              <a href="/thanks" className="opacity-80 hover:opacity-100">読了者解除</a>
            </nav>
          </div>
        </header>

        {/* コンテンツ */}
        {children}

        {/* ===== Footer（共通） ===== */}
        <footer className="w-full border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between text-sm">
            {/* 左下 */}
            <div className="opacity-70">© 2025 ACEs Care HUB JAPAN</div>
            {/* 右下 */}
            <div className="flex items-center gap-6">
              <a
                href="https://tally.so/r/wM9JVY"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100"
              >
                β参加フォーム
              </a>
              <a href="#" className="opacity-80 hover:opacity-100">特定商取引法</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
