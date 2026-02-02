import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Siya Demolitions Projects',
  description: 'Learn about Siya Demolitions Projects, our mission, and our commitment to providing safe and reliable demolition services in Gauteng.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
