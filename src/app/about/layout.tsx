import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About SIMA Demolitions Projects',
  description: 'SIMA Demolitions Projects is a trusted Gauteng-based demolition and construction company offering professional demolition, rubble removal, site cleaning, tree felling, and construction services. Call 078 429 2760.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
