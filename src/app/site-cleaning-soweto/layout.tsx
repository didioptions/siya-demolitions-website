import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Soweto | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Soweto, Johannesburg. Post-construction, commercial, and residential site cleaning and debris removal.',
};

export default function SiteCleaningSowetoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
