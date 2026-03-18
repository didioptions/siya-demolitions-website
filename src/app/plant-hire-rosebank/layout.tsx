import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Rosebank | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Rosebank, Johannesburg. Bobcats and mini-excavators for hire for projects in dense urban environments.',
};

export default function PlantHireRosebankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
