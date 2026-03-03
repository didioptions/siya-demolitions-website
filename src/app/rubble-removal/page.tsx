// This page now redirects to /rubble-removal-johannesburg in next.config.ts
// This file can be removed or left as is. For safety, we'll leave a placeholder.

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OldRubbleRemovalPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/rubble-removal-johannesburg');
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20 text-center">
      <h1 className="text-2xl font-bold">Redirecting...</h1>
      <p className="mt-2 text-muted-foreground">
        Please wait while we redirect you to our main rubble removal page.
      </p>
    </div>
  );
}

    