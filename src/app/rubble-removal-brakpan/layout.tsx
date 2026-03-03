import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Brakpan | Site Clearing & Debris Removal',
  description: 'Your local specialists for rubble removal in Brakpan. SIMA Demolitions offers affordable site clearing for construction debris, garden refuse, and industrial waste. Licensed and reliable. Call today.',
};

export default function RubbleRemovalBrakpanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
