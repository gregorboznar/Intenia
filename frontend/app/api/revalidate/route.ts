import { NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";
import { WP_TAG } from "@/lib/wp-ssr";

export async function POST(req: Request) {
  const secret = req.headers.get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));

  const paths: string[] = Array.isArray(body.paths) ? body.paths : body.path ? [body.path] : [];
  const tags: string[] = Array.isArray(body.tags) ? body.tags : body.tag ? [body.tag] : [];

  // No target given: refresh all WordPress content
  if (paths.length === 0 && tags.length === 0) {
    tags.push(WP_TAG);
  }

  for (const p of paths) {
    revalidatePath(p, "page");
  }

  for (const t of tags) {
    // @ts-ignore - Next.js 16 requires 2 args, Next.js 15 requires 1. Vercel is on 15.
    revalidateTag(t);
  }

  return NextResponse.json({
    ok: true,
    revalidated: { paths, tags }
  });
}
