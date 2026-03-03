import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Licensed Demolition Contractors in Johannesburg | SIMA',
  description: 'Expert home, commercial, and industrial demolition services in Johannesburg. We are licensed contractors managing council approvals, safety, and site clearing.',
};

export default function DemolitionJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
