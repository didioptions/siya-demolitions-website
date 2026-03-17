import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Alberton | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Alberton, Johannesburg. Post-construction, commercial, and residential site cleaning and debris removal.',
};

export default function SiteCleaningAlbertonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
