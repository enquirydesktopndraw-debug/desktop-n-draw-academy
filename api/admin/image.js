import { json, requireAdmin, ID_PATTERN } from '../../_lib/util.js';

const ALLOWED = ['image/png', 'image/jpeg', 'image/webp'];

// GET /api/admin/image?id=...  (owner only). Returns the stored artwork.
export async function onRequestGet({ request, env }) {
  const denied = await requireAdmin(request, env);
  if (denied) return denied;
  const id = new URL(request.url).searchParams.get('id') || '';
  if (!ID_PATTERN.test(id)) return json({ error: 'Invalid id.' }, 400);
  const { value, metadata } = await env.ART_KV.getWithMetadata('img:' + id, { type: 'arrayBuffer' });
  if (!value) return json({ error: 'Not found.' }, 404);
  const type = metadata && ALLOWED.includes(metadata.type) ? metadata.type : 'application/octet-stream';
  return new Response(value, {
    headers: {
      'content-type': type,
      'cache-control': 'private, no-store',
      'x-content-type-options': 'nosniff',
      'content-security-policy': "default-src 'none'; sandbox"
    }
  });
}
