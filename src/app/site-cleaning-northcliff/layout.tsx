import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Northcliff | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Northcliff, Johannesburg. Post-construction, residential site cleaning, and debris removal on steep slopes.',
};

export default function SiteCleaningNorthcliffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
