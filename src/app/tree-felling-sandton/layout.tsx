import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Sandton | Professional Tree Felling Contractors',
  description: 'Licensed tree felling contractors in Sandton, Johannesburg. Safe tree removal, stump grinding, and site clearing services for residential and commercial properties.',
};

export default function TreeFellingSandtonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
