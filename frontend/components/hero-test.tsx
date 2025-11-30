"use client"

import Image from "next/image"

export default function HeroTest() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-black pt-16">
      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center flex-col">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src="/images/logos/intenia-logo-2.png"
            alt="Intenia Engineering Logo"
            width={1200}
            height={480}
            className="w-full h-auto max-w-full object-contain"
            priority
          />
        </div>
        <div className="text-center leading-tight mt-32 max-w-[300px] items-center justify-center">

          <p>Intenia Engineering d.o.o., s sedežem v Medvodah, Slovenija, se odlično odziva pri zagotavljanju inženirskih, </p>
          <span className="flex items-center relative uppercase  group mt-6 text-xs xl:text-base items-center justify-center">Oglejte si naše delo</span>
        </div>
      </div>
    </section>
  )
}

