import { json, requireAdmin, ID_PATTERN } from '../../_lib/util.js';

// POST /api/admin/update  {id, note, reviewed}  (owner only)
export async function onRequestPost({ request, env }) {
  const denied = await requireAdmin(request, env);
  if (denied) return denied;
  let body;
  try { body = await request.json(); } catch { return json({ error: 'Invalid request.' }, 400); }
  const id = String(body.id || '');
  if (!ID_PATTERN.test(id)) return json({ error: 'Invalid id.' }, 400);
  const record = await env.ART_KV.get('sub:' + id, 'json');
  if (!record) return json({ error: 'Not found.' }, 404);
  if (typeof body.note === 'string') record.note = body.note.slice(0, 2000);
  if (typeof body.reviewed === 'boolean') record.reviewed = body.reviewed;
  await env.ART_KV.put('sub:' + id, JSON.stringify(record));
  return json({ ok: true, item: record });
}
