import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const homeHeroImage = PlaceHolderImages.find(p => p.id === 'homeHero');

export const metadata: Metadata = {
  title: {
    default: 'Siya Demolitions Projects | Demolition & Construction Gauteng',
    template: '%s | Siya Demolitions',
  },
  description: 'Expert demolition services in Gauteng, South Africa. Siya Demolitions Projects offers residential, commercial, and industrial demolition, site clearing, and more.',
  keywords: ['demolition', 'Gauteng', 'Johannesburg', 'South Africa', 'site clearing', 'construction', 'rubble removal', 'tree felling'],
  openGraph: {
    title: 'Siya Demolitions Projects | Demolition & Construction Gauteng',
    description: 'Professional demolition, rubble removal, and site clearing services in Gauteng.',
    url: 'https://siyademolitions.co.za', // Assuming a domain, will use a placeholder
    siteName: 'Siya Demolitions Projects',
    images: [
      {
        url: homeHeroImage?.imageUrl || '',
        width: 1200,
        height: 630,
        alt: 'Demolition site with heavy machinery',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Siya Demolitions Projects',
  telephone: '078 429 2760',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gauteng',
    addressCountry: 'ZA',
  },
  description: 'Siya Demolitions Projects provides professional demolition, rubble removal, site cleaning, tree felling, and construction services across Gauteng.',
  url: 'https://siyademolitions.co.za', // Placeholder URL
  image: homeHeroImage?.imageUrl || '',
  serviceType: [
    "Demolition",
    "Rubble Removal",
    "Site Cleaning",
    "Tree Felling",
    "Construction"
  ],
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Gauteng'
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
