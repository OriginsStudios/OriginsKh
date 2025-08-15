"use client";

import Link from "next/link";
import { Blog } from "@/data/blogs";
import Image from "next/image";

interface BlogCardProps {
  blog: Blog;
}

export default function BigBlogCard({ blog }: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${blog.id}`}
      className="group block bg-white rounded-3xl overflow-hidden shadow-lg   duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
        {/* Left Panel: Content */}
        <div className="bg-teal-800 text-white p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold leading-tight mb-6">
              {blog.title}
            </h2>
            <p className="text-teal-100 text-base lg:text-lg leading-relaxed mb-8 line-clamp-4">
              {blog.summary}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-orange-500 rounded-full p-3 duration-300">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            <span className="text-white font-semibold">Read full article</span>
          </div>
        </div>

        {/* Right Panel: Illustration/Image */}
        <div className="relative bg-gray-100 min-h-[300px] lg:min-h-0 flex items-center justify-center p-8">
          {/* Golf Illustration - Using a placeholder for now */}
          <div className="relative w-full h-full max-w-md mx-auto">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain transition-transform duration-500"
            />

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-orange-400 rounded-full opacity-80"></div>
            <div className="absolute bottom-8 left-8 w-4 h-4 bg-orange-400 rounded-full opacity-60"></div>
            <div className="absolute top-1/3 left-4 w-6 h-6 bg-orange-400 rounded-full opacity-40"></div>
            <div className="absolute bottom-1/4 right-8 w-3 h-3 bg-orange-400 rounded-full opacity-70"></div>
            <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-orange-400 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </Link>
  );
}
