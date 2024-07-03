"use server";

import { signIn } from "@/lib/auth";

export async function signinAction() {
  await signIn("google", { redirectTo: "/admin" });
}
