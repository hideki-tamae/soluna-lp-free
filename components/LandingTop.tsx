export default function ランディングトップ() {
  return (
    <main className="min-h-dvh">

      {/* Hero セクション */}
      <section className="mx-auto max-w-4xl px-4 pt-8 space-y-3 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Re-Verse Civilization / SOLUNAケア・トークン</h1>
        <p className="text-gray-400 text-sm">
          「優しさが制度になる」世界へ。Proof-of-Care™で貢献を可視化し、書籍・NFT・音楽・
          <span className="font-semibold text-white">メタバース美術館</span>・コミュニティを横断したケア資本主義の土台をつくります。
        </p>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 pt-8">
        <a
          href="https://tally.so/r/wM9JVY"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border hover:opacity-90 transition"
        >
          β参加フォーム（共創の第一歩）
        </a>
      </section>

      {/* 動画セクション */}
      <section className="mx-auto max-w-4xl px-4 py-10 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold">ティーザー動画（Day3）</h2>
        <video
          controls
          src="/8s_a_dramatic_202510231252_mj6zk.mp4"
          className="w-full max-w-3xl aspect-video rounded-xl border"
          playsInline
        />
      </section>

      {/* 3つのカード */}
      <section className="mx-auto max-w-4xl px-4 py-10 grid md:grid-cols-3 gap-6">
        {/* 1 */}
        <div className="rounded-3xl border/30 border px-6 py-5">
          <h3 className="font-semibold mb-2">1. 世界観に触れる（聴く・観る）</h3>
          <div className="space-y-2 text-sm">
            <a
              href="https://acescare.fanlink.tv/hidekitamae"
              target="_blank"
              rel="noopener noreferrer"
              className="block underline opacity-90 hover:opacity-100"
            >
              音楽（世界185カ国以上で配信中）
            </a>

            <a
              href="https://oncyber.io/spaces/0DCUetEBicRPi0fem1WM?coords=-2.07x2.85x5.14x1.58"
              target="_blank"
              rel="noopener noreferrer"
              className="block underline opacity-90 hover:opacity-100"
            >
              メタバース美術館（Healing Ukiyo-e 3D）
            </a>
          </div>
        </div>

        {/* 2 */}
        <div className="rounded-3xl border/30 border px-6 py-5">
          <h3 className="font-semibold mb-2">2. プロジェクトに参加する（繋がる）</h3>
          <div className="space-y-2 text-sm">
            <a
              href="https://aces-care-hub-site-ru8w.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block underline opacity-90 hover:opacity-100"
            >
              ACEs Care HUB JAPANの活動（プロジェクト）
            </a>
            <a
              href="https://tally.so/r/wM9JVY"
              target="_blank"
              rel="noopener noreferrer"
              className="block underline opacity-90 hover:opacity-100"
            >
              β参加フォーム（共創の第一歩）
            </a>
          </div>
        </div>

        {/* 3 */}
        <div className="rounded-3xl border/30 border px-6 py-5">
          <h3 className="font-semibold mb-2">3. オープンな議論の場</h3>
          <div className="space-y-2 text-sm">
            <a
              href="https://discord.gg/PBwPNBfE"
              target="_blank"
              rel="noopener noreferrer"
              className="block underline opacity-90 hover:opacity-100"
            >
              Web3公民館で共同議論に参加
            </a>
            <p className="text-gray-400 text-sm">月次レポート（構築中・随時更新）</p>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="flex justify-between text-xs text-gray-400 border-t border-white/10 py-4 px-6">
        <span>© 2025 ACEs Care HUB JAPAN / Re-Verse Network</span>
        <span className="space-x-4">
          <a href="https://tally.so/r/wM9JVY" target="_blank" rel="noopener noreferrer">β参加フォーム</a>
          <a href="https://aces-care-hub-site-ru8w.vercel.app/legal/tokushoho" target="_blank" rel="noopener noreferrer">特定商取引法</a>
        </span>
      </footer>
    </main>
  );
}
