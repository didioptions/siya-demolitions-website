import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Bedfordview | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Bedfordview, Johannesburg. Post-construction and residential site cleaning for high-end properties.',
};

export default function SiteCleaningBedfordviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
