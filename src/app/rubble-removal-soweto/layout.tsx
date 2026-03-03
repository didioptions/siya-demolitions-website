import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Soweto | Fast & Affordable Site Clearing',
  description: 'Need rubble removal in Soweto? Professional debris clearing for homes, construction & businesses. Same-day service available. Get a quote now.',
};

export default function RubbleRemovalSowetoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
