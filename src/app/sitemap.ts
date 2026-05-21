import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.ememolushola.com.ng",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}