import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Johannesburg | Professional Plant Hire Contractors',
  description: 'Professional plant hire services across Johannesburg. We offer excavators, bulldozers, tipper trucks, and cranes for hire. Serving all suburbs including Sandton, Randburg, Roodepoort, and more.',
};

export default function PlantHireJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
