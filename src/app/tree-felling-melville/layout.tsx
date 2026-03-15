import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Melville | Professional Tree Felling Contractors',
  description: 'Licensed tree felling contractors in Melville, Johannesburg. Safe tree removal from small stands, stump grinding, and garden clearing.',
};

export default function TreeFellingMelvilleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
