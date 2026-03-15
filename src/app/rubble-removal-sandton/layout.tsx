import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Sandton | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Sandton, Johannesburg. We handle garden refuse, garage clean-up, construction debris and more.',
};

export default function RubbleRemovalSandtonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
