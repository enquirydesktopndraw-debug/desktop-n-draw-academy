import { json, requireAdmin, ID_PATTERN } from '../../_lib/util.js';

// POST /api/admin/delete  {id}  (owner only). Removes the artwork and its record.
export async function onRequestPost({ request, env }) {
  const denied = await requireAdmin(request, env);
  if (denied) return denied;
  let body;
  try { body = await request.json(); } catch { return json({ error: 'Invalid request.' }, 400); }
  const id = String(body.id || '');
  if (!ID_PATTERN.test(id)) return json({ error: 'Invalid id.' }, 400);
  await env.ART_KV.delete('img:' + id);
  await env.ART_KV.delete('sub:' + id);
  return json({ ok: true });
}
