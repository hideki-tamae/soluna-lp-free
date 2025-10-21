import { NextRequest, NextResponse } from 'next/server';
import { signToken } from '@/lib/hmac';
export const runtime = 'edge';

export async function POST(req: NextRequest){
  try{
    if(process.env.CLAIM_OPEN !== '1'){
      return NextResponse.json({ message:'Claim not open yet.' }, { status: 403 });
    }
    const body = await req.json();
    const soluna = (body?.soluna || '').trim();
    const phrase = (body?.phrase || '').trim();
    const turnstile = (body?.turnstile || '').trim();

    const expected = process.env.NEXT_PUBLIC_SOLUNA_LITERAL || 'SOLUNA';
    const pass = process.env.CLAIM_PASSPHRASE;
    const secret = process.env.SIGNING_SECRET;
    if(!pass || !secret) return NextResponse.json({ message:'Server not configured.'},{ status:500 });

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if(siteKey && secretKey){
      if(!turnstile) return NextResponse.json({ message:'Bot verification failed.' }, { status:400 });
      const fd = new FormData(); fd.append('secret', secretKey); fd.append('response', turnstile);
      const v = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{ method:'POST', body: fd });
      const out = await v.json(); if(!out.success) return NextResponse.json({ message:'Bot verification failed.' }, { status:400 });
    }

    if(soluna !== expected) return NextResponse.json({ message:'SOLUNAが正しくありません。'},{ status:400 });
    if(phrase !== pass) return NextResponse.json({ message:'合言葉が一致しません。'},{ status:400 });

    const exp = Math.floor(Date.now()/1000) + 5*60;
    const token = await signToken({ sub:'reader', exp }, secret);
    const url = new URL(req.url);
    const redirect = url.origin + '/thanks?k=' + encodeURIComponent(token);
    return NextResponse.json({ redirect });
  }catch(e:any){
    return NextResponse.json({ message:'Bad request' }, { status:400 });
  }
}
