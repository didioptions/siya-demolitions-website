import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Soweto | Professional Pool Removal',
  description: 'Licensed swimming pool demolition contractors in Soweto, Johannesburg. Safe and affordable removal of all pool types, including rubble clearing and site preparation.',
};

export default function SwimmingPoolDemolitionSowetoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
