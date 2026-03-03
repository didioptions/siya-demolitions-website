import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Boksburg | Fast & Affordable Site Clearing',
  description: 'Need rubble removal in Boksburg? Professional debris clearing for homes, construction & businesses. Same-day service available. Get a quote now.',
};

export default function RubbleRemovalBoksburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
