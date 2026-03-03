import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Kempton Park | Fast & Affordable Site Clearing',
  description: 'Need rubble removal in Kempton Park? Professional debris clearing for homes, construction & businesses. Same-day service available. Get a quote now.',
};

export default function RubbleRemovalKemptonParkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
