import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kempton Park Demolition | Commercial & Residential Services',
  description: 'Top demolition contractors in Kempton Park. We offer commercial and residential demolition, site clearing, and rubble removal near O.R. Tambo. Licensed and insured.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
