
"use client"
import Image from "next/image"
import Link from "next/link"

export default function LogoOriginsSection() {
  return (
    <section id="logo" className="w-full flex justify-center items-center py-6 ">
      {/* Hide this link (and logo) on mobile with 'hidden sm:block' */}
      <Link href="/" className="block relative w-full max-w-screen-xl mx-auto hidden sm:block">
        <div className="aspect-w-16 aspect-h-9">
          <Image
            src="/originlogo.png"
            alt="Origins Logo"
            width={1350}
            height={1350}
            className="w-full h-auto object-contain"
            priority
            style={{ maxWidth: "100vw", maxHeight: "80vh" }}
            rel="preload"
          />
        </div>
      </Link>
    </section>
  )
}

