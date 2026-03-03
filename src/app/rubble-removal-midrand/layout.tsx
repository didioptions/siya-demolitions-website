import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Midrand | Estate & Construction Site Clearing',
  description: 'Licensed rubble removal in Midrand. SIMA Demolitions offers professional site clearing for secure estates like Waterfall, construction sites, and commercial developments. Call for a quote.',
};

export default function RubbleRemovalMidrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
