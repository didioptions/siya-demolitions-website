import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Johannesburg | Professional Pool Removal Contractors',
  description: 'Professional swimming pool demolition and removal services across Johannesburg. Serving all suburbs including Sandton, Randburg, Roodepoort, and more.',
};

export default function SwimmingPoolDemolitionJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
