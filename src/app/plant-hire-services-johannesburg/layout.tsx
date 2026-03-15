import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Services Johannesburg | Licensed Plant Hire Contractors',
  description: 'Trusted plant hire services across Johannesburg. TLBs, excavators, tipper trucks and more for hire with operators. Serving all suburbs.',
};

export default function PlantHireServicesJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
