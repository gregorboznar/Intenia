import { getRequestConfig, type RequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

const locales = ['sl', 'en', 'fr']

export default getRequestConfig(async ({ locale }): Promise<RequestConfig> => {
  if (!locales.includes(locale as any)) notFound()

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  }
})