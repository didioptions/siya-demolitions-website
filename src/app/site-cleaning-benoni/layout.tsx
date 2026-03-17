import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Benoni | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Benoni, Johannesburg. Post-construction, commercial, and residential site cleaning and debris removal.',
};

export default function SiteCleaningBenoniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
