import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Johannesburg | Same-Day Service | Licensed & Affordable',
  description: 'Professional rubble removal in Johannesburg. Fast, licensed & affordable debris removal for residential & construction sites. Get a free quote today.',
};

export default function RubbleRemovalJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
