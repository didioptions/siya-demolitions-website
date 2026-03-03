import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demolition Services in Midrand | SIMA Demolitions',
  description: 'Local demolition contractors in Midrand. We offer house demolition, pool removal, and site clearing services. Fully licensed and insured. Get your free quote.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
