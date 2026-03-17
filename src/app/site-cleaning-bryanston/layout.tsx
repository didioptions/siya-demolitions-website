import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Bryanston | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Bryanston, Johannesburg. Post-construction, commercial, and residential site cleaning for luxury properties and estates.',
};

export default function SiteCleaningBryanstonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
