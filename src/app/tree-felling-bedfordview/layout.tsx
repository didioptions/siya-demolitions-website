import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Bedfordview | Professional Tree Felling Contractors',
  description: 'Licensed tree felling contractors in Bedfordview, Johannesburg. Safe tree removal, stump grinding, and site clearing for high-end residential properties.',
};

export default function TreeFellingBedfordviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
