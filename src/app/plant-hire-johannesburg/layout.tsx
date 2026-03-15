import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Johannesburg | Professional Plant Hire Contractors',
  description: 'Affordable plant hire services in Johannesburg. Excavators, TLBs, tipper trucks and construction equipment available across all Johannesburg suburbs.',
};

export default function PlantHireJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
