import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Boksburg | Licensed Debris & Site Clearing',
  description: 'Licensed rubble removal in Boksburg. SIMA Demolitions offers fast site clearing for construction waste, residential debris, and garden refuse in Sunward Park, Impala Park, and all of Boksburg. Call for a quote.',
};

export default function RubbleRemovalBoksburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
