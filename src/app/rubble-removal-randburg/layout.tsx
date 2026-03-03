import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Randburg | Licensed Debris & Site Clearing',
  description: 'Fast and affordable rubble removal in Randburg. SIMA Demolitions offers licensed site clearing for residential renovations, garden refuse, and construction debris. Call for a free quote.',
};

export default function RubbleRemovalRandburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
