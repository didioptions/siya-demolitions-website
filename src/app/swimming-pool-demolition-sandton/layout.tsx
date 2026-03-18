import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Sandton | Fast Pool Removal',
  description: 'Affordable swimming pool demolition in Sandton. Fast, professional pool removal with full cleanup for residential and commercial properties in Sandton, Bryanston, Fourways, and Rivonia. Call for a free quote.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
