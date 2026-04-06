
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { WhatsAppFab } from '@/components/layout/whatsapp-fab';
import { FirebaseClientProvider } from '@/firebase';

const homeHeroImage = PlaceHolderImages.find(p => p.id === 'homeHero');

export const metadata: Metadata = {
  title: {
    default: 'Demolition, Plant Hire & Rubble Removal Johannesburg | Apex',
    template: '%s | Apex Demolitions Projects',
  },
  description: 'Top-rated demolition, plant hire, and rubble removal in Johannesburg. Licensed contractors for site clearing, tree felling, and more. Same-day service available. Get a free quote.',
  keywords: ['demolition Johannesburg', 'rubble removal Johannesburg', 'plant hire Johannesburg', 'site clearing', 'tree felling', 'Gauteng', 'Sandton', 'Randburg'],
  openGraph: {
    title: 'Demolition, Plant Hire & Rubble Removal Johannesburg | Apex',
    description: 'Professional demolition, rubble removal, and site clearing services in Johannesburg.',
    url: 'https://apex-demolitions-website.vercel.app/',
    siteName: 'Apex Demolitions Projects',
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
  name: 'Apex Demolitions Projects',
  telephone: '+27-78-429-2760',
  email: 'info@apexdemolitions.co.za',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '304 Main Avenue',
    addressLocality: 'Randburg',
    addressRegion: 'Gauteng',
    postalCode: '2194',
    addressCountry: 'ZA',
  },
  description: 'Professional demolition, rubble removal, site clearing, tree felling, swimming pool demolition, and plant hire services in Johannesburg and Gauteng.',
  url: 'https://apex-demolitions-website.vercel.app/',
  image: homeHeroImage?.imageUrl || '',
  serviceType: [
    "Demolition",
    "Rubble Removal",
    "Site Cleaning",
    "Tree Felling",
    "Swimming Pool Demolition",
    "Plant Hire",
    "Construction"
  ],
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Gauteng'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '07:30',
      closes: '17:30'
    }
  ],
  priceRange: '$$',
  sameAs: [
    'https://www.facebook.com/apex.demolitions',
    'https://www.instagram.com/apex.demolitions'
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <FirebaseClientProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex flex-col">{children}</main>
            <Footer />
          </div>
          <WhatsAppFab />
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
