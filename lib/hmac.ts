// lib/hmac.ts
// Edge/Node 両対応の HS256 署名／検証（Base64URLユーティリティ込み）

const te = new TextEncoder();

// ===== Base64URL helpers =====
function b64urlFromBytes(bytes: Uint8Array): string {
  // 1) bytes -> binary string
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  // 2) binary string -> base64 (Edge: btoa / Node: Buffer)
  const b64 =
    typeof btoa === "function"
      ? btoa(bin)
      : Buffer.from(bin, "binary").toString("base64");
  // 3) base64 -> base64url
  return b64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function b64urlFromJSON(obj: any): string {
  return b64urlFromBytes(te.encode(JSON.stringify(obj)));
}

function b64urlToBytes(b64url: string): Uint8Array {
  const b64 = b64url.replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - (b64.length % 4)) % 4);
  const b64p = b64 + padding;
  if (typeof atob === "function") {
    const bin = atob(b64p);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  } else {
    return new Uint8Array(Buffer.from(b64p, "base64"));
  }
}

function bytesToString(u8: Uint8Array): string {
  let s = "";
  for (let i = 0; i < u8.length; i++) s += String.fromCharCode(u8[i]);
  return s;
}

// ===== HMAC (SHA-256) =====
async function hmac(key: string, data: string) {
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    te.encode(key),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
  const sig = await crypto.subtle.sign("HMAC", cryptoKey, te.encode(data));
  return new Uint8Array(sig);
}

// ===== Sign / Verify =====
export async function signToken(
  payload: Record<string, any>,
  secret: string
) {
