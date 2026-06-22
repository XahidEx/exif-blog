import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const debugKey = req.headers.get('x-debug-key');

  if (debugKey !== process.env.TEMP_DEBUG_SECRET) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.json({
    value: process.env.GOOGLE_PLACES_API_KEY ?? null,
  });
}
