import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Greenside | Professional Tree Felling Contractors',
  description: 'Licensed tree felling contractors in Greenside, Johannesburg. Safe tree removal, stump grinding, and protection of established gardens and golf course properties.',
};

export default function TreeFellingGreensideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
