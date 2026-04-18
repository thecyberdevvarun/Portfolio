import { NextResponse } from "next/server";
import { getAllWritingsMeta } from "@/lib/content";

/** GET /api/content/writings — JSON list for clients or automation. */
export async function GET() {
  const writings = await getAllWritingsMeta();
  return NextResponse.json({ writings });
}
