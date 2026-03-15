import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Sandton | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Sandton, Johannesburg. Post-construction, commercial, and residential site cleaning services for high-end properties.',
};

export default function SiteCleaningSandtonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
