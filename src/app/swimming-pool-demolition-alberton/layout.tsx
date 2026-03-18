import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Alberton | Professional Pool Removal',
  description: 'Licensed swimming pool demolition contractors in Alberton, Johannesburg. Safe removal of all pool types, including rubble clearing and site prep in Meyersdal, Brackenhurst and surrounds.',
};

export default function SwimmingPoolDemolitionAlbertonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
