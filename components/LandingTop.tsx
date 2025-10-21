'use client';
import Link from "next/link";

export default function LandingTop(){
  const isOpen = process.env.NEXT_PUBLIC_CLAIM_OPEN === '1';
  return (
    <main>
      <header className="border-b border-neutral-800">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold">ACEs Care HUB JAPAN</Link>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/#doors" className="hover:opacity-80">参画の扉</Link>
            <Link href="/claim" className="hover:opacity-80">読了者解錠</Link>
          </nav>
        </div>
      </header>

      <section className="container py-12 md:py-16">
        <p className="uppercase tracking-widest text-xs text-neutral-400">Re-Verse Network</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold leading-tight">
          Re-Verse Civilization / <span className="whitespace-nowrap">SOLUNAケア・トークン</span>
        </h1>
        <p className="mt-3 text-sm inline-flex items-center gap-2 rounded-full border border-neutral-800 px-3 py-1 bg-neutral-900/60">
          <span className="h-2 w-2 rounded-full bg-emerald-400" /> ティザー公開中（Claim {isOpen?'OPEN':'CLOSED'}）
        </p>
        <p className="mt-4 text-neutral-300 md:text-lg max-w-2xl">
          「優しさが制度になる」世界へ。Proof-of-Care™で貢献を可視化し、書籍・NFT・音楽・美術館・コミュニティを横断したケア資本主義の土台をつくります。
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="#teaser" className="btn bg-neutral-800">最新ティーザーを見る</a>
          <Link href="/claim" className="btn">読了者の方はこちら（合言葉）</Link>
        </div>
      </section>

      <section id="doors" className="border-t border-neutral-800 bg-neutral-950/60">
        <div className="container py-12 grid md:grid-cols-3 gap-6">
          <a href="https://www.notion.so/28e6197f1e5580aeba43e81de422ca9d" target="_blank" className="card hover:bg-neutral-900">
            <h3 className="font-semibold">1. 世界観に触れる（聴く・観る）</h3>
            <p className="mt-2 text-sm text-neutral-300">音楽（世界185カ国以上で配信中）</p>
            <p className="text-sm text-neutral-300">メタバース美術館（Healing Ukiyo-e 3D）</p>
          </a>
          <a href="https://www.notion.so/28e6197f1e5580aeba43e81de422ca9d" target="_blank" className="card hover:bg-neutral-900">
            <h3 className="font-semibold">2. プロジェクトに参加する（繋がる）</h3>
            <p className="mt-2 text-sm text-neutral-300">プロジェクト情報（ACEs Care HUB JAPANの活動）</p>
            <p className="text-sm text-neutral-300">β参加フォーム（共創の第一歩）</p>
          </a>
          <a href="https://www.notion.so/28e6197f1e5580aeba43e81de422ca9d" target="_blank" className="card hover:bg-neutral-900">
            <h3 className="font-semibold">3. オープンな議論の場</h3>
            <p className="mt-2 text-sm text-neutral-300">Web3公民館で共同議論に参加</p>
            <p className="text-sm text-neutral-300">月次レポート（構築中・随時更新）</p>
          </a>
        </div>
      </section>

      <section id="teaser" className="border-t border-neutral-800">
        <div className="container py-12">
          <h2 className="text-2xl md:text-3xl font-semibold">ティーザー動画（Day1）</h2>
          <div className="mt-4 aspect-video w-full rounded-2xl overflow-hidden border border-neutral-800 bg-black">
            <video controls playsInline preload="metadata" className="w-full h-full">
              <source src="/teasers/day1.mp4" type="video/mp4" />
              お使いのブラウザは動画再生に対応していません。
            </video>
          </div>
          <p className="text-xs text-neutral-500 mt-2">※ Facebookにも同じ動画を投稿し、CTAでこのページに誘導してください。</p>
        </div>
      </section>

      <footer className="border-t border-neutral-800">
        <div className="container py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© 2025 ACEs Care HUB JAPAN / Re-Verse Network</p>
          <div className="flex gap-4">
            <a href="https://tally.so/r/wM9JVY" className="hover:opacity-80">β参加フォーム</a>
            <a href="#" className="hover:opacity-80">特定商取引法</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
