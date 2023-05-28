import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const page = request.nextUrl.searchParams.get("page");
  if (tag) revalidateTag(tag);
  if (page) revalidatePath(page);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
