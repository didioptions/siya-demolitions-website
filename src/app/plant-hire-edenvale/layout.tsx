import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Edenvale | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Edenvale, Johannesburg. TLBs, Bobcats and tipper trucks for hire in Greenstone and the Avenues.',
};

export default function PlantHireEdenvaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
