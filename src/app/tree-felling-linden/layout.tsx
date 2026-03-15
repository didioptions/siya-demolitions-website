import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Linden | Professional Tree Felling Contractors',
  description: 'Licensed tree felling contractors in Linden, Johannesburg. Safe tree removal, stump grinding, and protection of established gardens.',
};

export default function TreeFellingLindenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
