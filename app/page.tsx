import dynamic from "next/dynamic";
const LandingTop = dynamic(() => import("@/components/LandingTop"), { ssr: false });
export default function Page(){ return <LandingTop />; }
