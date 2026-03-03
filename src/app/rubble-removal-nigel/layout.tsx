import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Nigel | Industrial & Residential Site Clearing',
  description: 'Local, licensed rubble removal in Nigel. SIMA Demolitions offers affordable site clearing for industrial, commercial, and residential debris. Call for a fast, free quote.',
};

export default function RubbleRemovalNigelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
