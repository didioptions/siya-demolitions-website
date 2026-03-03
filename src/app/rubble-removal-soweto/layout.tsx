import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Soweto | Community & Residential Site Clearing',
  description: 'Affordable, licensed rubble removal in Soweto. SIMA Demolitions offers professional site clearing for community projects, residential renovations, and construction debris. Call for a free quote.',
};

export default function RubbleRemovalSowetoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
