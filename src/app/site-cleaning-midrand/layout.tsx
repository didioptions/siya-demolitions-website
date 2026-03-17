import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Midrand | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Midrand, Johannesburg. Post-construction, commercial, and residential site cleaning for estates like Waterfall.',
};

export default function SiteCleaningMidrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
