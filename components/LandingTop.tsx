// components/LandingTop.tsx
// ホーム本体：ヒーロー＋3カード＋RADIO(準備中)＋最下部に「最新ティーザー」自動表示。
// さらに /teaser ページ用にデータも “ここだけ” に集約（下の `teasers` を編集していけばOK）。

type Provider = "youtube" | "vimeo" | "mp4";

export type Teaser = {
  day: number;   // larger = newer
  title: string; // 表示名
  url: string;   // /public パス or embed URL
  provider: Provider;
};

// ←-------------- ここだけ直していけば毎日運用できます --------------→
export const teasers: Teaser[] = [
  {
    day: 2,
    title: "DAY2",
    url: "/Katana_Video_Generation.mp4", // すでに public/ にある実ファイル
    provider: "mp4",
  },
  {
    day: 1,
    title: "DAY1",
    url: "https://www.youtube.com/embed/VIDEO_ID", // 昨日の実URLに差し替えてOK
    provider: "youtube",
  },
];
// ←------------------------------------------------------------------→

function Player({ url, provider }: { url: string; provider: Provider }) {
  if (provider === "mp4") {
    return (
      <video
        controls
        src={url}
        className="w-full max-w-5xl aspect-video rounded-2xl border"
        preload="metadata"
        playsInline
      />
    );
  }
  return (
    <iframe
      src={url}
      className="w-full max-w-5xl aspect-video rounded-2xl border"
      loading="lazy"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}

export default function ランディングトップ() {
  // 最新（dayの最大）を求める
  const latest = [...teasers].sort((a, b) => b.day - a.day)[0];

  return (
    <main className="min-h-dvh bg-black text-white">
      {/* ===== HERO ===== */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Re-Verse Civilization / SOLUNAケア・トークン
        </h1>

        <p className="mt-4 max-w-3xl leading-relaxed opacity-90">
          「優しさが制度になる」世界へ。Proof-of-Care™で貢献を可視化し、書籍・NFT・音楽・美術館・コミュニティを横断したケア資本主義の土台をつくります。
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {/* 要望：ボタンの文言を変更（一覧へ） */}
          <a
            href="/teaser"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-white text-black hover:opacity-90 transition"
          >
            ティーザーの一覧を見る
          </a>

          {/* 読者ページ（合言葉）など、必要なら差し替え */}
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border hover:opacity-90 transition"
          >
            読者の方はこちら（合言葉）
          </a>
        </div>
      </section>

      {/* ===== 3ボタン＋RADIO(準備中) ===== */}
      <section className="mx-auto max-w-6xl px-4 pb-6">
        <div className="grid md:grid-cols-3 gap-4">
          {/* 1 */}
          <div className="rounded-3xl border/30 border px-5 py-4">
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

          {/* 2 */}
          <div className="rounded-3xl border/30 border px-5 py-4">
            <h3 className="font-semibold mb-2">2. プロジェクトに参加する（繋がる）</h3>
            <div className="space-y-1 text-sm">
              <a className="underline opacity-90 hover:opacity-100" href="#" target="_bl_
