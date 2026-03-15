import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Northcliff | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Northcliff, Johannesburg. We handle garden refuse, garage clean-up, and construction debris.',
};

export default function RubbleRemovalNorthcliffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
