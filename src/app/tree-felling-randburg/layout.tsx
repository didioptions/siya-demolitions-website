import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Randburg | Professional Tree Felling Contractors',
  description: 'Licensed tree felling contractors in Randburg, Johannesburg. Safe tree removal, stump grinding, and site clearing for residential and commercial properties.',
};

export default function TreeFellingRandburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
