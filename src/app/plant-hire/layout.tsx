import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plant & Bobcat Hire Services in Johannesburg | Siya Demolitions',
  description: 'Siya Demolitions offers affordable, reliable plant hire, TLBs, and Bobcats with trained operators for excavation, trenching, land clearing, and more in Johannesburg.',
};

export default function PlantHireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
