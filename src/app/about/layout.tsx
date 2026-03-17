import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Apex Demolitions Projects',
  description: 'Apex Demolitions Projects is a trusted Gauteng-based demolition and construction company offering professional demolition, rubble removal, site cleaning, tree felling, and construction services. Call 078 429 2760.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
