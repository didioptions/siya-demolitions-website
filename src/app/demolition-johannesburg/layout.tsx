import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demolition Johannesburg | Professional Demolition Contractors',
  description: 'Professional demolition contractors in Johannesburg. House demolition, commercial demolition, pool demolition and rubble removal across all Johannesburg suburbs.',
};

export default function DemolitionJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
