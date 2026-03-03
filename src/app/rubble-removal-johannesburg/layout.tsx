import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Johannesburg | Site Clearing & Waste Removal',
  description: 'Fast, licensed, and affordable rubble removal in Johannesburg. SIMA Demolitions Projects offers same-day site clearing for construction, commercial, and residential waste. Call for a free quote.',
  keywords: ['rubble removal johannesburg', 'site clearing johannesburg', 'construction waste removal', 'debris removal gauteng', 'building rubble removal', 'licensed rubble removal'],
};

export default function RubbleRemovalJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
