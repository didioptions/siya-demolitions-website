import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Same Day Rubble Removal Johannesburg | Fast Waste Removal Services',
  description: 'Need rubble removed today? We offer same-day rubble removal in Johannesburg including Sandton, Randburg, Midrand and Roodepoort. Fast quotes & reliable service.',
};

export default function SameDayRubbleRemovalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
