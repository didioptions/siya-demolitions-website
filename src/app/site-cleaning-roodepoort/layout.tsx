
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Roodepoort | Construction & Post-Build Cleaning Experts',
  description: 'Professional site cleaning in Roodepoort for renovations, construction sites, and demolition cleanup. Fast, reliable service in Florida, Ruimsig, and Weltevreden Park.',
};

export default function SiteCleaningRoodepoortLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
