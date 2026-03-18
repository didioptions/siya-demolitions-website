import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Kempton Park | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Kempton Park. TLBs, excavators, tipper trucks for hire near O.R. Tambo for commercial, industrial and residential sites.',
};

export default function PlantHireKemptonParkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
