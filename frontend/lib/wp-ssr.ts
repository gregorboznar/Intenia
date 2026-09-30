export const revalidate = 3600

// Every WordPress fetch is tagged with WP_TAG so a single revalidateTag(WP_TAG)
// from the WordPress save hook refreshes all pages at once.
export const WP_TAG = "wp"

const WP_API_URL =
  process.env.NEXT_PUBLIC_WP_URL || `${process.env.WP_DOMAIN}/wp-json/wp/v2`

interface WPDataOptions {
  locale?: string
  revalidate?: number
}

export async function fetchWP(endpoint: string, options: WPDataOptions = {}): Promise<any> {
  const params = new URLSearchParams({ _embed: "", per_page: "100" })
  if (options.locale) params.set("lang", options.locale)

  const response = await fetch(`${WP_API_URL}/${endpoint}?${params}`, {
    next: {
      revalidate: options.revalidate || revalidate,
      tags: [WP_TAG, endpoint, ...(options.locale ? [`locale:${options.locale}`] : [])],
    },
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; Next.js Server; +https://nextjs.org/)",
    },
  })

  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status}`)
  }

  return response.json()
}

export async function getWPData(
  endpoint: string,
  options: WPDataOptions
): Promise<any[]> {
  try {
    const data = await fetchWP(endpoint, options)
    return Array.isArray(data) ? data : []
  } catch (error) {
    return []
  }
}

export async function getWPSection(
  endpoint: string,
  options: WPDataOptions
): Promise<any | null> {
  const data = await getWPData(endpoint, options)
  return data?.[0] || null
}
