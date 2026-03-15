import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Benoni | Professional Tree Felling Contractors',
  description: 'Licensed tree felling contractors in Benoni, Johannesburg. Safe tree removal, stump grinding, and site clearing for residential and commercial properties.',
};

export default function TreeFellingBenoniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
