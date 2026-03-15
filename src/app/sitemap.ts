import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://siya-demolitions-website--siya-demolitions-projects.europe-west4.hosted.app';
  
  const pages = [
    '/',
    '/about',
    '/contact',
    '/gallery',
    '/plant-hire',
    '/site-cleaning',
    '/swimming-pool-demolition',
    '/tree-felling',
    // Demolition Pages
    '/demolition-johannesburg',
    '/demolition-services-johannesburg',
    '/demolition-sandton',
    '/demolition-randburg',
    '/demolition-roodepoort',
    '/demolition-midrand',
    '/demolition-fourways',
    '/demolition-soweto',
    '/demolition-alberton',
    '/demolition-germiston',
    '/demolition-boksburg',
    '/demolition-benoni',
    '/demolition-kempton-park',
    '/demolition-bedfordview',
    '/demolition-edenvale',
    '/demolition-bryanston',
    '/demolition-rosebank',
    '/demolition-northcliff',
    '/demolition-melville',
    '/demolition-linden',
    '/demolition-parkhurst',
    '/demolition-greenside',
    '/demolition-pretoria',
    // Rubble Removal Pages
    '/rubble-removal-johannesburg',
    '/rubble-removal-services-johannesburg',
    '/rubble-removal-sandton',
    '/rubble-removal-randburg',
    '/rubble-removal-roodepoort',
    '/rubble-removal-midrand',
    '/rubble-removal-fourways',
    '/rubble-removal-soweto',
    '/rubble-removal-alberton',
    '/rubble-removal-germiston',
    '/rubble-removal-boksburg',
    '/rubble-removal-benoni',
    '/rubble-removal-kempton-park',
    '/rubble-removal-bedfordview',
    '/rubble-removal-edenvale',
    '/rubble-removal-bryanston',
    '/rubble-removal-rosebank',
    '/rubble-removal-northcliff',
    '/rubble-removal-melville',
    '/rubble-removal-linden',
    '/rubble-removal-parkhurst',
    '/rubble-removal-greenside',
    // Legacy Rubble Pages (can be pruned if redirects are permanent)
    '/rubble-removal-brakpan',
    '/rubble-removal-centurion',
    '/rubble-removal-johannesburg-cbd',
    '/rubble-removal-nigel',
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
