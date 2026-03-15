import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Midrand | Professional Tree Felling Contractors',
  description: 'Licensed tree felling contractors in Midrand, Johannesburg. Safe tree removal, stump grinding, and site clearing for residential estates and commercial properties.',
};

export default function TreeFellingMidrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
