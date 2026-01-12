import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard/", "/_next/data/"],
      },
    ],
    sitemap: "https://circlekit.vercel.app/sitemap.xml",
    host: "https://circlekit.vercel.app",
  };
}
