import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Midrand | Professional Pool Removal',
  description: 'Licensed swimming pool demolition contractors in Midrand, Johannesburg. Safe removal of all pool types in estates like Waterfall, including rubble clearing and site prep.',
};

export default function SwimmingPoolDemolitionMidrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
