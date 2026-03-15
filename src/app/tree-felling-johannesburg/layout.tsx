import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Johannesburg | Professional Tree Felling Contractors',
  description: 'Professional tree felling services across Johannesburg. Safe and licensed tree removal, stump grinding, and site clearing. Serving all suburbs including Sandton, Randburg, Roodepoort, and Soweto.',
};

export default function TreeFellingJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
