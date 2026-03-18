import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Randburg | Professional Pool Removal',
  description: 'Licensed swimming pool demolition contractors in Randburg, Johannesburg. Safe removal of all pool types, including rubble clearing and site prep in Ferndale and Northcliff.',
};

export default function SwimmingPoolDemolitionRandburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
