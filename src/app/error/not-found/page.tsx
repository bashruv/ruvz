"use client";

import { useRouter } from "next/navigation";

import arcii404 from "@/constants/arcii-404";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-4 p-4">
      <pre className="text-xs tracking-widest">{arcii404}</pre>
      <h2 className="text-4xl">Not Found</h2>
      <p className="p-4">The link is either invalid or has expired.</p>
      <button className="btn btn-primary" onClick={() => router.back()}>
        Go Back
      </button>
    </section>
  );
}
