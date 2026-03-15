import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Parkhurst | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Parkhurst, Johannesburg. We handle garden refuse, garage clean-up, and renovation debris from small stands.',
};

export default function RubbleRemovalParkhurstLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
