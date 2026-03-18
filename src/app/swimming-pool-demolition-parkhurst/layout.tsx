import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Parkhurst | Professional Pool Removal',
  description: 'Licensed swimming pool demolition contractors in Parkhurst, Johannesburg. Safe removal of splash pools and jacuzzis from small stands, including rubble clearing.',
};

export default function SwimmingPoolDemolitionParkhurstLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
