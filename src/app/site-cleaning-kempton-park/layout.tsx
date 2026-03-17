import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Kempton Park | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Kempton Park, Johannesburg. Commercial, industrial, and post-construction site cleaning and debris removal.',
};

export default function SiteCleaningKemptonParkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
