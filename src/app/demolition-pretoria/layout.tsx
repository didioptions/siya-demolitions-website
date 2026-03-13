import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demolition Contractors Pretoria | House & Commercial Demolition',
  description: 'Top demolition contractors in Pretoria. We specialize in house demolition, commercial site clearing, and rubble removal across Pretoria CBD, Centurion, and surrounding areas. Licensed & Insured.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
