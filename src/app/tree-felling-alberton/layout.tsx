import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Alberton | Professional Tree Felling Contractors',
  description: 'Licensed tree felling contractors in Alberton, Johannesburg. Safe tree removal, stump grinding, and site clearing for residential and commercial properties in the East Rand.',
};

export default function TreeFellingAlbertonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
