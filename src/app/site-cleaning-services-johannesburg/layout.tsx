import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Services Johannesburg | Licensed Site Cleaning Contractors',
  description: 'Trusted site cleaning services across Johannesburg. Residential, commercial, and construction site cleaning for all suburbs.',
};

export default function SiteCleaningServicesJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
