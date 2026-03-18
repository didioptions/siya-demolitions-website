import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant Hire Parkhurst | Professional Plant Hire Contractors',
  description: 'Licensed plant hire contractors in Parkhurst, Johannesburg. Bobcats and mini-excavators for hire for renovations and projects on small stands.',
};

export default function PlantHireParkhurstLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
