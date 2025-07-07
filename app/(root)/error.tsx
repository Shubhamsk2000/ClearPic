'use client'; 

import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import Link from "next/link";

export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    console.error("🔥 Error captured by error.tsx:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Something went wrong!</h2>
      <p className="text-dark-500 mb-6">{error.message}</p>
      
      <Button asChild className="button bg-purple-gradient bg-cover mt-8">
        <Link href="/">Home page</Link>
      </Button>
    </div>
  );
}
