import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fourways Demolition Contractors | Estate & Residential Demolition',
  description: 'Specialist demolition contractors for Fourways. We handle house demolition in lifestyle estates, pool removal, and site clearing in Dainfern, Broadacres, and surrounds. Licensed & Insured.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
