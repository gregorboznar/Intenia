"use client"

import Image from "next/image"

export default function HeroTest() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src="/images/logos/intenia-logo.png"
            alt="Intenia Engineering Logo"
            width={1200}
            height={480}
            className="w-full h-auto max-w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}

