import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Edenvale | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Edenvale, Johannesburg. We handle garden refuse, garage clean-up, and construction debris.',
};

export default function RubbleRemovalEdenvaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
