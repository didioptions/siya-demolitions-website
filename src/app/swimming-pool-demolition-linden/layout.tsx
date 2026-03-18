import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Linden | Professional Pool Removal',
  description: 'Licensed swimming pool demolition contractors in Linden, Johannesburg. Safe removal of all pool types, including rubble clearing and site prep for large residential stands.',
};

export default function SwimmingPoolDemolitionLindenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
