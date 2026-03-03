import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Midrand Demolition Contractors | Estate & Commercial Demolition',
  description: 'Expert demolition contractors in Midrand. We specialize in house demolition in secure estates like Waterfall, commercial site clearing, and pool removal. Licensed and insured.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
