import { NextRequest, NextResponse } from 'next/server';
import { fetchWP } from '@/lib/wp-ssr';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ endpoint: string[] }> }
) {
  try {
    const { endpoint } = await params;
    const endpointPath = endpoint.join('/');
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'sl';

    const data = await fetchWP(endpointPath, { locale: lang });

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=3600',
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
