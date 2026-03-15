import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Greenside | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Greenside, Johannesburg. We handle garden refuse, garage clean-up, and renovation debris.',
};

export default function RubbleRemovalGreensideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
