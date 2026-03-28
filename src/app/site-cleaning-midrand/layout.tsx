
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Midrand | Construction & Post-Build Cleaning Experts',
  description: 'Professional site cleaning in Midrand for construction sites, developments, and post-build cleanup. Fast, reliable service in Noordwyk, Carlswald, and Halfway House.',
};

export default function SiteCleaningMidrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
