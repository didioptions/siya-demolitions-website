import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Germiston | Professional Pool Removal',
  description: 'Licensed swimming pool demolition contractors in Germiston, Johannesburg. Safe removal of all pool types, including rubble clearing and site preparation.',
};

export default function SwimmingPoolDemolitionGermistonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
