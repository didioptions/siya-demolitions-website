import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://siya-demolitions-website--siya-demolitions-projects.europe-west4.hosted.app';
  
  const pages = [
    '/',
    '/about',
    '/contact',
    '/gallery',
    '/plant-hire',
    '/pretoria',
    '/rubble-removal',
    '/service-areas',
    '/site-cleaning',
    '/swimming-pool-demolition',
    '/tree-felling',
    '/demolition-johannesburg',
    '/demolition-sandton',
    '/demolition-randburg',
    '/demolition-roodepoort',
    '/demolition-midrand',
    '/demolition-fourways',
    '/demolition-soweto',
    '/demolition-alberton',
    '/demolition-bedfordview',
    '/demolition-edenvale',
    '/demolition-kempton-park',
    '/demolition-boksburg',
    '/demolition-germiston',
    '/demolition-bryanston',
    '/demolition-centurion',
    '/demolition-rosebank',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page === '/' ? 1 : (page === '/demolition-johannesburg' ? 0.9 : 0.8),
  }));

  return sitemapEntries;
}
