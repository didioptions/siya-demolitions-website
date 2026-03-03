import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Randburg Demolition Contractors | House, Pool & Site Clearing',
  description: 'Trusted demolition contractors in Randburg. We offer residential house demolition, pool removal, and site clearing in Ferndale, Northcliff, and surrounding areas. Licensed & Insured.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
