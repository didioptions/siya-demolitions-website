import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Boksburg | Professional Pool Removal',
  description: 'Licensed swimming pool demolition contractors in Boksburg, Johannesburg. Safe removal of all pool types, including rubble clearing and site prep in Sunward Park and surrounds.',
};

export default function SwimmingPoolDemolitionBoksburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
