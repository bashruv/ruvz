import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  title: "ruvz | Admin",
};

export default async function AdminLayout({ children }: DefaultComponentProps) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return children;
}
