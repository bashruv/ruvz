"use client";

import { Suspense } from "react";
import { AuthError } from "next-auth";
import { useRouter, useSearchParams } from "next/navigation";

import arcii401 from "@/constants/arcii-401";
import { signinAction } from "@/utils/signin";

function authErrorType(err: AuthError["type"]) {
  switch (err) {
    case "AccessDenied":
      return "This Account isn't Verified. Check your Account Mail Address.";
    default:
      return "Something Wrong. Please Report With URL.";
  }
}

function AuthErrorComponent() {
  const router = useRouter();
  const params = useSearchParams();

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-4 p-4">
      <pre className="text-xs tracking-widest">{arcii401}</pre>
      <h2 className="text-4xl">Unauthorized</h2>
      <p className="p-4">
        {authErrorType(params.get("error") as AuthError["type"])}
      </p>
      <form action={signinAction}>
        <button className="btn btn-primary" type="submit">
          Re-Login
        </button>
      </form>
      <button className="btn btn-primary" onClick={() => router.replace("/")}>
        Go Home
      </button>
    </section>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense>
      <AuthErrorComponent />
    </Suspense>
  );
}
