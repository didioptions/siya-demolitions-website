import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Sandton | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Sandton, Johannesburg. TLBs, excavators, tipper trucks and more for hire on residential and commercial construction sites.',
};

export default function PlantHireSandtonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
