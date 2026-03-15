import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Bryanston | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Bryanston, Johannesburg. We handle garden refuse, garage clean-up, and construction debris in secure estates.',
};

export default function RubbleRemovalBryanstonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
