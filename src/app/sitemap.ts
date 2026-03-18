
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://apex-demolitions-website.vercel.app';
  
  const pages = [
    '/',
    '/about',
    '/contact',
    '/gallery',
    
    // Demolition
    '/demolition-johannesburg',
    '/demolition-services-johannesburg',
    '/demolition-sandton', '/demolition-randburg', '/demolition-roodepoort', '/demolition-midrand',
    '/demolition-fourways', '/demolition-soweto', '/demolition-alberton', '/demolition-germiston',
    '/demolition-boksburg', '/demolition-benoni', '/demolition-kempton-park', '/demolition-bedfordview',
    '/demolition-edenvale', '/demolition-bryanston', '/demolition-rosebank', '/demolition-northcliff',
    '/demolition-melville', '/demolition-linden', '/demolition-parkhurst', '/demolition-greenside',
    '/demolition-pretoria',
    '/demolition-centurion',

    // Rubble Removal
    '/rubble-removal-johannesburg',
    '/rubble-removal-services-johannesburg',
    '/rubble-removal-sandton', '/rubble-removal-randburg', '/rubble-removal-roodepoort',
    '/rubble-removal-midrand', '/rubble-removal-fourways', '/rubble-removal-soweto',
    '/rubble-removal-alberton', '/rubble-removal-germiston', '/rubble-removal-boksburg',
    '/rubble-removal-benoni', '/rubble-removal-kempton-park', '/rubble-removal-bedfordview',
    '/rubble-removal-edenvale', '/rubble-removal-bryanston', '/rubble-removal-rosebank',
    '/rubble-removal-northcliff', '/rubble-removal-melville', '/rubble-removal-linden',
    '/rubble-removal-parkhurst', '/rubble-removal-greenside', '/rubble-removal-brakpan',
    '/rubble-removal-centurion', '/rubble-removal-johannesburg-cbd', '/rubble-removal-nigel',
    '/rubble-removal-springs',

    // Site Cleaning
    '/site-cleaning',
    '/site-cleaning-services-johannesburg',
    '/site-cleaning-sandton', '/site-cleaning-randburg', '/site-cleaning-roodepoort',
    '/site-cleaning-midrand', '/site-cleaning-fourways', '/site-cleaning-soweto',
    '/site-cleaning-alberton', '/site-cleaning-germiston', '/site-cleaning-boksburg',
    '/site-cleaning-benoni', '/site-cleaning-kempton-park', '/site-cleaning-bedfordview',
    '/site-cleaning-edenvale', '/site-cleaning-bryanston', '/site-cleaning-rosebank',
    '/site-cleaning-northcliff', '/site-cleaning-melville', '/site-cleaning-linden',
    '/site-cleaning-parkhurst', '/site-cleaning-greenside',

    // Tree Felling
    '/tree-felling-johannesburg',
    '/tree-felling-services-johannesburg',
    '/tree-felling-sandton', '/tree-felling-randburg', '/tree-felling-roodepoort', '/tree-felling-midrand',
    '/tree-felling-fourways', '/tree-felling-soweto', '/tree-felling-alberton', '/tree-felling-germiston',
    '/tree-felling-boksburg', '/tree-felling-benoni', '/tree-felling-kempton-park', '/tree-felling-bedfordview',
    '/tree-felling-edenvale', '/tree-felling-bryanston', '/tree-felling-rosebank', '/tree-felling-northcliff',
    '/tree-felling-melville', '/tree-felling-linden', '/tree-felling-parkhurst', '/tree-felling-greenside',

    // Swimming Pool Demolition
    '/swimming-pool-demolition-johannesburg',
    '/swimming-pool-demolition-services-johannesburg',
    '/swimming-pool-demolition-sandton', '/swimming-pool-demolition-randburg', '/swimming-pool-demolition-roodepoort',
    '/swimming-pool-demolition-midrand', '/swimming-pool-demolition-fourways', '/swimming-pool-demolition-soweto',
    '/swimming-pool-demolition-alberton', '/swimming-pool-demolition-germiston', '/swimming-pool-demolition-boksburg',
    '/swimming-pool-demolition-benoni', '/swimming-pool-demolition-kempton-park', '/swimming-pool-demolition-bedfordview',
    '/swimming-pool-demolition-edenvale', '/swimming-pool-demolition-bryanston', '/swimming-pool-demolition-rosebank',
    '/swimming-pool-demolition-northcliff', '/swimming-pool-demolition-melville', '/swimming-pool-demolition-linden',
    '/swimming-pool-demolition-parkhurst', '/swimming-pool-demolition-greenside',
    '/swimming-pool-demolition-centurion', '/swimming-pool-demolition-krugersdorp', '/swimming-pool-demolition-springs',
    '/swimming-pool-demolition-brakpan', '/swimming-pool-demolition-nigel', '/swimming-pool-demolition-johannesburg-south',
    '/swimming-pool-demolition-johannesburg-cbd',
    '/swimming-pool-demolition-glenvista',
    '/swimming-pool-demolition-rivonia',
    '/swimming-pool-demolition-kyalami',
    '/swimming-pool-demolition-parkview',
    '/swimming-pool-demolition-constantia-kloof',

    // Plant Hire
    '/plant-hire-johannesburg',
    '/plant-hire-services-johannesburg',
    '/plant-hire-sandton', '/plant-hire-randburg', '/plant-hire-roodepoort', '/plant-hire-midrand',
    '/plant-hire-fourways', '/plant-hire-soweto', '/plant-hire-alberton', '/plant-hire-germiston',
    '/plant-hire-boksburg', '/plant-hire-benoni', '/plant-hire-kempton-park', '/plant-hire-bedfordview',
    '/plant-hire-edenvale', '/plant-hire-bryanston', '/plant-hire-rosebank', '/plant-hire-northcliff',
    '/plant-hire-melville', '/plant-hire-linden', '/plant-hire-parkhurst', '/plant-hire-greenside',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = pages.map((page) => {
    let url = `${baseUrl}${page}`;
    // A mapping to handle the main page for site cleaning which doesn't follow the pattern
    const urlMapping: {[key: string]: string} = {
      '/site-cleaning-johannesburg': '/site-cleaning',
    };
    if (urlMapping[page]) {
      url = `${baseUrl}${urlMapping[page]}`;
    }
    
    return {
        url,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '/' ? 1 : (page.includes('johannesburg') ? 0.9 : 0.8),
      };
  }).filter((entry, index, self) =>
    index === self.findIndex((t) => (
      t.url === entry.url
    ))
  );

  return sitemapEntries;
}
