import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Alberton | Fast & Affordable Site Clearing',
  description: 'Need rubble removal in Alberton? Professional debris clearing for homes, construction & businesses. Same-day service available. Get a quote now.',
};

export default function RubbleRemovalAlbertonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
