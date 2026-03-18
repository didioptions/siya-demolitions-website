import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Sandton | Professional Pool Removal',
  description: 'Licensed swimming pool demolition contractors in Sandton. Safe removal of all pool types for luxury homes and estates in Morningside, Rivonia, and surrounds.',
};

export default function SwimmingPoolDemolitionSandtonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
