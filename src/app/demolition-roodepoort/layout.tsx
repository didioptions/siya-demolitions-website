import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roodepoort Demolition Services | House & Site Clearing',
  description: 'Leading demolition contractors in Roodepoort. We provide expert house demolition, pool removal, and site clearing services across the West Rand. Licensed, insured, and reliable.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
