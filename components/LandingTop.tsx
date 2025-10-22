// components/ランディングトップ.tsx
// 動画: public/Katana_Video_Generation.mp4 を再生。Tallyリンク済み。

type Provider = "youtube" | "vimeo" | "mp4";

type Video = {
  day: number;   // larger = newer
  title: string; // display label
  url: string;   // embed URL or /public path
  provider?: Provider;
};

const videos: Video[] = [
  {
    day: 2,
    title: "DAY2",
    url: "/Katana_Video_Generation.mp4", // ← 今アップした実パスに合わせた
    provider: "mp4",
  },
  {
    day: 1,
    title: "DAY1",
    url: "https://www.youtube.com/embed/VIDEO_ID", //（任意）昨日の実URLに差し替えてOK
    provider: "youtube",
  },
];

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
      {/* CTA: β参加フォーム（共創の第一歩） → Tally */}
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

      {/* Videos (newest on top) */}
      <section className="mx-auto max-w-4xl px-4 py-10 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold">Daily Videos</h2>
        <div className="space-y-10">
          {videos
            .sort((a, b) => b.day - a.day)
            .map((v) => (
              <article key={v.day} className="space-y-3">
                <h3 className="text-xl font-semibold">
                  {v.title} (DAY{v.day})
                </h3>
                <VideoEmbed v={v} />
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
