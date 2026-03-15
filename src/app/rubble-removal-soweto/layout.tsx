import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Soweto | Garden & Garage Clean-Up',
  description: 'Licensed rubble removal contractors in Soweto, Johannesburg. We handle garden refuse, garage clean-up, construction debris and more.',
};

export default function RubbleRemovalSowetoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
