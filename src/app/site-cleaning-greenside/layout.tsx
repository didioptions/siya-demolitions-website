import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Greenside | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Greenside, Johannesburg. Post-renovation and residential site cleaning, with care for established gardens.',
};

export default function SiteCleaningGreensideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
