import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Randburg | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Randburg, Johannesburg. TLBs, excavators, tipper trucks and more for hire on residential and commercial construction sites.',
};

export default function PlantHireRandburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
