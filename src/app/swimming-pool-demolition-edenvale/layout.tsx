import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Edenvale | Professional Pool Removal',
  description: 'Licensed swimming pool demolition contractors in Edenvale, Johannesburg. Safe removal of all pool types, including rubble clearing and site prep in Greenstone and surrounds.',
};

export default function SwimmingPoolDemolitionEdenvaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
