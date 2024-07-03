import { kv } from "@vercel/kv";
import { notFound, redirect } from "next/navigation";

interface RedirectPageProps {
  params: { key: string };
}

export default async function RedirectPage({ params }: RedirectPageProps) {
  const dest = await kv.get(params.key);

  if (!dest) {
    notFound();
  }

  redirect(dest as string);
}
