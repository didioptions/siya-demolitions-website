import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Benoni | Licensed Construction Debris Cleanup',
  description: 'Fast, licensed rubble removal in Benoni. SIMA Demolitions offers professional site clearing for construction, residential, and garden waste in Rynfield, Farrarmere, and beyond. Call for a free quote.',
};

export default function RubbleRemovalBenoniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
