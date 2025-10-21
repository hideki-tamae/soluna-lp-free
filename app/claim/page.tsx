'use client';
import { useEffect, useState } from 'react';

export default function ClaimPage(){
  const [soluna,setSoluna]=useState(''); 
  const [phrase,setPhrase]=useState('');
  const [turnstile,setTurnstile]=useState<string|null>(null);
  const [error,setError]=useState<string|null>(null); 
  const [loading,setLoading]=useState(false);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const isOpen = process.env.NEXT_PUBLIC_CLAIM_OPEN === '1';

  useEffect(()=>{ 
    if(siteKey){ 
      const s=document.createElement('script'); 
      s.src='https://challenges.cloudflare.com/turnstile/v0/api.js'; 
      s.async=true; 
      document.head.appendChild(s);
    }
  },[siteKey]);

  async function onSubmit(e:React.FormEvent){
    e.preventDefault(); setError(null); setLoading(true);
    try{
      const res = await fetch('/api/claim',{ method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({soluna,phrase,turnstile}) });
      const data = await res.json();
      if(!res.ok) throw new Error(data?.message || '申請に失敗しました');
      window.location.href = data.redirect;
    }catch(err:any){ setError(err.message) } finally{ setLoading(false) }
  }

  if(!isOpen){
    return (
      <main className="container py-12 space-y-6">
        <h1 className="text-3xl font-semibold">SOLUNA 受け取り（準備中）</h1>
        <p className="text-neutral-400">KDPの公開と同時に解放します。公開期間：<b>2025年10〜11月</b>（JST）。</p>
        <a href="/" className="btn">トップに戻る</a>
      </main>
    )
  }

  return (
    <main className="container py-12 space-y-6">
      <h1 className="text-3xl font-semibold">SOLUNA 受け取り（合言葉ゲート）</h1>
      <p className="text-neutral-400">本の最後の“合言葉”と <code className="px-1 rounded bg-neutral-800">SOLUNA</code> を入力してください。</p>
      <form onSubmit={onSubmit} className="card space-y-4 max-w-xl">
        <div><label className="label">SOLUNA（半角大文字）</label><input className="input" value={soluna} onChange={e=>setSoluna(e.target.value)} placeholder="SOLUNA" required/></div>
        <div><label className="label">合言葉（書籍巻末）</label><input className="input" value={phrase} onChange={e=>setPhrase(e.target.value)} placeholder="合言葉を入力" required/></div>
        {siteKey && (<div className="space-y-2"><div className="cf-turnstile" data-sitekey={siteKey} data-callback={(t:string)=>setTurnstile(t)}></div><p className="text-xs text-neutral-500">Bot対策：Cloudflare Turnstile</p></div>)}
        {error && <p className="text-red-400">{error}</p>}
        <button className="btn w-full" disabled={loading}>{loading?'検証中…':'解錠する'}</button>
      </form>
    </main>
  )
}
