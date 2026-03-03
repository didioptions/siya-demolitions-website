import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Nigel | Fast & Affordable Site Clearing',
  description: 'Need rubble removal in Nigel? Professional debris clearing for homes, construction & businesses. Same-day service available. Get a quote now.',
};

export default function RubbleRemovalNigelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
