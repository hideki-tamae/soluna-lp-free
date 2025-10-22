// app/teaser/page.tsx
// ティーザーの一覧ページ：ヘッダー/ヒーロー/3カードを簡易再掲し、下にアーカイブを縦並び。
// ここもフッターは layout.tsx 側のものが出ます。

type Item = {
  day: number;
  title: string;
  url: string;
  provider: "mp4" | "youtube" | "vimeo";
};

const list: Item[] = [
  { day: 2, title: "DAY2", url: "/Katana_Video_Generation.mp4", provider: "mp4" },
  // ← 昨日の実URLに差し替えてOK（/embed/ 推奨）
  { day: 1, title: "DAY1", url: "https://www.youtube.com/embed/VIDEO_ID", provider: "youtube" },
];

function Player({ i }: { i: Item }) {
  if (i.provider === "mp4") {
    return (
      <video
        controls
        src={i.url}
        className="w-full aspect-video rounded-xl border"
        preload="metadata"
        playsInline
      />
    );
  }
  return (
    <iframe
      src={i.url}
      className="w-full aspect-video rounded-xl border"
      loading="lazy"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}

export default function Page() {
  const sorted = [...list].sort((a, b) => b.day - a.day);
  return (
    <main className="min-h-dvh bg-black text-white">
      {/* 上部にヒーロー＋戻る導線 */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold">ティーザーの一覧</h1>
          <a href="/" className="text-sm underline opacity-80 hover:opacity-100">← TOPに戻る</a>
        </div>
        <p className="mt-3 max-w-3xl leading-relaxed opacity-85">
          最新ティーザーはホームに表示。ここでは過去のアーカイブと最新分をまとめて見られます。
        </p>
      </section>

      {/* ホームと同じ3カード（簡易版） */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="rounded-3xl border/30 border px-6 py-5">
            <h3 className="font-semibold mb-2">1. 世界観に触れる（聴く・観る）</h3>
            <a className="underline opacity-90 hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
              音楽（世界185カ国以上で配信中）
            </a>
            <br />
            <a className="underline opacity-90 hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
              メタバース美術館（Healing Ukiyo-e 3D）
            </a>
          </div>

          <div className="rounded-3xl border/30 border px-6 py-5">
            <h3 className="font-semibold mb-2">2. プロジェクトに参加する（繋がる）</h3>
            <a className="underline opacity-90 hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
              プロジェクト情報（ACEs Care HUB JAPANの活動）
            </a>
            <br />
            <a
              className="underline opacity-90 hover:opacity-100"
              href="https://tally.so/r/wM9JVY"
              target="_blank"
              rel="noopener noreferrer"
            >
              β参加フォーム（共創の第一歩）
            </a>
          </div>

          <div className="rounded-3xl border/30 border px-6 py-5">
            <h3 className="font-semibold mb-2">3. オープンな議論の場</h3>
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
              リバース・ラジオ（Spotify・準備中）
            </a>
            <br />
            <a className="underline opacity-90 hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
              月次レポート（構築中・随時更新）
            </a>
          </div>
        </div>
      </section>

      {/* 一覧本体 */}
      <section className="mx-auto max-w-6xl px-4 py-10 grid gap-10">
        {sorted.map((i) => (
          <article key={i.day} className="space-y-3">
            <h2 className="text-xl font-semibold">{i.title}（Day{i.day}）</h2>
            <Player i={i} />
          </article>
        ))}
      </section>
    </main>
  );
}
