"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { X } from "lucide-react"
import Link from "next/link"

export default function CookieNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslations("cookies")

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-md animate-in slide-in-from-bottom-5 duration-500">
      <div className="relative bg-neutral-950/0 transition-colors duration-500 delay-600 p-5 min-w-[260px] text-base backdrop-blur-sm bg-neutral-950/70 border border-blue-500/30 rounded-lg p-6 shadow-2xl ">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-white">
            {t("notificationTitle")}
          </h3>
          <button
            onClick={handleAccept}
            className="text-white/70 hover:text-white transition-colors"
            aria-label={t("closeNotification")}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-white/80 text-sm leading-relaxed">
          {t.rich("notificationText", {
            link1: (chunks) => (
              <Link
                href="/cookies"
                className="text-blue-300 hover:text-blue-200 underline underline-offset-2 transition-colors"
              >
                {chunks}
              </Link>
            ),
            link2: (chunks) => (
              <Link
                href="/cookies"
                className="text-blue-300 hover:text-blue-200 underline underline-offset-2 transition-colors"
              >
                {chunks}
              </Link>
            ),
          })}
        </p>
      </div>
    </div>
  )
}
