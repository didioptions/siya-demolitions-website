import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Kempton Park | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Kempton Park, Johannesburg. We handle garden refuse, garage clean-up, industrial and construction debris.',
};

export default function RubbleRemovalKemptonParkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
