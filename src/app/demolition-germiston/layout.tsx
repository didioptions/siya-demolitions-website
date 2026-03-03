import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Germiston Demolition Services | Industrial & Commercial Experts',
  description: 'Leading demolition contractors in Germiston for industrial and commercial projects. We handle factory demolition, warehouse clearing, and site prep. Licensed, insured, and compliant.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
