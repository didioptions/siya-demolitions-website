import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Germiston | Professional Tree Felling Contractors',
  description: 'Licensed tree felling contractors in Germiston, Johannesburg. Safe tree removal, stump grinding, and site clearing for industrial, commercial, and residential properties.',
};

export default function TreeFellingGermistonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
