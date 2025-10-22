// app/page.tsx
import dynamic from "next/dynamic";

// ホームで使うトップ本体（components/LandingTop.tsx）を読み込む
const LandingTop = dynamic(() => import("@/components/LandingTop"), { ssr: false });

export default function Page() {
  return <LandingTop />;
}
