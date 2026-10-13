import { json, sniffImage, newId, ipKey, hourBucket, MAX_BYTES, LEVELS } from '../_lib/util.js';

// POST /api/submit  (public). Stores one artwork privately in Workers KV.
export async function onRequestPost({ request, env }) {
  if (!env.ART_KV) return json({ error: 'Art Review is not ready yet. Please try later.' }, 500);

  // Reject missing or oversized bodies before reading them into memory.
  const length = parseInt(request.headers.get('content-length') || '0', 10);
  if (!length) return json({ error: 'Invalid request.' }, 411);
  if (length > MAX_BYTES + 200 * 1024) return json({ error: 'The image is too large. Maximum size is 5 MB.' }, 413);

  let form;
  try { form = await request.formData(); } catch { return json({ error: 'Invalid request.' }, 400); }

  if (form.get('website')) return json({ ok: true }); // honeypot: bots fill this hidden field

  const name = String(form.get('name') || '').trim().slice(0, 60);
  const question = String(form.get('question') || '').trim();
  const level = String(form.get('level') || '');
  const consent = form.get('consent') === 'yes';
  const file = form.get('image');

  if (!question || question.length > 1000) return json({ error: 'Please write your question (up to 1000 characters).' }, 400);
  if (!LEVELS.includes(level)) return json({ error: 'Please choose your level.' }, 400);
  if (!consent) return json({ error: 'Please confirm the checkbox before sending.' }, 400);
  if (!file || typeof file === 'string' || typeof file.arrayBuffer !== 'function') return json({ error: 'Please choose an artwork image.' }, 400);
  if (file.size > MAX_BYTES) return json({ error: 'The image is too large. Maximum size is 5 MB.' }, 413);

  // Simple per-person limit: 5 artworks per hour.
  const limitKey = 'rl:sub:' + (await ipKey(request)) + ':' + hourBucket();
  const used = parseInt((await env.ART_KV.get(limitKey)) || '0', 10);
  if (used >= 5) return json({ error: 'You have sent a few artworks already. Please try again in an hour.' }, 429);

  const buffer = await file.arrayBuffer();
  if (buffer.byteLength > MAX_BYTES) return json({ error: 'The image is too large. Maximum size is 5 MB.' }, 413);
  const type = sniffImage(new Uint8Array(buffer.slice(0, 16)));
  if (!type) return json({ error: 'Please choose a PNG, JPG or WebP image.' }, 415);

  const id = newId();
  const record = {
    id, name, question, level, type,
    size: buffer.byteLength,
    createdAt: new Date().toISOString(),
    reviewed: false,
    note: ''
  };

  try {
    await env.ART_KV.put('img:' + id, buffer, { metadata: { type } });
    await env.ART_KV.put('sub:' + id, JSON.stringify(record));
    await env.ART_KV.put(limitKey, String(used + 1), { expirationTtl: 3600 });
  } catch {
    try { await env.ART_KV.delete('img:' + id); } catch {}
    return json({ error: 'Could not save your artwork. Please try again.' }, 500);
  }
  return json({ ok: true });
}
