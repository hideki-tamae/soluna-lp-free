// コンポーネント/ランディングトップ.tsx
// ★このファイル1つを差し替えれば、動画埋め込み + Tallyリンク差し替えが完了します。

type Provider = "youtube" | "vimeo" | "mp4";

type Video = {
  day: number;   // 新しい数字ほど新しい日
  title: string; // 表示名
  url: string;   // 埋め込みURL or /public 配下の相対パス
  provider?: Provider;
};

// ---- ここだけ更新すれば毎日積み上がります ----
const videos: Video[] = [
  {
    day: 2,
    title: "DAY2",
    url: "/videos/Katana_Video_Generation.mp4", // ← ①でアップした実ファイル
    provider: "mp4",
  },
  {
    day: 1,
    title: "DAY1",
    // 昨日の動画。YouTubeなら /embed/ 形式を推奨
    url: "https://www.youtube.com/embed/VIDEO_ID",
    provider: "youtube",
  },
];
// ---- ここまで ----

function VideoEmbed({ v }: { v: Video }) {
  if (v.provider === "mp4") {
    return (
      <video
        controls
        src={v.url}
        className="w-full max-w-3xl aspect-video rounded-xl border"
        preload="metadata"
        playsInline
      />
    );
  }
  return (
    <iframe
      src={v.url}
      className="w-full max-w-3xl aspect-video rounded-xl border"
      loading="lazy"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}

export default function ランディングトップ() {
  return (
    <main className="min-h-dvh">
      {/* ===== 既存のヒーロー／説明ブロックがある場合は、このコメントの上に貼り戻してください ===== */}

      {/* CTA：β参加フォーム（共創の第一歩） → Tallyに差し替え済み */}
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

      {/* 動画の積み上げ表示（新しいDAYが上に来ます） */}
      <section className="mx-auto max-w-4xl px-4 py-10 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold">Daily Videos</h2>
        <div className="space-y-10">
          {videos
            .sort((a, b) => b.day - a.day)
            .map((v) => (
              <article key={v.day} className="space-y-3">
                <h3 className="text-xl font-semibold">
                  {v.title}（DAY{v.day}）
                </h3>
                <VideoEmbed v={v} />
              </article>
            ))}
        </div>
      </section>

      {/* ===== フッター等があればこの下に ===== */}
    </main>
  );
}
