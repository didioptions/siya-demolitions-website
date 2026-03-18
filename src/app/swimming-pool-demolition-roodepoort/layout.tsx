import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Roodepoort | Professional Pool Removal',
  description: 'Licensed swimming pool demolition contractors in Roodepoort, Johannesburg. Safe removal of all pool types, including rubble clearing and site prep on the West Rand.',
};

export default function SwimmingPoolDemolitionRoodepoortLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
