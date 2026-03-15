import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Services Johannesburg | Licensed Tree Felling Contractors',
  description: 'Trusted tree felling services across Johannesburg. Safe tree removal, stump grinding, and site clearing for all suburbs.',
};

export default function TreeFellingServicesJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
