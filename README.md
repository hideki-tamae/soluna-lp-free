# SOLUNA LP — Free Pack (Next.js + Tailwind)

**今日の目的**：ティザートップ `/` を公開して、Facebookの8秒動画からLPに流し込む。  
解錠 `/claim` は KDP ライブと同時に **CLAIM_OPEN=1** に切替。

## 1) ローカル or Replit (任意)
```bash
npm i
npm run dev
```
- ティザー動画：`public/teasers/day1.mp4`（同梱済／差し替えOK）

## 2) Vercel デプロイ
GitHubにpush → Vercelで Import。**環境変数**を設定：
```
NEXT_PUBLIC_SOLUNA_LITERAL=SOLUNA
CLAIM_PASSPHRASE=（本の最後の合言葉）
SIGNING_SECRET=（64文字以上のランダム文字列）
NEXT_PUBLIC_CLAIM_OPEN=0
CLAIM_OPEN=0
# 任意
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_GA_ID=
```
- 今日：`NEXT_PUBLIC_CLAIM_OPEN=0` / `CLAIM_OPEN=0` で `/` だけ運用
- 発売時：両方を `1` に変更 → Redeploy → `/claim` 解放

## 3) ページ一覧
- `/` ティザー（動画埋め込み & 三角の扉）
- `/claim` 合言葉フォーム → `/api/claim`
- `/thanks` 解錠後ページ（DLボタン）
- `/api/bonus` 特典配布（`public/bonus/soluna_bonus.pdf` を置けばPDF配布）

## 4) 置換ポイント
- 三角の扉：Notionや音楽/美術館URLを本番に
- 特典：`public/bonus/soluna_bonus.pdf` を配置

## 5) 告知テンプレ
**ティザー公開（今日）**
> The engraving on the blade reads “SOLUNA.”\nWhat does it mean? The answer lies in the book.\nComing soon on Amazon Kindle — Oct 2025\n🔗 LP: https://<your>.vercel.app/

**発売＆解放（KDPライブ直後）**
> The book is live. Read → find the passphrase → unlock SOLUNA. No wallet required.\n🔓 Claim is OPEN → https://<your>.vercel.app/claim
