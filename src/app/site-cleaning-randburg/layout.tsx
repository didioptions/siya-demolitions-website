import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Randburg | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Randburg, Johannesburg. Post-construction, commercial, and residential site cleaning and debris removal.',
};

export default function SiteCleaningRandburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
