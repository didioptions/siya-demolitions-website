import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Boksburg | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Boksburg, Johannesburg. Post-construction, commercial, and residential site cleaning and debris removal.',
};

export default function SiteCleaningBoksburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
