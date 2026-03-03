import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Sandton | Fast & Affordable Site Clearing',
  description: 'Need rubble removal in Sandton? Professional debris clearing for homes, construction & businesses. Same-day service available. Get a quote now.',
};

export default function RubbleRemovalSandtonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
