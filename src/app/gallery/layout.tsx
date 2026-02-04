import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Siya Demolitions Projects',
  description: 'View a gallery of our completed demolition, rubble removal, and site clearing projects across Gauteng.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
