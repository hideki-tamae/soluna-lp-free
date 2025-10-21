'use client';
import Link from "next/link";
import Image from "next/image";

export default function LandingTop() {
  const isOpen = process.env.NEXT_PUBLIC_CLAIM_OPEN === '1';
  return (
    <main>
      <header className="border-b border-neutral-800">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image
              src="/brand/acescare-logo.png"
              alt="ACEs Care HUB JAPAN ロゴ"
              width={28}
              height={28}
              className="rounded-full ring-1 ring-white/10"
              sizes="28px"
            />
            <span>ACEs Care HUB JAPAN</span>
          </Link>
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
          <span className="h-2 w-2 rounded-full bg-emerald-400" /> ティザー公開中（Claim {isOpen ? 'OPEN' : 'CLOSED'}）
        </p>
        <p className="mt-4 text-neutral-300 md:text-lg max-w-2xl">
          「優しさが制度になる」世界へ。Proof-of-Care™で貢献を可視化し、書籍・NFT・音楽・美術館・コミュニティを横断したケア資本主義の土台をつくります。
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="#teaser" className="btn bg-neutral-800">最新ティーザーを見る</a>
          <Link href="/claim" className="btn">読了者の方はこちら（合言葉）</Link>
        </div>
      </section>

      {/* 三角の扉 */}
      <section id="doors" className="border-t border-neutral-800 bg-neutral-950/60">
        <div className="container py-12 grid md:grid-cols-3 gap-6">
          {/* 1. 世界観に触れる（聴く・観る） */}
          <div className="card hover:bg-neutral-900">
            <h3 className="font-semibold">1. 世界観に触れる（聴く・観る）</h3>
            <p className="mt-2 text-sm">
              <a
                href="https://acescare.fanlink.tv/hidekitamae?fbclid=IwY2xjawNkTeNleHRuA2FlbQIxMABicmlkETE5SkQzWFFsSlY3cmJBT2JtAR73MgN_hSIXD7PvmR1Qz2tpxtE0ZUadVyxkgq93BEa0dZYyabf3YiDsXlWUDA_aem_3r5exxMZTxS5yaU75trtrA"
                target="_blank"
                rel="noreferrer"
                className="underline hover:opacity-80"
              >
                音楽（世界185カ国以上で配信中）
              </a>
            </p>
            <p className="text-sm">
              <a
                href="https://oncyber.io/spaces/0DCUetEBicRPi0fem1WM?coords=-2.07x2.85x5.14x1.58"
                target="_blank"
                rel="noreferrer"
                className="underline hover:opacity-80"
              >
                メタバース美術館（Healing Ukiyo-e 3D）
              </a>
            </p>
          </div>

          {/* 2. プロジェクトに参加する（繋がる） */}
          <div className="card hover:bg-neutral-900">
            <h3 className="font-semibold">2. プロジェクトに参加する（繋がる）</h3>
            <p className="mt-2 text-sm">
              <a
                href="https://aces-care-hub-site-ru8w.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="underline hover:opacity-80"
              >
                プロジェクト情報（ACEs Care HUB JAPANの活動）
              </a>
            </p>
            <p className="text-sm text-neutral-300">
              β参加フォーム（共創の第一歩）
            </p>
          </div>

          {/* 3. オープンな議論の場 */}
          <div className="card hover:bg-neutral-900">
            <h3 className="font-semibold">3. オープンな議論の場</h3>
            <p className="mt-2 text-sm">
              <a
                href="https://discord.gg/PBwPNBfE"
                target="_blank"
                rel="noreferrer"
                className="underline hover:opacity-80"
              >
                Web3公民館で共同議論に参加
              </a>
            </p>
            <p className="text-sm text-neutral-300">月次レポート（構築中・随時更新）</p>
          </div>
        </div>
      </section>

      {/* ティーザー（Day1） */}
      <section id="teaser" className="border-t border-neutral-800">
        <div className="container py-12">
          <h2 className="text-2xl md:text-3xl font-semibold">ティーザー動画（Day1）</h2>
          <div className="mt-4 aspect-video w-full rounded-2xl overflow-hidden border border-neutral-800 bg-black">
            <video controls playsInline preload="metadata" className="w-full h-full">
              <source src="/teasers/day1.mp4" type="video/mp4" />
              お使いのブラウザは動画再生に対応していません。
            </video>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-800">
        <div className="container py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© 2025 ACEs Care HUB JAPAN / Re-Verse Network</p>
          <div className="flex gap-4">
            <a href="https://tally.so/r/wM9JVY" className="hover:opacity-80">β参加フォーム</a>
            <a
              href="https://aces-care-hub-site-ru8w.vercel.app/legal/tokushoho"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80"
            >
              特定商取引法
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

