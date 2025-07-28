"use client";

import { useEffect } from "react";
import { X, Phone, Heart, Star, Sparkles } from "lucide-react";
import Image from "next/image";


interface FunnyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FunnyPopup({ isOpen, onClose }: FunnyPopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 pointer-events-auto opacity-100"
        onClick={onClose}
      />

      {/* Popup Container */}
      <div className="fixed inset-0 flex items-center justify-center px-4 pointer-events-auto">
        <div
          className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 w-full max-w-2xl max-h-[95vh] overflow-hidden transform transition-all duration-700 ease-out translate-y-0 opacity-100 scale-100"
          style={{
            boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-end p-4">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 z-10 relative"
            >
              <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            </button>
          </div>

          {/* Main Content (no scrolling) */}
          <div className="px-4 sm:px-6 pb-6 -mt-4">
            {/* Image and Icons */}
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-300 shadow-2xl">
                  <Image
                    src="/bingo.png"
                    alt="Bingo the Customer Service Dog"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-200/20 to-transparent" />
                </div>

                <div className="absolute -top-2 -right-8 animate-bounce">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 drop-shadow-lg" />
                </div>
                <div className="absolute top-12 -left-6 sm:-left-8 animate-pulse delay-300">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 drop-shadow-lg" />
                </div>
                <div className="absolute -bottom-3 right-4 animate-bounce delay-500">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-purple-500 drop-shadow-lg" />
                </div>
                <div className="absolute top-8 right-12 animate-pulse delay-700">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 drop-shadow-lg" />
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
                <span className="text-2xl">🐾</span> <strong>Woof! Woof!</strong> <span className="text-2xl">🐾</span>

              </h1>
              <div className="text-lg sm:text-2xl text-orange-400 font-semibold mb-4">
               ORIGINS&apos; CHIEF HAPPINESS OFFICER 🐕
              </div>
            </div>

            {/* Message */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-4 sm:p-8 mb-6 border-2 border-orange-200 relative">
              <div className="absolute -top-3 left-6 sm:left-8 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-orange-50 to-amber-50 rotate-45 border-l-2 border-t-2 border-orange-200" />
              <div className="text-center">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3">
                  ORIGINS&apos; chief happiness officer is here at your service. What can Bingo help you with today? 📞 🐶
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  If you want to know more about us, please check out our contact page! Woof! Woof!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

