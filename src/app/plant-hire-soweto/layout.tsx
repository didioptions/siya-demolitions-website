import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Soweto | Professional Plant Hire Contractors',
  description: 'Affordable and licensed plant hire contractors in Soweto, Johannesburg. TLBs, excavators, tipper trucks and more for hire on residential and community projects.',
};

export default function PlantHireSowetoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
