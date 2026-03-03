import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Johannesburg CBD | Licensed Site Clearing',
  description: 'Specialist rubble removal for Johannesburg CBD. SIMA Demolitions handles construction debris from high-rises, commercial strip-outs, and renovations with logistical precision. Licensed and insured.',
};

export default function RubbleRemovalJohannesburgCbdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
