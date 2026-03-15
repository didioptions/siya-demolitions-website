import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Johannesburg | Professional Tree Felling Contractors',
  description: 'Professional tree felling services across Johannesburg. Serving all suburbs including Sandton, Randburg, Roodepoort, Midrand, Fourways, Soweto, Alberton, Germiston, Boksburg, Benoni, Kempton Park, Bedfordview, Edenvale, Bryanston, Rosebank, Northcliff, Melville, Linden, Parkhurst, and Greenside.',
};

export default function TreeFellingJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
