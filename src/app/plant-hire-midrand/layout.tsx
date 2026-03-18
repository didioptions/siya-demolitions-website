import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Midrand | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Midrand, Johannesburg. TLBs, excavators, tipper trucks and more for hire on residential, commercial and development sites.',
};

export default function PlantHireMidrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
