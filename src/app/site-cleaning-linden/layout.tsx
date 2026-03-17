import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Linden | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Linden, Johannesburg. Post-renovation and residential site cleaning, with care for established gardens.',
};

export default function SiteCleaningLindenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
