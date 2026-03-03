import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Germiston | Industrial & Commercial Site Clearing',
  description: 'Specialists in industrial and commercial rubble removal in Germiston. SIMA Demolitions clears heavy construction debris, factory waste, and site rubble. Licensed and insured. Call for a quote.',
};

export default function RubbleRemovalGermistonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
