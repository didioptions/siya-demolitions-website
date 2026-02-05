import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal in Johannesburg | Construction Waste & Site Cleanup',
  description: 'Quick and affordable rubble removal services in Johannesburg. We clear construction waste, debris, and site materials. Same-day service available. Call for a quote.',
};

export default function RubbleRemovalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
