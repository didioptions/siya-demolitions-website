import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Parkhurst | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Parkhurst, Johannesburg. Post-renovation and residential site cleaning on small stands.',
};

export default function SiteCleaningParkhurstLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
