import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Bryanston | Fast & Affordable Site Clearing',
  description: 'Need rubble removal in Bryanston? Professional debris clearing for homes, construction & businesses in secure estates. Same-day service available. Get a quote now.',
};

export default function RubbleRemovalBryanstonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
