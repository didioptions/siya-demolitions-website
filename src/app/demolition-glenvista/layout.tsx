
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demolition Glenvista | Hillside Demolition Experts',
  description: 'Expert demolition contractors in Glenvista. Safe, insured demolition for residential and commercial properties on sloped terrain. Call for a site assessment.',
};

export default function DemolitionGlenvistaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
