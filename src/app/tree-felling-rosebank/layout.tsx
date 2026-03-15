import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Rosebank | Professional Tree Felling Contractors',
  description: 'Licensed tree felling contractors in Rosebank, Johannesburg. Safe tree removal for residential and commercial properties in dense urban environments.',
};

export default function TreeFellingRosebankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
