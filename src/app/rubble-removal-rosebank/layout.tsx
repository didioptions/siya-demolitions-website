import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Rosebank | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Rosebank, Johannesburg. We handle garden refuse, garage clean-up, construction debris and more.',
};

export default function RubbleRemovalRosebankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
