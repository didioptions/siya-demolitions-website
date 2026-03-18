import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demolition Johannesburg | Professional Demolition Experts',
  description: 'Professional demolition services in Johannesburg. Safe, fast, and affordable solutions with full site cleanup. Call now for a free quote.',
};

export default function DemolitionJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
