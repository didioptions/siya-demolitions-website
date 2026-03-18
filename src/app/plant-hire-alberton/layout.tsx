import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Alberton | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Alberton, Johannesburg. TLBs, excavators, tipper trucks and more for hire in the East Rand.',
};

export default function PlantHireAlbertonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
