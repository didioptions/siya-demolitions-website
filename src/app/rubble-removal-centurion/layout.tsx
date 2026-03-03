import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Centurion | Licensed Debris & Site Clearing',
  description: 'Fast, licensed rubble removal in Centurion. SIMA Demolitions offers professional site clearing for residential, estate, and commercial construction debris. Call for a free quote.',
};

export default function RubbleRemovalCenturionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
