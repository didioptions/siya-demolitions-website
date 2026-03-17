import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Edenvale | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Edenvale, Johannesburg. Post-construction, commercial, and residential site cleaning and debris removal.',
};

export default function SiteCleaningEdenvaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
