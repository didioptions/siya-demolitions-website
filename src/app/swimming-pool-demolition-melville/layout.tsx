import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Melville | Professional Pool Removal',
  description: 'Licensed swimming pool demolition contractors in Melville, Johannesburg. Safe pool removal from small stands, including rubble clearing and site prep.',
};

export default function SwimmingPoolDemolitionMelvilleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
