
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Johannesburg | Construction & Post-Build Cleaning Experts',
  description: 'Professional site cleaning in Johannesburg for construction sites, post-build cleanups, and demolition projects. Fast, reliable service across all suburbs.',
};

export default function SiteCleaningJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
