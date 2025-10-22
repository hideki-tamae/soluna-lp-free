// app/page.tsx
import React from "react";

type Video = {
  day: number;         // 2, 1 ...
  title: string;       // 表示用タイトル
  url: string;         // YouTube/Vimeo/MP4 いずれもOK
  provider?: "youtube" | "vimeo" | "mp4";
};

const videos: Video[] = [
  {
    day: 2,
    title: "DAY2",
    url: "Katana_Video_Generation.mp4", // ← 今日の動画URLを貼る
    provider: "youtube",         // youtube / vimeo / mp4 のいずれか
  },
  {
    day: 1,
    title: "DAY1",
    url: "Cinematic_Sunrise_Video_Generation.mp4", // ← すでに埋め込んだDAY1のURL
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
        playsInline
      />
    );
  }

  // YouTube/Vimeo用のiframe埋め込み
  // YouTube: https://www.youtube.com/watch?v=XXXX → https://www.youtube.com/embed/XXXX にしてもOK（そのままでも多くの場合再生されます）
  return (
    <iframe
      src={v.url.includes("embed") ? v.url : v.url}
      className="w-full max-w-3xl aspect-video rounded-xl border"
      loading="lazy"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}

export default function Page() {
  return (
    <main className="px-4 py-10">
      {/* 既存のヒーローや説明ブロックの下あたりに差し込む */}
      <section className="mx-auto max-w-4xl space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold">Daily Videos</h2>

        <div className="space-y-10">
          {videos
            .sort((a, b) => b.day - a.day) // dayの降順で積み上げ（DAY2→DAY1）
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
    </main>
  );
}
