import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Soweto | Professional Tree Felling Contractors',
  description: 'Licensed tree felling contractors in Soweto, Johannesburg. Safe tree removal, stump grinding, and site clearing for residential and community projects.',
};

export default function TreeFellingSowetoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
