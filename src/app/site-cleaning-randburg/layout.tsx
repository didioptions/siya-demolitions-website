
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Randburg | Construction & Post-Build Cleaning Experts',
  description: 'Professional site cleaning in Randburg for renovations, construction sites, and demolition cleanup. Fast, reliable service in Northcliff, Linden, and Ferndale.',
};

export default function SiteCleaningRandburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
