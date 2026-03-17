import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Melville | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Melville, Johannesburg. Post-renovation, commercial, and residential site cleaning on small stands.',
};

export default function SiteCleaningMelvilleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
