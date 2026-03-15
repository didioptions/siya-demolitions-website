import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Roodepoort | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Roodepoort, Johannesburg. Post-construction, commercial, and residential site cleaning and debris removal.',
};

export default function SiteCleaningRoodepoortLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
