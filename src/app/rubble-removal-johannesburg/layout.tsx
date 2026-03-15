import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Johannesburg | Garden & Garage Clean-Up Services',
  description: 'Professional rubble removal in Johannesburg. We handle garden refuse, garage clean-up, yard clearing, construction debris, and more across all suburbs.',
};

export default function RubbleRemovalJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
