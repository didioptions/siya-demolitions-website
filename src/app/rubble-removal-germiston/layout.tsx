import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Germiston | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Germiston, Johannesburg. We handle garden refuse, garage clean-up, industrial and construction debris.',
};

export default function RubbleRemovalGermistonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
