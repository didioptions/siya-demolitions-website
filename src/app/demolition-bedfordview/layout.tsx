import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bedfordview Demolition Services | High-End Home & Site Clearing',
  description: 'Premier demolition contractors in Bedfordview. We specialize in high-end home demolition, delicate site clearing, and pool removal in Senderwood and St Andrews. Licensed and insured.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
