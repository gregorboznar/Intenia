"use client"

import { useState, useEffect } from "react"
import { useLocale } from "next-intl"

interface WPImage {
  ID: string
  guid: string
  post_title: string
  post_excerpt: string
  post_content: string
  post_mime_type: string
  [key: string]: any
}

interface WPData {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  slug?: string
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string
    }>
  }
  acf?: any
  order?: number | string
  heading?: string
  description?: string
  products_title?: string
  short_description?: string
  short_text?: string
  image?: WPImage
  [key: string]: any
}
//test
export function useWPData(endpoint: string) {
  const selectedLanguage = useLocale()
  const [data, setData] = useState<WPData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const url = `/api/wp/${endpoint}?lang=${selectedLanguage}`

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [endpoint, selectedLanguage])

  return { data, loading, error }
}
