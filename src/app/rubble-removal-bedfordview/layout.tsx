import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Bedfordview | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Bedfordview, Johannesburg. We handle garden refuse, garage clean-up, construction debris for high-end homes.',
};

export default function RubbleRemovalBedfordviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
