import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Services Johannesburg | Construction & Demolition Cleanup',
  description: 'Expert site cleaning services in Johannesburg. Construction, post-demolition & commercial cleanups. Licensed, insured & fast response. Call today.',
};

export default function SiteCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
