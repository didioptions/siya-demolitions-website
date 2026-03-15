import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Randburg | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Randburg, Johannesburg. We handle garden refuse, garage clean-up, construction debris and more.',
};

export default function RubbleRemovalRandburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
