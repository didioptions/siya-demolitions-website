import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://siya-demolitions-website--siya-demolitions-projects.europe-west4.hosted.app';
  
  const pages = [
    '/',
    '/about',
    '/contact',
    '/gallery',
    '/johannesburg',
    '/plant-hire',
    '/pretoria',
    '/rubble-removal',
    '/service-areas',
    '/services',
    '/site-cleaning',
    '/swimming-pool-demolition',
    '/tree-felling',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page === '/' ? 1 : 0.8,
  }));

  return sitemapEntries;
}
