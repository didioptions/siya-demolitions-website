import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rubble Removal Johannesburg | Fast, Affordable Site Clearing',
  description: 'Need rubble removal in Johannesburg? We offer same-day service for builders rubble, garden refuse, and junk removal. Fast, affordable, and licensed. Get a free quote!',
};

export default function RubbleRemovalJohannesburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
