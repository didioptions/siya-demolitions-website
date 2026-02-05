import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Felling Johannesburg | Safe Tree Cutting & Removal',
  description: 'Certified tree felling services in Johannesburg. Remove hazardous or unwanted trees safely with our experienced team. Residential and commercial service available.',
};

export default function TreeFellingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
