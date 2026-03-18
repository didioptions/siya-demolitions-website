import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Greenside | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Greenside, Johannesburg. TLBs and Bobcats for landscaping and renovation projects, with care for established gardens.',
};

export default function PlantHireGreensideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
