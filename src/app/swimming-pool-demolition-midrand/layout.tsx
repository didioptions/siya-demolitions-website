import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Midrand | Fast Pool Removal Experts',
  description: 'Affordable swimming pool demolition in Midrand. Fast, safe pool removal with full rubble cleanup for estates in Waterfall, Kyalami, and Carlswald. Call now for a free quote.',
};

export default function SwimmingPoolDemolitionMidrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
