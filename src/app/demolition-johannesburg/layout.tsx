import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demolition Johannesburg | Licensed Demolition Contractors',
  description: 'Expert demolition contractors in Johannesburg. We offer licensed residential, commercial, and industrial demolition with full rubble removal. Get a free quote.',
};

export default function DemolitionJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
