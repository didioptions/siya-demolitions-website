import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Demolition Services in Johannesburg | Siya Demolitions Projects",
  description: "Professional demolition, rubble removal, and site preparation services in Gauteng. Trusted by commercial and residential clients across Johannesburg. Call now.",
};

export default function DemolitionServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
