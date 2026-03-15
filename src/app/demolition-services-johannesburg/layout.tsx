import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demolition Services Johannesburg | Licensed Demolition Contractors',
  description: 'Professional demolition services across Johannesburg. House demolition, commercial demolition, industrial demolition and rubble removal throughout Johannesburg suburbs.',
};

export default function DemolitionServicesJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
