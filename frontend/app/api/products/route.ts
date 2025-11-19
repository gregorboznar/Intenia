import { NextResponse } from 'next/server';
import https from 'https';

export const dynamic = 'force-dynamic';

function fetchWithHttps(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const options = {
      rejectUnauthorized: process.env.NODE_ENV === 'production',
    };

    https.get(url, options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            resolve(JSON.parse(data));
          } else {
            reject(new Error(`HTTP error! status: ${res.statusCode}`));
          }
        } catch (error) {
          reject(new Error('Failed to parse JSON response'));
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

export async function GET() {
  try {
    const data = await fetchWithHttps(
      "https://intenia-engineering.si/wp-json/wp/v2/industrial-products"
    );
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

