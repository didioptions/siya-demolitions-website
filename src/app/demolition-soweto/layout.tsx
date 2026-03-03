import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soweto Demolition Services | House Demolition & Site Clearing',
  description: 'Your local demolition contractors in Soweto. We offer affordable house demolition, community project site clearing, and rubble removal services. Fully licensed and community-focused.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
