// app/not-found.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <Image
        src="/assets/images/not_found_img.svg"
        alt="Not Found"
        width={400}
        height={400}
        className="mb-6"
      />
      <h2 className="h2-bold text-dark-600 mb-2">Image Not Found</h2>
      <p className="text-dark-400 mb-4">
        The image you&apos;re looking for doesn&apos;t exist or failed to load.<br /> It might have been deleted or the link is incorrect.
      </p>

      <Button asChild className="button bg-purple-gradient bg-cover mt-4">
        <Link href="/">Home page</Link>
      </Button>
    </div>
  );
}
