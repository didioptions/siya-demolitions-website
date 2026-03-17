import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Cleaning Rosebank | Professional Site Cleaning Contractors',
  description: 'Licensed site cleaning contractors in Rosebank, Johannesburg. Commercial, residential, and post-construction cleaning in a dense urban environment.',
};

export default function SiteCleaningRosebankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
