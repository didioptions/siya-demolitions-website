import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demolition Services in Boksburg | SIMA Demolitions',
  description: 'Your local Boksburg demolition contractors. We offer house demolition, pool removal, and complete site clearing services. Fully licensed and insured. Get your free quote today.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
