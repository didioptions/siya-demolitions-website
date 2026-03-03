import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bryanston Demolition Contractors | Luxury Home & Pool Demolition',
  description: 'Elite demolition services in Bryanston. Specializing in luxury home demolition, complex site clearing, and pool removal for properties near the Bryanston Country Club. Licensed & Insured.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
