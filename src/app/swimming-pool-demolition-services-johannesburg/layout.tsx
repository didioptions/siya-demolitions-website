import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Services Johannesburg | Licensed Pool Removal',
  description: 'Trusted swimming pool demolition services across Johannesburg. Safe removal of all pool types, including rubble clearing and site prep for all suburbs.',
};

export default function SwimmingPoolDemolitionServicesJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
