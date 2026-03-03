import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Centurion Demolition Services | House Demolition & Site Clearing',
  description: 'Professional demolition contractors in Centurion. We offer residential house demolition, pool removal, and full site clearing services in Irene, Highveld, and more. Licensed and compliant.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
