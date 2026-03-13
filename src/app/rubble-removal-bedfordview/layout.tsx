import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Bedfordview | Fast & Affordable Site Clearing',
  description: 'Need rubble removal in Bedfordview? Professional debris clearing for high-end homes, construction & businesses. Same-day service available. Get a quote now.',
};

export default function RubbleRemovalBedfordviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
