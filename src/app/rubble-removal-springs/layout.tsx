import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Springs | Industrial & Residential Site Clearing',
  description: 'Licensed and reliable rubble removal in Springs. SIMA Demolitions offers affordable site clearing for industrial, commercial, and residential debris. Call for a fast, free quote.',
};

export default function RubbleRemovalSpringsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
