// app/teaser/page.tsx
import { teasers, Teaser } from "@/components/LandingTop";

function Card({ t }: { t: Teaser }) {
  if (t.provider === "mp4") {
    return (
      <video
        controls
        src={t.url}
        className="w-full aspect-video rounded-xl border"
        preload="metadata"
        playsInline
      />
    );
  }
  return (
    <iframe
      src={t.url}
      className="w-full aspect-video rounded-xl border"
      loading="lazy"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}

export default function Page() {
  const list = [...teasers].sort((a, b) => b.day - a.day);
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">ティーザーの一覧</h1>
        <a href="/" className="text-sm underline opacity-80 hover:opacity-100">← ホームに戻る</a>
      </div>

      <div className="mt-8 grid gap-10">
        {list.map((t) => (
          <article key={t.day} className="space-y-3">
            <h2 className="text-xl font-semibold">{t.title}（DAY{t.day}）</h2>
            <Card t={t} />
          </article>
        ))}
      </div>
    </main>
  );
}
