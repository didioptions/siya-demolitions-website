import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Melville | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Melville, Johannesburg. We handle garden refuse, garage clean-up, and renovation debris from small stands.',
};

export default function RubbleRemovalMelvilleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
