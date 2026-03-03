import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Edenvale | Site Clearing & Debris Removal',
  description: 'Licensed rubble removal in Edenvale. SIMA Demolitions offers fast site clearing for residential and commercial waste in Greenstone, the Avenues, and surrounding areas. Call for a free quote.',
};

export default function RubbleRemovalEdenvaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
