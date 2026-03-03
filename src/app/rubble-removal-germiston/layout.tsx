import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Germiston | Fast & Affordable Site Clearing',
  description: 'Need rubble removal in Germiston? Professional debris clearing for homes, construction & businesses. Same-day service available. Get a quote now.',
};

export default function RubbleRemovalGermistonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
