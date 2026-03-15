import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Boksburg | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Boksburg, Johannesburg. We handle garden refuse, garage clean-up, construction debris and more.',
};

export default function RubbleRemovalBoksburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
