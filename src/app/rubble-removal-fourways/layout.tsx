import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Fourways | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Fourways, Johannesburg. We handle garden refuse, garage clean-up, construction debris and more in secure estates.',
};

export default function RubbleRemovalFourwaysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
