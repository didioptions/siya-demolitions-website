import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Johannesburg | Safe Tree Cutting & Removal',
  description: 'Expert tree felling in Johannesburg. Safe, licensed & insured tree removal for residential & commercial properties. Emergency service available. Get a free quote.',
};

export default function TreeFellingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
