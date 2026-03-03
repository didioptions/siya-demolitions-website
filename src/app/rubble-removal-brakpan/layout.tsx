import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Brakpan | Fast & Affordable Site Clearing',
  description: 'Need rubble removal in Brakpan? Professional debris clearing for homes, construction & businesses. Same-day service available. Get a quote now.',
};

export default function RubbleRemovalBrakpanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
