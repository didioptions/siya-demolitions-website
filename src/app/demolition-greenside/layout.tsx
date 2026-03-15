import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demolition Greenside | Professional Demolition Contractors',
  description: 'Licensed demolition contractors in Greenside, Johannesburg. House, commercial, pool demolition and rubble removal services.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
