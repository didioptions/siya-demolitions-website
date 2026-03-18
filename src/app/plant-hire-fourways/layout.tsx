import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Fourways | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Fourways, Johannesburg. TLBs, excavators, and Bobcats for hire in secure estates like Dainfern and Broadacres.',
};

export default function PlantHireFourwaysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
