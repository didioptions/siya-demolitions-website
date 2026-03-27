
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Sandton | Construction & Post-Build Cleaning Experts',
  description: 'Professional site cleaning in Sandton for construction sites, renovations, and demolition cleanup. Fast, reliable service in Bryanston, Rivonia, and Fourways.',
};

export default function SiteCleaningSandtonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
