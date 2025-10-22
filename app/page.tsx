import dynamic from "next/dynamic";

// ホームは必ず components/LandingTop.tsx を描画
const LandingTop = dynamic(() => import("@/components/LandingTop"), { ssr: false });

export default function Page() {
  return <LandingTop />;
}

