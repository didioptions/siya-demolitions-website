
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demolition Johannesburg South | Fast Demolition Contractors',
  description: 'Professional demolition contractors in Johannesburg South. We offer residential and commercial demolition, site clearing, and rubble removal in Glenvista, Alberton, Mondeor, and more. Call for a free quote.',
};

export default function DemolitionJohannesburgSouthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
