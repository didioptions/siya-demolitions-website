import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Bedfordview | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Bedfordview, Johannesburg. TLBs and Bobcats for hire on high-end residential construction and renovation sites.',
};

export default function PlantHireBedfordviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
