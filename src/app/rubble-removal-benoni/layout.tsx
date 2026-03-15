import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Benoni | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Benoni, Johannesburg. We handle garden refuse, garage clean-up, construction debris and more.',
};

export default function RubbleRemovalBenoniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
