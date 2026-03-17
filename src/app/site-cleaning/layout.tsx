import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Johannesburg | Professional Site Cleaning Contractors',
  description: 'Professional post-construction, builders clean, and final handover cleaning for residential and commercial sites across all of Johannesburg. Fast, reliable, and affordable. Get a free quote.',
};

export default function SiteCleaningJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
