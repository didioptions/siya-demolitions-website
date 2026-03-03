import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alberton Demolition Contractors | House & Pool Demolition',
  description: 'Licensed demolition contractors in Alberton. We specialize in house demolition, swimming pool removal, and site clearing services in Meyersdal, Brackenhurst, and across the East Rand.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
