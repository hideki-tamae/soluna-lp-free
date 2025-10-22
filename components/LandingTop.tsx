// components/LandingTop.tsx
// 昨日のトップ構成に準拠：ヒーロー＋3ボタン（指定差分反映）＋フッター文言は layout 側のまま。
// 変更点：
//  - 2の中の「β参加フォーム」を Tally へ
//  - 3の中に「リバース・ラジオ（Spotify・準備中）」を追加（間に挿入）
//  - 「最新ティーザーを見る」→「ティーザーの一覧を見る」へ改名（/teaser に遷移）
//  - ティーザー動画の見出しを Day2 に、動画を /Katana_Video_Generation.mp4 に差し替え
//  - Re:Verse RADIO の独立ボタンは削除

export default function ランディングトップ() {
  return (
    <main className="min-h-dvh bg-black text-white">
      {/* ===== HERO（ロゴは app/layout.tsx 側で表示。ここは本文） ===== */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-8">
        <p className="text-xs tracking-widest opacity-70">RE-VERSE NETWORK</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">
          Re-Verse Civilization / SOLUNAケア・トークン
        </h1>

        <p className="mt-4 max-w-3xl leading-relaxed opacity-90">
          「優しさが制度になる」世界へ。Proof-of-Care™で貢献を可視化し、書籍・NFT・音楽・美術館・コミュニティを横断したケア資本主義の土台をつくります。
        </p>

        <div className="mt-6 flex flex-wrap gap-12 items-center">
          {/* ←ボタン名を変更して /teaser に遷移 */}
          <a
            href="/teaser"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-white text-black hover:opacity-90 transition"
          >
            ティーザーの一覧を見る
          </a>

          {/* 読者向けリンク（合言葉） ※必要に応じて差し替え */}
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border hover:opacity-90 transition"
          >
            読者の方はこちら（合言葉）
          </a>
        </div>
      </section>

      {/* ===== 1/2/3 の3カード（昨日の配置） ===== */}
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

          {/* 2. 参加する（βフォームをTallyへ） */}
          <div className="rounded-3xl border/30 border px-6 py-5">
            <h3 className="font-semibold mb-2">2. プロジェクトに参加する（繋がる）</h3>
            <div className="space-y-1 text-sm">
              <a className="underline opacity-90 hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
