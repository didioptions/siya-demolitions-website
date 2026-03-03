import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Edenvale | Fast & Affordable Site Clearing',
  description: 'Need rubble removal in Edenvale? Professional debris clearing for homes, construction & businesses. Same-day service available. Get a quote now.',
};

export default function RubbleRemovalEdenvaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
