import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Services in Johannesburg | Siya Demolitions',
  description: 'Safe, controlled tree cutting and removal services in Johannesburg for residential and commercial sites. Call for a free quote.',
};

export default function TreeFellingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
