import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Roodepoort | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Roodepoort, Johannesburg. TLBs, excavators, tipper trucks and more for hire on residential and commercial construction sites.',
};

export default function PlantHireRoodepoortLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
