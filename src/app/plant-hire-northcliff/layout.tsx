import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Northcliff | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Northcliff, Johannesburg. TLBs and excavators for hire for projects on steep slopes and difficult terrain.',
};

export default function PlantHireNorthcliffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
