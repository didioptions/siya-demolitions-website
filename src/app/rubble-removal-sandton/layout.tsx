import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Sandton | Licensed Debris & Site Clearing',
  description: 'Professional rubble removal in Sandton. SIMA Demolitions offers fast, licensed site clearing for residential and commercial construction debris in estates and developments. Call for a free quote.',
};

export default function RubbleRemovalSandtonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
