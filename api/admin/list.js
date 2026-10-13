import { json, requireAdmin } from '../../_lib/util.js';

// GET /api/admin/list?cursor=...  (owner only). Newest first, 20 at a time.
export async function onRequestGet({ request, env }) {
  const denied = await requireAdmin(request, env);
  if (denied) return denied;
  const cursor = new URL(request.url).searchParams.get('cursor') || undefined;
  const page = await env.ART_KV.list({ prefix: 'sub:', limit: 20, cursor });
  const items = (await Promise.all(page.keys.map(k => env.ART_KV.get(k.name, 'json')))).filter(Boolean);
  return json({ items, cursor: page.list_complete ? null : page.cursor });
}
