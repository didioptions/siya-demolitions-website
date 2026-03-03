import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demolition Contractors Johannesburg | Residential & Commercial Experts',
  description: 'Professional demolition services in Johannesburg. Safe, licensed and insured contractors for residential & commercial projects. Request a free quote.',
};

export default function DemolitionJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
