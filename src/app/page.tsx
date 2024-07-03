import { Metadata } from "next";
import { redirect } from "next/navigation";
import {
  SiGithub,
  SiGoogle,
  SiLinkedin,
  SiVelog,
} from "@icons-pack/react-simple-icons";

import { auth, signIn } from "@/lib/auth";
import arciiTitle from "@/constants/arcii-title";
import { signinAction } from "@/utils/signin";

export default async function HomePage() {
  const session = await auth();

  if (session) {
    redirect("/admin");
  }

  return (
    <main className="flex h-screen flex-col items-center gap-y-4 p-4 text-center">
      <pre className="text-xs tracking-widest">{arciiTitle}</pre>
      <p>Welcome to ruvz!</p>
      <p>If you're a verified user, Login please.</p>
      <form action={signinAction}>
        <button
          className="btn btn-primary flex items-center gap-4"
          type="submit"
        >
          <SiGoogle className="h-5 w-5" />
          Login With Google
        </button>
      </form>
      <p>If you're just a visitor, Check My Information!</p>
      <div className="flex gap-4">
        <a
          href="https://github.com/bashruv"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-square btn-primary"
        >
          <SiGithub />
        </a>
        <a
          href="https://velog.io/@bash_ruv"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-square btn-primary"
        >
          <SiVelog />
        </a>
        <a
          href="https://linkedin.com/in/bashruv"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-square btn-primary"
        >
          <SiLinkedin />
        </a>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "ruvz | URL SHORTER",
  description: "URL Shorter Utilities",
};
