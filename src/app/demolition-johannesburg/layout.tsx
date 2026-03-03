import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Licensed Demolition Contractors in Johannesburg | SIMA',
  description: 'Expert home, commercial, and industrial demolition services across Johannesburg. We are licensed contractors managing council approvals, safety, and full site clearing. Get your free quote.',
};

export default function DemolitionJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
