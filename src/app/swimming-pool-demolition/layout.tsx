import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Services in Johannesburg | Siya Demolitions',
  description: 'Safe, affordable pool removal and site cleanup services in Johannesburg for homes and businesses. Concrete, fibreglass, and tiled pools. Call for a free quote.',
};

export default function SwimmingPoolDemolitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
