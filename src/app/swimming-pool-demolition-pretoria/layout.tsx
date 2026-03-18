import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swimming Pool Demolition Pretoria | Fast Pool Removal Experts',
  description: 'Affordable swimming pool demolition in Pretoria. Fast, safe pool removal with full rubble cleanup for residential and commercial properties in Pretoria East, Centurion, and more. Call now for a free quote.',
};

export default function SwimmingPoolDemolitionPretoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
