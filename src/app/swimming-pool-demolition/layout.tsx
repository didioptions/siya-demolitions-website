import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Johannesburg | Pool Removal & Site Prep',
  description: 'Remove unwanted or damaged pools safely and efficiently. We offer partial or full swimming pool demolition in Johannesburg, including rubble removal and cleanup.',
};

export default function SwimmingPoolDemolitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
