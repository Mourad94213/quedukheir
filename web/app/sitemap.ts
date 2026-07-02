import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { ARTICLES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/qui-sommes-nous", priority: 0.8, changeFrequency: "monthly" },
    { path: "/nos-actions", priority: 0.9, changeFrequency: "monthly" },
    { path: "/faire-un-don", priority: 0.9, changeFrequency: "monthly" },
    { path: "/transparence", priority: 0.8, changeFrequency: "weekly" },
    { path: "/agenda", priority: 0.8, changeFrequency: "weekly" },
    { path: "/galerie", priority: 0.6, changeFrequency: "monthly" },
    { path: "/actualites", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/connexion", priority: 0.4, changeFrequency: "yearly" },
    { path: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" },
    { path: "/confidentialite", priority: 0.3, changeFrequency: "yearly" },
  ];

  const pages: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const articles: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${base}/actualites/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
