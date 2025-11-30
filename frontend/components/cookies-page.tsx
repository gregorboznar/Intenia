"use client"

import { useLanguage } from "@/context/LanguageContext"
import { useTranslations } from "next-intl"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function CookiesPage() {
  const { selectedLanguage } = useLanguage()
  const t = useTranslations("cookies")

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    { question: t("faq1"), answer: t("aboutDescription") },
    { question: t("faq2"), answer: t("faq2Answer") },
    { question: t("faq3"), answer: t("faq3Answer") },
    { question: t("faq4"), answer: t("managingDescription") },
    { question: t("faq5"), answer: t("faq5Answer") }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-32  max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          {t("title")}
        </h1>

        <section className="mb-12 ">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white/90">
            {t("aboutTitle")}
          </h2>
          <div className="text-white/70 leading-relaxed space-y-4">
            {t("aboutDescription").split("\n\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>


        <section className="mb-12 bg-white/5 rounded-lg p-6 md:p-8 border border-white/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white/90">
            {t("cookiesWeUse")}
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white/80">
                {t("cookiesWeUseDescription")}
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong className="text-white/90">_ga</strong> {t("gaDesc")}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong className="text-white/90">_gat</strong> {t("gatDesc")}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong className="text-white/90">_gid</strong> {t("gidDesc")}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-white/80">
                {t("languageCookie")}
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong className="text-white/90">intenia-language</strong> {t("i18nDesc")}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white/90">
            {t("managingTitle")}
          </h2>
          <div className="text-white/70 leading-relaxed space-y-4">
            {t("managingDescription").split("\n\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white/90">
            {t("faqTitle")}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-lg overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                >
                  <span className="font-semibold text-white/90">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ml-4 ${openFaq === index ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-96" : "max-h-0"
                    }`}
                >
                  <div className="px-6 pb-4 text-white/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
