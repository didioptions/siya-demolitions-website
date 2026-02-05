import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Services in Johannesburg | Land & Site Cleanup',
  description: 'Professional site cleaning services for construction and demolition projects in Johannesburg. Perfect for post-project cleanups and land preparation.',
};

export default function SiteCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
