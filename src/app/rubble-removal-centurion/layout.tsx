import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Centurion | Fast & Affordable Site Clearing',
  description: 'Need rubble removal in Centurion? Professional debris clearing for homes, construction & businesses. Same-day service available. Get a quote now.',
};

export default function RubbleRemovalCenturionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
