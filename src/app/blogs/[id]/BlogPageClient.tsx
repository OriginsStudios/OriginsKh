"use client";
import { useState, useEffect } from "react";

interface BlogPageClientProps {
  children: React.ReactNode;
}

export default function BlogPageClient({ children }: BlogPageClientProps) {
  const [readingProgress, setReadingProgress] = useState(0);

  // Reading progress tracking
  useEffect(() => {
    const updateReadingProgress = () => {
      const article = document.getElementById("article-content");
      if (!article) return;

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(
        100,
        Math.max(0, (scrollTop / docHeight) * 100)
      );

      setReadingProgress(progress);
    };

    window.addEventListener("scroll", updateReadingProgress, { passive: true });
    updateReadingProgress();

    return () => window.removeEventListener("scroll", updateReadingProgress);
  }, []);

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-orange-500 transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>
      {children}
    </>
  );
}