import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Alberton | Licensed Debris & Site Clearing',
  description: 'Fast, licensed rubble removal in Alberton. SIMA Demolitions offers professional site clearing for residential and commercial construction debris in Meyersdal, Brackenhurst, and surrounding areas. Call for a free quote.',
};

export default function RubbleRemovalAlbertonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
