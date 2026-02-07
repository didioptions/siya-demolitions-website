import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demolition & Rubble Removal in Pretoria | SIMA Demolitions Projects',
  description: 'SIMA Demolitions Projects provides expert demolition, rubble removal, and site clearing services in Pretoria and surrounding areas. Contact us for a quote.',
};

export default function PretoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
