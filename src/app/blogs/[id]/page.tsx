import Image from "next/image";
import Link from "next/link";
import { blogs, Blog } from "../../../data/blogs";
import { getTeamMemberById } from "../../../data/teamMembers";
import { notFound } from "next/navigation";
import SecondaryLayout from "../../components/layouts/secondary-layout";
import Footer from "../../components/ui/footer";
import BlogContentRenderer from "../../components/ui/BlogContentRenderer";
import BlogPageClient from "./BlogPageClient";
import { Metadata } from "next";
import { ArticleStructuredData } from "../../components/seo/StructuredData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const author = blog.authorId ? getTeamMemberById(blog.authorId) : null;
  const baseUrl = "https://originsstudios.com";

  return {
    title: blog.title,
    description: blog.summary,
    keywords: [
      blog.category.toLowerCase(),
      "origins studios",
      "motion graphics",
      "creative agency",
      "digital marketing",
      "cambodia",
      ...(blog.category === "Portfolio"
        ? ["portfolio", "case study", "creative work"]
        : []),
      ...(author ? [author.name.toLowerCase()] : []),
    ],
    authors: author
      ? [{ name: author.name }]
      : [{ name: "Origins Studios Team" }],
    alternates: {
      canonical: `/blogs/${blog.id}`,
    },
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.summary,
      url: `${baseUrl}/blogs/${blog.id}`,
      siteName: "Origins Studios",
      publishedTime: blog.date,
      authors: author ? [author.name] : ["Origins Studios Team"],
      section: blog.category,
      tags: [blog.category, "Origins Studios", "Creative Agency", "Cambodia"],
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.summary,
      images: [blog.image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog: Blog | undefined = blogs.find((b) => b.id === id);

  if (!blog) {
    notFound();
  }

  const author = blog.authorId ? getTeamMemberById(blog.authorId) : null;

  // Get related blogs (same category, excluding current blog)
  const relatedBlogs = blogs
    .filter((b) => b.id !== blog.id)
    .sort(() => Math.random() - 0.5) // shuffle
    .slice(0, 3);

  // Table of Contents data - use from blog data or fallback to default
  const tableOfContents = blog.tableOfContents || [
    { id: "introduction", title: "Introduction", href: "#introduction" },
    { id: "key-benefits", title: "Key Benefits", href: "#key-benefits" },
    { id: "pro-tip", title: "Pro Tip", href: "#pro-tip" },
    { id: "conclusion", title: "Conclusion", href: "#conclusion" },
  ];

  const ShareButtons = () => (
    <div className="flex flex-col space-y-3">
      <button className="p-3 text-gray-600 hover:text-teal-700 hover:bg-teal-50 transition-all duration-200 flex items-center gap-2">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
          />
        </svg>
        <div className="font-semibold text-gray-900 ">Share</div>
      </button>
    </div>
  );

  return (
    <BlogPageClient>
      <ArticleStructuredData
        title={blog.title}
        description={blog.summary}
        image={`https://originsstudios.com${blog.image}`}
        author={author?.name || "Origins Studios Team"}
        publishedDate={new Date(blog.date).toISOString()}
        url={`https://originsstudios.com/blogs/${blog.id}`}
      />
      <div className="min-h-screen bg-black">
        <SecondaryLayout
          activeSection="news"
          pageBackground="#000000"
          textColor="#ffffff"
          navColor="#000000"
          logo="/originlogo2.png"
        >
          {/* Section 1: Navbar + Heading (Black Background) */}
          <div className=" text-white pt-12 pb-16 ">
            <div className="max-w-6xl mx-auto px-6">
              {/* Category Badge */}
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                {blog.title}
              </h1>

              <div className="mb-6">
                <span className="inline-block py-2 text-sm font-medium text-white bg-teal-900/30 rounded-full">
                  {blog.category}
                </span>
                <span className="text-sm text-gray-400">
                  <p>{blog.date}</p>
                </span>
              </div>
              {/* Author and Meta Info */}
              <div className="flex items-end justify-center mb-8 pb-8 border-b border-gray-800 flex-col">
                <div className="text-md text-orange-400">Writer</div>
                <div className="flex items-center space-x-6 flex-row-reverse">
                  {author && (
                    <div className="flex items-center space-x-3">
                      <Image
                        src={author.image}
                        alt={author.name}
                        width={32}
                        height={32}
                        unoptimized
                        className="rounded-full object-cover w-8 h-8"
                      />
                      <div>
                        <p className="font-semibold text-white">
                          {author.name}
                        </p>
                        <p className="text-sm text-gray-400">
                          {author.position}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 1152px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Section 2: Body Content (White Background) */}
          <div className="bg-white text-black rounded-4xl">
            <div className="max-w-6xl mx-auto px-6 py-16 flex gap-12">
              {/* Sticky Table of Contents */}
              <div className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-32 space-y-8">
                  {/* Table of Contents */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Contents
                    </h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={item.href}
                          className="block text-sm text-gray-600 hover:text-teal-700 transition-colors duration-200"
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Sticky Share Buttons */}
                  <div className="">
                    <ShareButtons />
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <article id="article-content" className="flex-1 max-w-none">
                <div className="prose prose-lg max-w-none">
                  <div
                    id="introduction"
                    className="text-xl leading-relaxed text-gray-700 mb-8"
                  >
                    {blog.summary}
                  </div>

                  {/* Dynamic Content from blogs.ts */}
                  {blog.content && blog.content.length > 0 ? (
                    <BlogContentRenderer content={blog.content} />
                  ) : (
                    /* Fallback content for blogs without structured content */
                    <div className="space-y-6 text-gray-800 leading-relaxed">
                      <p>
                        This blog post is coming soon. Please check back later
                        for the full content.
                      </p>
                    </div>
                  )}
                </div>
              </article>
            </div>
          </div>

          {/* Origins Promo Section (Black Background) */}
          <div className="bg-black text-white py-24">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="flex justify-center mb-8">
                <Image
                  src="/originlogo2.png"
                  alt="Origins Logo"
                  width={120}
                  height={120}
                  className="h-auto"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                See Our Services
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with Origins&apos; comprehensive digital
                solutions. From custom software development to innovative
                design, we help businesses like yours achieve their digital
                transformation goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-200"
                >
                  Start Your Project
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center px-8 py-3 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors duration-200"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>

          {/* Section 3: Continue Reading (White Background) */}
          <div className="bg-white text-black">
            {relatedBlogs.length > 0 && (
              <div className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Continue Reading
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedBlogs.map((relatedBlog) => (
                    <Link
                      key={relatedBlog.id}
                      href={`/blogs/${relatedBlog.id}`}
                      className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                    >
                      <div className="relative w-full aspect-video overflow-hidden">
                        <Image
                          src={relatedBlog.image}
                          alt={relatedBlog.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="p-4">
                        <span className="inline-block px-2 py-1 text-xs font-medium text-teal-700 bg-teal-50 rounded-full mb-2">
                          {relatedBlog.category}
                        </span>
                        <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-teal-700 transition-colors duration-200 mb-2">
                          {relatedBlog.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {relatedBlog.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Footer />
        </SecondaryLayout>
      </div>
    </BlogPageClient>
  );
}
