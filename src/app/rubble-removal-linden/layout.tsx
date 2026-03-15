import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Linden | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Linden, Johannesburg. We handle garden refuse, garage clean-up, and renovation debris from residential properties.',
};

export default function RubbleRemovalLindenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
