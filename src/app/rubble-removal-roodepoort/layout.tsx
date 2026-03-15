import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Roodepoort | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Roodepoort, Johannesburg. We handle garden refuse, garage clean-up, construction debris and more.',
};

export default function RubbleRemovalRoodepoortLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
