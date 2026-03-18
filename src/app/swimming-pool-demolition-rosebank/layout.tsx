import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Rosebank | Professional Pool Removal',
  description: 'Licensed swimming pool demolition contractors in Rosebank, Johannesburg. Safe removal of all pool types for residential and commercial properties, including rubble clearing.',
};

export default function SwimmingPoolDemolitionRosebankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
