import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Germiston | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Germiston, Johannesburg. TLBs, excavators, tipper trucks for industrial, commercial, and residential projects.',
};

export default function PlantHireGermistonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
