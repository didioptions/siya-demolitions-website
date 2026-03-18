import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Benoni | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Benoni, Johannesburg. TLBs, excavators, tipper trucks and more for hire in Farrarmere, Rynfield, and the East Rand.',
};

export default function PlantHireBenoniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
