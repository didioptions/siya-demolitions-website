import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Fourways | Professional Tree Felling Contractors',
  description: 'Licensed tree felling contractors in Fourways, Johannesburg. Safe tree removal, stump grinding, and site clearing for residential estates and commercial properties.',
};

export default function TreeFellingFourwaysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
