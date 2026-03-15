import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Alberton | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Alberton, Johannesburg. We handle garden refuse, garage clean-up, construction debris and more.',
};

export default function RubbleRemovalAlbertonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
