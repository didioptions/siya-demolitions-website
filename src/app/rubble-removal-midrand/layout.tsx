import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Midrand | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Midrand, Johannesburg. We handle garden refuse, garage clean-up, construction debris and more.',
};

export default function RubbleRemovalMidrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
