import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Kempton Park | Commercial & Industrial Clearing',
  description: 'Licensed rubble removal in Kempton Park. SIMA Demolitions clears construction debris and industrial waste from sites near O.R. Tambo and across the area. Call for a fast quote.',
};

export default function RubbleRemovalKemptonParkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
