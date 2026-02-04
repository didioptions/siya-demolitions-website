import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Services in Johannesburg | Siya Demolitions',
  description: 'Professional site cleaning and clearance in Johannesburg for construction and demolition projects. Keep your site safe and on schedule. Call for a free quote.',
};

export default function SiteCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
