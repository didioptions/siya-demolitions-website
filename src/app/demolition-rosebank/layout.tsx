import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rosebank Demolition Services | Commercial & Residential',
  description: 'Premier demolition contractors in Rosebank for commercial strip-outs, office clearing, and residential demolition. We work around the Rosebank Mall and business district. Licensed & Insured.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
