import { NextResponse } from "next/server";
import { getAllBlogPostsMeta } from "@/lib/content";

/** GET /api/content/blog — JSON list for mobile apps, scripts, or a future admin UI. */
export async function GET() {
  const posts = await getAllBlogPostsMeta();
  return NextResponse.json({ posts });
}
