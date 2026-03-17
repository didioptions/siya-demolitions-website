import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Fourways | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Fourways, Johannesburg. Post-construction, commercial, and residential site cleaning for estates like Dainfern.',
};

export default function SiteCleaningFourwaysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
