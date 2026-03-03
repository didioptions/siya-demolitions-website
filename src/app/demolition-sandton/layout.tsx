import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sandton Demolition Contractors | Luxury Home & Pool Demolition',
  description: 'Elite demolition contractors in Sandton. We specialize in luxury home demolition, pool removal, and site clearing in Morningside, Rivonia, and more. Licensed & Insured.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
