import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Benoni | Professional Pool Removal',
  description: 'Licensed swimming pool demolition contractors in Benoni, Johannesburg. Safe removal of all pool types, including rubble clearing and site prep in Farrarmere and Rynfield.',
};

export default function SwimmingPoolDemolitionBenoniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
