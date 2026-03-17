import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Germiston | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Germiston, Johannesburg. Industrial, commercial, and post-construction site cleaning and debris removal.',
};

export default function SiteCleaningGermistonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
