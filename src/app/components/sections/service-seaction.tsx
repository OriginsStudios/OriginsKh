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
  const resolvedTextClass = isEmbedded
    ? "text-teal-900"
    : textColor
      ? `text-[${textColor}]`
      : "text-black";
  const sectionClassName = isEmbedded
    ? "pt-8 md:pt-10 border-t border-teal-100/70"
    : "py-10 md:py-24 relative overflow-hidden px-8 transition-all duration-700 ease-in-out";
  const buttonClassName = isEmbedded
    ? "inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-800 hover:bg-orange-50 transition-colors whitespace-nowrap"
    : "inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full font-bold hover:bg-orange-400 transition-colors text-sm md:text-base whitespace-nowrap";
  const headingSizeClass = isEmbedded ? "text-base md:text-xl" : "text-base md:text-2xl";

  return (
    <section id={id} className={sectionClassName}>
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8">
          <div className="w-full">
            <h3
              className={`${headingSizeClass} ${resolvedTextClass} text-left leading-relaxed`}
            >
              We craft brand experiences where imagination meets intention and authenticity drives impact.
            </h3>
          </div>
          <div className="w-full flex md:justify-end">
            <Link href="/studios">
              <button className={buttonClassName}>
                View Our Services →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
