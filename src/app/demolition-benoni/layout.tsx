import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demolition Benoni | Professional Demolition Contractors',
  description: 'Licensed demolition contractors in Benoni, Johannesburg. House, commercial, pool demolition and rubble removal services.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
