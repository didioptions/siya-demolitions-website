import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Bryanston | Professional Tree Felling Contractors',
  description: 'Licensed tree felling contractors in Bryanston, Johannesburg. Safe tree removal, stump grinding, and site clearing for luxury residential properties and estates.',
};

export default function TreeFellingBryanstonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
