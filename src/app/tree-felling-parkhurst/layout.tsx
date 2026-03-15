import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Parkhurst | Professional Tree Felling Contractors',
  description: 'Licensed tree felling contractors in Parkhurst, Johannesburg. Safe tree removal from small stands, stump grinding, and garden clearing.',
};

export default function TreeFellingParkhurstLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
