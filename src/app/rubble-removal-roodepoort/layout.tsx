import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Roodepoort | Licensed Debris & Site Clearing',
  description: 'Fast, licensed rubble removal in Roodepoort. SIMA Demolitions offers professional site clearing for construction debris, garden refuse, and renovation waste across the West Rand. Call for a quote.',
};

export default function RubbleRemovalRoodepoortLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
