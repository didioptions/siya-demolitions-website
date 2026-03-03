import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Benoni | Fast & Affordable Site Clearing',
  description: 'Need rubble removal in Benoni? Professional debris clearing for homes, construction & businesses. Same-day service available. Get a quote now.',
};

export default function RubbleRemovalBenoniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
