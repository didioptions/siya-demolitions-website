
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demolition Bedfordview | Professional Demolition Contractors Near You',
  description: 'Professional demolition services in Bedfordview for residential & commercial projects. We handle demolition, site clearance, and rubble removal in Bedfordview, Edenvale, and Kensington. Fast quotes & experienced service.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
