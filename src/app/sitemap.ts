import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://siya-demolitions-website--siya-demolitions-projects.europe-west4.hosted.app';
  
  const pages = [
    '/',
    '/about',
    '/contact',
    '/gallery',
    '/plant-hire',
    '/rubble-removal-johannesburg',
    '/rubble-removal-sandton',
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
    '/rubble-removal-alberton',
    '/rubble-removal-benoni',
    '/rubble-removal-boksburg',
    '/rubble-removal-brakpan',
    '/rubble-removal-centurion',
    '/rubble-removal-edenvale',
    '/rubble-removal-germiston',
    '/rubble-removal-johannesburg-cbd',
    '/rubble-removal-kempton-park',
    '/rubble-removal-midrand',
    '/rubble-removal-nigel',
    '/rubble-removal-randburg',
    '/rubble-removal-roodepoort',
    '/rubble-removal-soweto',
    '/rubble-removal-springs',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page === '/' ? 1 : (page.includes('johannesburg') ? 0.9 : 0.8),
  }));

  return sitemapEntries;
}
