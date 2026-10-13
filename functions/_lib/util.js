// Shared helpers for the Art Review functions.
export const MAX_BYTES = 5 * 1024 * 1024; // 5 MB per artwork
export const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];
export const ID_PATTERN = /^\d{13}-[0-9a-f]{12}$/;

export function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff'
    }
  });
}

// Detect the real image type from the first bytes. Never trust the browser's file type.
export function sniffImage(bytes) {
  if (!bytes || bytes.length < 12) return null;
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) return 'image/png';
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return 'image/jpeg';
  if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 &&
      bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50) return 'image/webp';
  return null;
}

export async function sha256(text) {
  const data = new TextEncoder().encode(text);
  return new Uint8Array(await crypto.subtle.digest('SHA-256', data));
}

export function toHex(bytes) {
  return [...bytes].map(b => b.toString(16).padStart(2, '0')).join('');
}

// Constant-time comparison of two strings (compares SHA-256 digests).
export async function safeEqual(a, b) {
  const [x, y] = await Promise.all([sha256(a), sha256(b)]);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

export function newId() {
  // Newest submissions sort first when KV lists keys in ascending order.
  const reverse = String(9999999999999 - Date.now()).padStart(13, '0');
  const rand = toHex(crypto.getRandomValues(new Uint8Array(6)));
  return reverse + '-' + rand;
}

export async function ipKey(request) {
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  return toHex((await sha256(ip)).slice(0, 8));
}

export function hourBucket() {
  return new Date().toISOString().slice(0, 13); // e.g. 2026-10-12T09
}

// Returns a Response if the request is NOT allowed, or null if the admin password is correct.
export async function requireAdmin(request, env) {
  if (!env.ART_KV) return json({ error: 'Storage is not connected yet.' }, 500);
  if (!env.ADMIN_PASSWORD) return json({ error: 'Admin password is not set yet.' }, 500);
  const key = 'rl:admin:' + (await ipKey(request)) + ':' + hourBucket();
  const tries = parseInt((await env.ART_KV.get(key)) || '0', 10);
  if (tries >= 10) return json({ error: 'Too many wrong attempts. Try again in an hour.' }, 429);
  const header = request.headers.get('Authorization') || '';
  const password = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (!(await safeEqual(password, env.ADMIN_PASSWORD))) {
    await env.ART_KV.put(key, String(tries + 1), { expirationTtl: 3600 });
    return json({ error: 'Wrong password.' }, 401);
  }
  return null;
}
