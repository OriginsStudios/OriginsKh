"use client";

import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/data/blogs";
import { getTeamMemberById } from "@/data/teamMembers";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const author = blog.authorId ? getTeamMemberById(blog.authorId) : null;

  return (
    <Link
      href={`/blogs/${blog.id}`}
      className="group block overflow-hidden transition-all duration-300 "
    >
      {/* Image container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 rounded-2xl rounded-b-none"
          onError={(e) => {
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src =
              "https://placehold.co/600x400/e2e8f0/4a5568?text=Image+Not+Found";
          }}
        />
      </div>

      {/* Content container */}
      <div className="mt-4">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium text-teal-700 bg-teal-50 rounded-2xl">
            {blog.category}
          </span>

          <span className="inline-block px-3 py-1 float-right text-xs font-medium text-teal-600">
            {blog.date}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-3 group-hover:text-teal-700 transition-colors duration-200">
          {blog.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {blog.summary}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            {author && (
              <>
                <Image
                  src={author.image}
                  alt={author.name}
                  unoptimized
                  width={30}
                  height={30}
                  className="rounded-full w-8 h-8 object-cover"
                />
                <span className="font-medium">{author.name}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
