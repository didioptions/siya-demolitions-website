import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Northcliff | Professional Tree Felling Contractors',
  description: 'Licensed tree felling contractors in Northcliff, Johannesburg. Safe tree removal on steep slopes, stump grinding, and protection of established gardens.',
};

export default function TreeFellingNorthcliffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
