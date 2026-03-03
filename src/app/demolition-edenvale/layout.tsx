import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demolition Services in Edenvale | SIMA Demolitions',
  description: 'Local demolition contractors in Edenvale. We offer residential house demolition, pool removal, and site clearing services in Greenstone Hill and the Avenues. Licensed and insured.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
