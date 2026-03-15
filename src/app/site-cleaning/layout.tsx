import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Johannesburg | Professional Site Cleaning Contractors',
  description: 'Professional site cleaning services in Johannesburg. We handle residential, commercial, and construction site cleaning across all suburbs including Sandton, Randburg, and Soweto.',
};

export default function SiteCleaningJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
