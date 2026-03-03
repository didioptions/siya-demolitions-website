import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal JHB CBD | Fast & Affordable Site Clearing',
  description: 'Need rubble removal in the Johannesburg CBD? Professional debris clearing for high-rises, construction & businesses. Same-day service available. Get a quote now.',
};

export default function RubbleRemovalJohannesburgCbdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
