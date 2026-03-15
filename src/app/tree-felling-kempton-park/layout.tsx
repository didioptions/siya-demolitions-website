import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Kempton Park | Professional Tree Felling Contractors',
  description: 'Licensed tree felling contractors in Kempton Park, Johannesburg. Safe tree removal, stump grinding, and site clearing for commercial, industrial, and residential properties.',
};

export default function TreeFellingKemptonParkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
