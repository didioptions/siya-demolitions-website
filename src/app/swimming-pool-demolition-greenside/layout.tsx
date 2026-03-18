import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Greenside | Professional Pool Removal',
  description: 'Licensed swimming pool demolition contractors in Greenside, Johannesburg. Safe pool removal, rubble clearing, and protection of established gardens and golf course properties.',
};

export default function SwimmingPoolDemolitionGreensideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
