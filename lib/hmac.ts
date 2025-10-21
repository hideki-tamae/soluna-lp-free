// lib/hmac.ts
// Edge/Node 両対応の HS256 署名／検証（Base64URLユーティリティ込み）

const te = new TextEncoder();

// ===== Base64URL helpers =====
function toB64Url(u8: Uint8Array): string {
  let b64: string;
  if (typeof Buffer !== 'undefined') {
    b64 = Buffer.from(u8).toString('base64');
  } else {
    // Browser/Edge 環境
    let bin = '';
    for (let i = 0; i < u8.length; i++) bin += String.fromCharCode(u8[i]);
    b64 = btoa(bin);
  }
  return b64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function fromB64Url(b64url: string): Uint8Array {
  const b64 = b64url.replace(/-/g, '+').replace(/_/g, '/');
  const pad = '='.repeat((4 - (b64.length % 4)) % 4);
  const b64p = b64 + pad;
  if (typeof Buffer !== 'undefined') {
    return new Uint8Array(Buffer.from(b64p, 'base64'));
  } else {
    const bin = atob(b64p);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
}

// ===== HMAC (SHA-256) =====
async function hmacSHA256(secret: string, data: string): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey(
    'raw',
    te.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, te.encode(data));
  return new Uint8Array(sig);
}

// ===== Sign / Verify =====
export async function signToken(payload: Record<string, any>, secret: string): Promise<string> {
  const header = { alg: 'HS256', typ: 'JWT' };
  const h = toB64Url(te.encode(JSON.stringify(header)));
  const p = toB64Url(te.encode(JSON.stringify(payload)));
  const data = `${h}.${p}`;
  const sig = await hmacSHA256(secret, data);
  return `${data}.${toB64Url(sig)}`;
}

export async function verifyToken(token: string, secret: string): Promise<boolean> {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return false;

    const [h, p, s] = parts;
    const data = `${h}.${p}`;

    const expected = await hmacSHA256(secret, data); // Uint8Array
    const actual = fromB64Url(s);

    if (expected.length !== actual.length) return false;

    // 安全な比較（型エラーの原因だった &= を廃止）
    let ok = true;
    for (let i = 0; i < expected.length; i++) {
      if (expected[i] !== actual[i]) { ok = false; break; }
    }
    if (!ok) return false;

    const payloadBytes = fromB64Url(p);
    const payload = JSON.parse(new TextDecoder().decode(payloadBytes));
    if (payload.exp && Math.floor(Date.now() / 1000) > payload.exp) return false;

    return true;
  } catch {
    return false;
  }
}
