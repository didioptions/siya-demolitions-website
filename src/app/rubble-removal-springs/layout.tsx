import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Springs | Fast & Affordable Site Clearing',
  description: 'Need rubble removal in Springs? Professional debris clearing for homes, construction & businesses. Same-day service available. Get a quote now.',
};

export default function RubbleRemovalSpringsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
