import { blogs } from "../../data/blogs";

export async function GET() {
  const baseUrl = "https://www.originskh.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/portfolio",
    "/studios",
    "/hiring",
    "/news",
    "/privacypolicy",
    "/sitemap",
  ];

  // Dynamic blog routes
  const blogRoutes = blogs.map((blog) => `/blogs/${blog.id}`);

  // Combine all routes
  const allRoutes = [...staticRoutes, ...blogRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((route) => {
    const url = `${baseUrl}${route}`;
    const lastmod = new Date().toISOString();

    // Set priority based on route importance
    let priority = "0.7";
    if (route === "") priority = "1.0";
    else if (
      route === "/about" ||
      route === "/portfolio" ||
      route === "/studios"
    )
      priority = "0.9";
    else if (route.startsWith("/blogs/")) priority = "0.8";
    else if (route === "/contact" || route === "/hiring") priority = "0.8";

    // Set change frequency
    let changefreq = "monthly";
    if (route === "") changefreq = "weekly";
    else if (route.startsWith("/blogs/")) changefreq = "monthly";
    else if (route === "/news") changefreq = "weekly";

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400", // Cache for 24 hours
    },
  });
}
