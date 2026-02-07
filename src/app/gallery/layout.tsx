import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | SIMA Demolitions Projects',
  description: 'View a gallery of our completed demolition, rubble removal, and site clearing projects across Gauteng.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
