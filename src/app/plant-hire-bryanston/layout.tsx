import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Bryanston | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Bryanston, Johannesburg. TLBs and Bobcats for hire on luxury residential construction and renovation sites.',
};

export default function PlantHireBryanstonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
