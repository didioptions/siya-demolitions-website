"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OldPlantHirePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/plant-hire-johannesburg');
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20 text-center">
      <h1 className="text-2xl font-bold">Redirecting...</h1>
      <p className="mt-2 text-muted-foreground">
        Please wait while we redirect you to our main plant hire page.
      </p>
    </div>
  );
}
