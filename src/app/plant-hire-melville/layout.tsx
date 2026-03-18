import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Melville | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Melville, Johannesburg. Bobcats and mini-excavators for hire for renovations and projects on small stands.',
};

export default function PlantHireMelvilleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
