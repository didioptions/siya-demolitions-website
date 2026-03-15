import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services Johannesburg | Licensed Waste Removal',
  description: 'Trusted rubble removal services across Johannesburg. Garden refuse, garage clean-up, construction debris removal, and more.',
};

export default function RubbleRemovalServicesJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
