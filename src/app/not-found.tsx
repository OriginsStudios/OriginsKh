'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import FloatingShape from './components/ui/floating-shape';

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center p-4 sm:p-6 bg-gradient-to-br from-orange-50 to-purple-50 overflow-hidden">
      {/* Background shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloatingShape delay={0} duration={12} className="top-1/4 left-1/4 md:w-30 md:h-30 w-15 h-15 rounded-full bg-orange-400" />
        <FloatingShape delay={4} duration={18} className="top-3/4 right-1/4 md:w-32 md:h-32 w-12 h-12 rounded-full bg-gray-400" />
        <FloatingShape delay={8} duration={20} className="top-1/2 right-1/3 md:w-20 md:h-20 w-10 h-10 rounded-2xl bg-orange-400" />

        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      {/* Buttons - always in a single row */}
      <div
        className={`z-10 mb-4 flex flex-row flex-wrap justify-center gap-4 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <Link
          href="/"
          className="px-3 py-1 md:px-6 md:py-3 bg-orange-400 text-white rounded-full hover:bg-orange-500 hover:scale-105 transform transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
        >
          🏠 Go Back Home
        </Link>
        <Link
          href="/contact"
          className="px-3 py-1 md:px-6 md:py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-400 hover:bg-gray-50 hover:scale-105 transform transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
        >
          📧 Contact Support
        </Link>
      </div>

      {/* 404 Illustration */}
      <div
        className={`mb-6 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <Image
          src="/bingo-404-2.png"
          alt="404 - Page not found illustration"
          width={400}
          height={300}
          className="mx-auto w-full max-w-xs sm:max-w-md"
          priority
        />
      </div>

      {/* Heading */}
      <h2
        className={`text-2xl sm:text-3xl font-semibold mb-3 text-gray-700 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        Oops! You Found <span className='text-orange-400'>Bingo!</span>
      </h2>

      {/* Message */}
      <p
        className={`mb-6 px-8 text-base sm:text-lg text-gray-600 max-w-md transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        The page you&lsquo;re looking for seems to have the wrong address.
        Click the button Bingo is pointing at.
      </p>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
