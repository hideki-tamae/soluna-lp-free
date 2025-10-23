// components/LandingTop.tsx
// 昨日のトップ構成に戻しつつ、要望の差分を反映：
// - ヒーロー／3カード（2の段組み＆Tally、3にSpotifyを挿入）
// - 「ティーザーの一覧を見る」ボタン（/teaser）
// - 下部のティーザー動画は Day2（/Katana_Video_Generation.mp4）

export default function ランディングトップ() {
  return (
    <main className="min-h-dvh bg-black text-white">
      {/* ===== HERO（ロゴは app/layout.tsx 側で表示中） ===== */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-8">
        <p className="text-xs tracking-widest opacity-70">RE-VERSE NETWORK</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">
          Re-Verse Civilization / SOLUNAケア・トークン
        </h1>
        <p className="mt-4 max-w-3xl leading-relaxed opacity-90">
          「優しさが制度になる」世界へ。Proof-of-Care™で貢献を可視化し、書籍・NFT・音楽・メタバース美術館・コミュニティを横断したケア資本主義の土台をつくります。
        </p>

        <div className="mt-6 flex flex-wrap gap-12 items-center">
          <a
            href="/teaser"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-white text-black hover:opacity-90 transition"
          >
            ティーザーの一覧を見る
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border hover:opacity-90 transition"
          >
            読者の方はこちら（合言葉）
          </a>
        </div>
      </section>

      {/* ===== 1/2/3 の3カード ===== */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {/* 1. 世界観に触れる */}
          <div className="rounded-3xl border/30 border px-6 py-5">
            <h3 className="font-semibold mb-2">1. 世界観に触れる（聴く・観る）</h3>
            <div className="space-y-1 text-sm">
              <a className="underline opacity-90 hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
                音楽（世界185カ国以上で配信中）
              </a>
              <br />
              <a className="underline opacity-90 hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
                メタバース美術館（Healing Ukiyo-e 3D）
              </a>
            </div>
          </div>

          {/* 2. 参加する（2行まとめてリンク化 & βフォームはTally） */}
          <div className="rounded-3xl border/30 border px-6 py-5">
  <h3 className="font-semibold mb-2">2. プロジェクトに参加する（繋がる）</h3>
  <div className="space-y-2 text-sm">
    <a
      href="https://aces-care-hub-site-ru8w.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="block underline opacity-90 hover:opacity-100"
    >
      ACEs Care HUB JAPANの活動
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


          {/* 3. 議論の場（Spotify を間に挿入） */}
          <div className="rounded-3xl border/30 border px-6 py-5">
            <h3 className="font-semibold mb-2">3. オープンな議論の場</h3>
            <div className="space-y-1 text-sm">
              <a className="underline opacity-90 hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
                Web3公民館で共同議論に参加
              </a>
              <br />
              <a
                className="underline opacity-90 hover:opacity-100"
                href="https://open.spotify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                リバース・ラジオ（随時更新）
              </a>
              <br />
              <a className="underline opacity-90 hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
                月次レポート（構築中・随時更新）
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ティーザー動画（Day2） ===== */}
      <section className="mx-auto max-w-6xl px-4 py-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">ティーザー動画（Day2）</h2>
        <video
          controls
          src="/Katana_Video_Generation.mp4"
          className="w-full max-w-5xl aspect-video rounded-2xl border"
          preload="metadata"
          playsInline
        />
      </section>
    </main>
  );
}
