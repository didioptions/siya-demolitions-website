import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Johannesburg | Professional Construction & Demolition Cleanup Contractors',
  description: 'Professional site cleaning contractors in Johannesburg. We offer post-construction, commercial, and residential site cleaning and debris removal across all Johannesburg suburbs.',
};

export default function SiteCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
