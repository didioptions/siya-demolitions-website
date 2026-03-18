import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Linden | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Linden, Johannesburg. TLBs and Bobcats for hire for landscaping, renovations, and construction on large residential stands.',
};

export default function PlantHireLindenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
