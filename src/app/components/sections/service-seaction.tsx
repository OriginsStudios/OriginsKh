"use client";
import Link from "next/link";

interface ServiceSectionProps {
  id?: string;
  textColor?: string;
  variant?: "standalone" | "embedded";
}

export default function ServiceSection({
  id,
  textColor,
  variant = "standalone",
}: ServiceSectionProps) {
  const isEmbedded = variant === "embedded";
  const resolvedTextClass = isEmbedded ? "text-teal-900" : "text-stone-900";
  const resolvedTextStyle =
    !isEmbedded && textColor ? { color: textColor } : undefined;
  const sectionClassName = isEmbedded
    ? "pt-8 md:pt-10 border-t border-teal-100/70"
    : "py-12 md:py-24 relative overflow-hidden px-8 transition-all duration-700 ease-in-out";
  const cardClassName = isEmbedded
    ? "rounded-2xl bg-white/70 border border-teal-100/70 px-6 py-6 md:px-8 md:py-8"
    : "rounded-3xl bg-white/70 border border-stone-200/70 px-8 py-10 md:px-12 md:py-12 shadow-[0_18px_50px_rgba(24,24,24,0.08)] backdrop-blur";
  const buttonClassName = isEmbedded
    ? "inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-800 hover:bg-orange-50 transition-colors whitespace-nowrap"
    : "inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-stone-50 rounded-full font-semibold uppercase tracking-[0.2em] hover:bg-amber-700 transition-colors text-xs md:text-sm whitespace-nowrap";
  const headingSizeClass = isEmbedded ? "text-base md:text-xl" : "text-base md:text-2xl";

  return (
    <section id={id} className={sectionClassName}>
      <div className="mx-auto w-full max-w-6xl">
        <div className={cardClassName}>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8">
          <div className="w-full">
            <h3
              className={`${headingSizeClass} ${resolvedTextClass} text-left leading-relaxed`}
              style={resolvedTextStyle}
            >
              We craft brand experiences where imagination meets intention and authenticity drives impact.
            </h3>
          </div>
          <div className="w-full flex md:justify-end">
            <Link href="/studios">
              <button className={buttonClassName}>
                Our Services →
              </button>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
