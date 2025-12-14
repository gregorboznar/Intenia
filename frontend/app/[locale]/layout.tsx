import type { Metadata } from "next"
import { Rajdhani } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import ModernHeader from "@/components/header"
import ModernFooter from "@/components/footer"
import CookieNotification from "@/components/cookie-notification"

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Intenia Engineering",
    template: "%s | Intenia Engineering",
  },
  description: "Inženirska odličnost - Inovativnost in kakovost. Intenia Engineering ponuja strokovne inženirske storitve in rešitve.",
  keywords: ["Intenia Engineering", "inženirstvo", "engineering", "Slovenija", "strokovne storitve"],
  authors: [{ name: "Intenia Engineering" }],
  creator: "Intenia Engineering",
  publisher: "Intenia Engineering",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/icons/favicon.svg", type: "image/svg+xml" },
      { url: "/images/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/images/icons/favicon.ico", sizes: "any" },
    ],
    shortcut: "/images/icons/favicon.svg",
    apple: "/images/icons/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  generator: "Intenia Engineering",
  metadataBase: new URL("https://www.intenia-engineering.si"),
  openGraph: {
    title: "Intenia Engineering",
    description: "Inženirska odličnost - Inovativnost in kakovost. Intenia Engineering ponuja strokovne inženirske storitve in rešitve.",
    url: "https://www.intenia-engineering.si",
    siteName: "Intenia Engineering",
    images: [
      {
        url: "/temp.png",
        width: 1200,
        height: 630,
        alt: "Intenia Engineering",
      },
    ],
    locale: "sl_SI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intenia Engineering",
    description: "Inženirska odličnost - Inovativnost in kakovost",
    images: ["/temp.png"],
  },
}

export default async function RootLayout(props: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const params = await props.params;

  const {
    locale
  } = params;

  const {
    children
  } = props;

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://wp.intenia-engineering.si" />
        <link rel="dns-prefetch" href="https://wp.intenia-engineering.si" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${rajdhani.className} bg-black text-white`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <ModernHeader />
            <main>{children}</main>
            <ModernFooter />
            <CookieNotification />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}