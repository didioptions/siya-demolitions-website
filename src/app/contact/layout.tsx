import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact SIMA Demolitions Projects | Gauteng',
  description: 'Get in touch with SIMA Demolitions Projects for demolition, rubble removal, site cleaning, tree felling, and construction services in Gauteng. Call 078 429 2760.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
