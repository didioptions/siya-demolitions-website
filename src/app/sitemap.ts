
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://apex-demolitions-website.vercel.app';
  
  // A curated list of pages that are confirmed to exist.
  const pages = [
    '/',
    '/about',
    '/contact',
    '/gallery',
    '/demolition-johannesburg',
    '/demolition-services-johannesburg',
    '/rubble-removal-johannesburg',
    '/rubble-removal-services-johannesburg',
    '/site-cleaning',
    '/site-cleaning-services-johannesburg',
    '/tree-felling-johannesburg',
    '/tree-felling-services-johannesburg',
    '/swimming-pool-demolition-johannesburg',
    '/swimming-pool-demolition-services-johannesburg',
    '/plant-hire-johannesburg',
    '/plant-hire-services-johannesburg',
    
    // Key Suburbs Confirmed to Exist
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
    '/demolition-centurion',
    '/demolition-krugersdorp',
    '/demolition-springs',
    '/demolition-brakpan',
    '/demolition-nigel',
    '/demolition-johannesburg-cbd',
    '/demolition-rivonia',
    '/demolition-kyalami',
    '/demolition-parkview',
    '/demolition-constantia-kloof',
    
    // Add other service areas as they are confirmed
    '/rubble-removal-sandton',
    '/site-cleaning-sandton',
    '/tree-felling-sandton',
    '/swimming-pool-demolition-sandton',
    '/plant-hire-sandton',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = pages.map((page) => {
    const url = `${baseUrl}${page}`;
    return {
        url,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '/' ? 1 : (page.includes('johannesburg') ? 0.9 : 0.8),
      };
  });

  return sitemapEntries;
}
