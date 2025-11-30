"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function ModernPricing() {
  const [annual, setAnnual] = useState(true);
  const t = useTranslations("pricing");

  const plans = [
    {
      name: t("starter.name"),
      description: t("starter.description"),
      price: annual ? 29 : 39,
      features: [
        t("starter.features.teamMembers"),
        t("starter.features.storage"),
        t("starter.features.analytics"),
        t("starter.features.support"),
        t("starter.features.projects"),
      ],
      cta: t("starter.cta"),
      popular: false,
    },
    {
      name: t("professional.name"),
      description: t("professional.description"),
      price: annual ? 79 : 99,
      features: [
        t("professional.features.teamMembers"),
        t("professional.features.storage"),
        t("professional.features.analytics"),
        t("professional.features.support"),
        t("professional.features.api"),
        t("professional.features.integrations"),
        t("professional.features.projects"),
      ],
      cta: t("professional.cta"),
      popular: true,
    },
    {
      name: t("enterprise.name"),
      description: t("enterprise.description"),
      price: annual ? 149 : 199,
      features: [
        t("enterprise.features.teamMembers"),
        t("enterprise.features.storage"),
        t("enterprise.features.analytics"),
        t("enterprise.features.support"),
        t("enterprise.features.security"),
        t("enterprise.features.development"),
        t("enterprise.features.onboarding"),
        t("enterprise.features.sla"),
      ],
      cta: t("enterprise.cta"),
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-primary-light/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2
            id="pricing-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          >
            {t("heading")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            {t("subheading")}
          </p>

          <div className="relative flex items-center justify-center mt-6 sm:mt-8">
            <fieldset className="bg-white/5 backdrop-blur-sm border border-white/10 p-1 rounded-full">
              <legend className="sr-only">Billing Frequency</legend>
              <div className="relative flex">
                <button
                  onClick={() => setAnnual(true)}
                  className={`relative z-10 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white ${annual ? "text-white" : "text-white/70"
                    }`}
                  aria-pressed={annual}
                  aria-label={t("annual")}
                >
                  {t("annual")}
                </button>
                <button
                  onClick={() => setAnnual(false)}
                  className={`relative z-10 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white ${!annual ? "text-white" : "text-white/70"
                    }`}
                  aria-pressed={!annual}
                  aria-label={t("monthly")}
                >
                  {t("monthly")}
                </button>
                <div
                  className={`absolute top-1 left-1 ${annual ? "w-[calc(50%-12px)]" : "w-[calc(50%-3px)]"
                    } h-[calc(100%-8px)] bg-gradient-to-r from-brand-primary to-brand-primary-light rounded-full transition-transform duration-300 ${annual
                      ? "transform translate-x-0"
                      : "transform translate-x-full"
                    }`}
                  aria-hidden="true"
                ></div>
              </div>
            </fieldset>

            {annual && (
              <div className="absolute sm:relative -bottom-8 sm:bottom-auto ml-3 bg-gradient-to-r from-brand-primary to-brand-primary-light text-white text-xs font-bold px-2 py-1 rounded-full">
                {t("saveLabel")}
              </div>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
              role="listitem"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <div className="bg-gradient-to-r from-brand-primary to-brand-primary-light text-white text-xs font-bold px-3 py-1 rounded-full z-50">
                    {t("professional.popular")}
                  </div>
                </div>
              )}

              <div
                className={`h-full bg-white/5 backdrop-blur-sm border rounded-2xl overflow-hidden transition-transform ${plan.popular ? "border-brand-primary-light" : "border-white/10"
                  }`}
              >
                <div className="p-5 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-5 sm:mb-6">
                    {plan.description}
                  </p>

                  <div
                    className="flex items-baseline mb-5 sm:mb-6"
                    aria-label={`${plan.price} dollars per ${annual ? "year" : "month"
                      }`}
                  >
                    <span className="text-2xl sm:text-4xl font-bold">
                      ${plan.price}
                    </span>
                    <span className="text-white/70 ml-2 text-sm">
                      /{annual ? t("perYear") : t("perMonth")}
                    </span>
                  </div>

                  <Button
                    className={`w-full mb-6 sm:mb-8 py-2 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:outline-none ${plan.popular
                      ? "bg-gradient-to-r from-brand-primary to-brand-primary-light hover:from-brand-primary-dark hover:to-brand-primary text-white border-0"
                      : "bg-white/10 hover:bg-white/20 text-white"
                      }`}
                    aria-label={`${plan.cta} with the ${plan.name} plan`}
                  >
                    {plan.cta}
                  </Button>

                  <ul
                    className="space-y-3 sm:space-y-4"
                    aria-label={`${plan.name} plan features`}
                  >
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 sm:gap-3"
                      >
                        <div
                          className="flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-gradient-to-r from-brand-primary to-brand-primary-light flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                        </div>
                        <span className="text-white/80 text-sm sm:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-white/70 text-sm sm:text-base">
            {t("trialNotice")}
          </p>
        </div>
      </div>
    </section>
  );
}
