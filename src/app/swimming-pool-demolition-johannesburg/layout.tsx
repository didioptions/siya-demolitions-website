import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Johannesburg | Professional Pool Removal Contractors',
  description: 'Professional swimming pool demolition services in Johannesburg. Safe pool removal, rubble clearing, and full site preparation across all Johannesburg suburbs.',
};

export default function SwimmingPoolDemolitionJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
