import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Fourways | Professional Pool Removal',
  description: 'Licensed swimming pool demolition contractors in Fourways, Johannesburg. Safe removal of all pool types in estates like Dainfern and Broadacres, including rubble clearing.',
};

export default function SwimmingPoolDemolitionFourwaysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
