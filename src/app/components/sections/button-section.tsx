
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonSectionProps {
  title?: string;
  buttonText?: string;
  buttonHref: string;
  showArrowAnimation?: boolean;
  bgColor?: string;
  textColor?: string;
  buttonBgColor?: string;
  buttonHoverColor?: string;
}

export default function ButtonSection({
  buttonText = "Portfolio",
  buttonHref,
  showArrowAnimation = true,
  bgColor = "bg-transparent",
  buttonBgColor = "bg-black",
  buttonHoverColor = "hover:bg-orange-400",
  textColor = "text-black",
}: ButtonSectionProps) {
  return (
    <section className={`${bgColor} relative overflow-hidden`}>
      <div className="relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-left">

            <Link href={buttonHref}>
              <button
                className={`flex items-center px-6 py-3 ${buttonBgColor} ${textColor} rounded-full font-bold ${buttonHoverColor} transition-colors text-sm md:text-base`}
              >
                {buttonText}
                {showArrowAnimation && (
                  <motion.div
                    className={`ml-3 ${textColor}`}
                    animate={{ x: [0, 6, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                    }}
                  >
                    →
                  </motion.div>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}