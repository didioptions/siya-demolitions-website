import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Services in Johannesburg | Siya Demolitions',
  description: 'Fast and reliable rubble removal in Johannesburg. We clear construction debris, renovation waste, and more. Call for a free quote.',
};

export default function RubbleRemovalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
