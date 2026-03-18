import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Boksburg | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Boksburg, Johannesburg. TLBs, excavators, tipper trucks and more for hire in the East Rand.',
};

export default function PlantHireBoksburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
